import { PeriodInput } from "./periodInput.js";
import { PlaceInputWrapper } from "./placesInput.js";
import UploadTakeout from "./UploadTakeoutInput.js";
import { useState } from "react";
import { placesTests } from "../components/generalComponents.js";

import {
  monthToInt,
  createNumberArray,
  TAKEOUTFILEPATTERN, formatDate, formatTime
} from "./generalComponents.js";

import { Visit, Place, ActivitySegment } from "./places.js";

import "../styles.css";


async function readAsTextAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(event.target.result);
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
}

async function filesToPlacesDict(filesArray) {
  const placesDict = {};
  let currActivitySegment = [];
  let nextActivitySegment = [];

  const promises = filesArray.map(async (file) => {
    try {
      const fileContent = await readAsTextAsync(file);

      const jsonObject = JSON.parse(fileContent);
      jsonObject["timelineObjects"].forEach((obj) => {


        if (obj["activitySegment"]) {
          const { activityType, distance } = obj["activitySegment"]
          const { startTimestamp, endTimestamp } = obj["activitySegment"]["duration"];
          const endLat = obj["activitySegment"]["endLocation"]["latitudeE7"];
          const endLong = obj["activitySegment"]["endLocation"]["longitudeE7"];

          const startLat = obj["activitySegment"]["startLocation"]["latitudeE7"];
          const startLong = obj["activitySegment"]["startLocation"]["longitudeE7"];


          currActivitySegment.push(new ActivitySegment(
            formatDate(startTimestamp),
            formatTime(startTimestamp),
            new Date(endTimestamp) - new Date(startTimestamp),
            distance,
            activityType,
            startLong,
            startLat,
            endLong,
            endLat
          ))
          return
        }
        else if (obj["placeVisit"]) {

          const { address, placeId, name } = obj["placeVisit"]["location"];
          const { startTimestamp, endTimestamp } = obj["placeVisit"]["duration"];

          placesDict[placeId] =
            placesDict[placeId] || new Place(address, placeId, name);

          nextActivitySegment = [];
          const newVisit = new Visit(
            formatDate(startTimestamp),
            formatTime(startTimestamp),
            new Date(endTimestamp) - new Date(startTimestamp),
            nextActivitySegment,
            currActivitySegment
          );

          currActivitySegment = nextActivitySegment
          placesDict[placeId].addVisit(newVisit);
        }


      });
    } catch (error) {
      console.error("Error reading file:", error);
    }
  });
  await Promise.all(promises);
  return placesDict;
}
export function PlaceForm({ onPlaceSelected }) {

  const [graphData, setGraphData] = useState({});
  const [yearPeriod, setYearPeriod] = useState([]);
  const [autocompletePlaces, setAutocompletePlaces] = useState([]);
  const [placesDict, setPlacesDict] = useState({});
  function getPlaces() {

    let { endYear, startYear, startMonth, endMonth, places } = graphData;
    if (!places) return;

    let placesFromPeriod = {};
    places.forEach((place) => {
      let autocompletePlace = autocompletePlaces.find((autocompletePlace) => {
        if (autocompletePlace.name.toLowerCase() === place.value.toLowerCase())
          return autocompletePlace;
      });

      if (typeof autocompletePlace === "undefined") return;
      let isEmpty =
        placesDict[autocompletePlace.placeId].hasVisitInPeriod(
          startYear,
          endYear,
          startMonth,
          endMonth
        ).length === 0;

      if (isEmpty) return;

      let visitInPeriod = placesDict[
        autocompletePlace.placeId
      ].getVisitsInPeriod(startYear, endYear, startMonth, endMonth);

      placesFromPeriod[autocompletePlace.placeId] = {
        visits: visitInPeriod,
        placeId: autocompletePlace.placeId,
        address: placesDict[autocompletePlace.placeId].address,
        name: placesDict[autocompletePlace.placeId].name,
      };
    });

    return placesFromPeriod
  }

  async function onFileChange(files) {
    const placesFiles = files.filter((fileObj) =>
      TAKEOUTFILEPATTERN.test(fileObj.name)
    );

    const [startYear, endYear] = placesFiles.reduce(
      (currStartEndYears, fileObj) => {
        const fileYear = parseInt(fileObj.name.split("_")[0]);

        if (fileYear < currStartEndYears[0]) {
          currStartEndYears[0] = fileYear;
        }

        if (fileYear > currStartEndYears[1]) {
          currStartEndYears[1] = fileYear;
        }

        return currStartEndYears;
      },
      [Infinity, -Infinity]
    );

    const newPlaceDict = await filesToPlacesDict(placesFiles);
    //TODO
    setAutocompletePlaces(
      Object.keys(newPlaceDict).map((placeId) => {
        return { name: newPlaceDict[placeId].getBestName(), placeId };
      })
    );

    setPlacesDict(newPlaceDict);

    setGraphData({
      ...graphData,
      files,
    });

    if (startYear === Infinity || endYear === -Infinity) return;
    setYearPeriod(createNumberArray(startYear, endYear));
  }

  function onDateChange(startYear, endYear, startMonth, endMonth) {
    startMonth = monthToInt[startMonth];
    endMonth = monthToInt[endMonth];

    setAutocompletePlaces(
      Object.keys(placesDict)
        .filter((placeId) => {
          return placesDict[placeId].hasVisitInPeriod(
            startYear,
            endYear,
            startMonth,
            endMonth
          );
        })
        .map((placeId) => {
          return { placeId, name: placesDict[placeId].getBestName() };
        })
    );
    setGraphData({ ...graphData, startYear, endYear, startMonth, endMonth });
  }

  function onPlaceChange(places) {
    setGraphData({ ...graphData, places });
  }
  return (
    <div style={{ fontSize: "2.5rem" }}>
      <div className="button" style={{ fontSize: "1rem", position: "absolute", right: "0", top: "0" }} onClick={() => { onPlaceSelected(placesTests) }}>Use sample data</div>
      <div style={{ marginLeft: "3rem" }}>
        <h3 className="unselectable">TAKEOUT</h3>

        <div style={{ marginLeft: "3rem" }}>
          <UploadTakeout onFileChange={onFileChange} />
        </div>
        <h3 className="unselectable">TIME</h3>
        <div style={{ marginLeft: "3rem" }}>
          <PeriodInput yearsRange={yearPeriod} onDateChange={onDateChange} />
        </div>

        <h3 className="unselectable">PLACE</h3>
        <div style={{ marginLeft: "3rem" }}>
          <PlaceInputWrapper
            autocompletePlacesOptions={autocompletePlaces}
            onPlaceChange={onPlaceChange}
          />
        </div>
      </div>
      <div className="button submit-place unselectable" onClick={() => {
        let places = getPlaces()
        if (onPlaceSelected && places) {
          onPlaceSelected(places)
        }
      }
      } >
        GRAPH!
      </div>
    </div>
  );
}
