import { useEffect, useState, useRef } from "react";
import {
  formatDate,
  formatTime,
  gradientColors,
  monthNames,
} from "../components/generalComponents.js";
import "../graphs.css";

function lerpColor(color1, color2, t) {
  const r = Math.round(color1.r * (1 - t) + color2.r * t);
  const g = Math.round(color1.g * (1 - t) + color2.g * t);
  const b = Math.round(color1.b * (1 - t) + color2.b * t);
  return { r, g, b };
}

export function getColorFromGradient(percentage, gradient) {
  if (percentage === 1) percentage = percentage - 0.1;

  const segmentCount = gradient.length - 1;
  const segment = Math.floor(percentage * segmentCount);
  const t = (percentage - segment / segmentCount) * segmentCount;
  return lerpColor(gradient[segment], gradient[segment + 1], t);
}
export function mapToLogScale(val, min, max) {
  val = Math.min(Math.max(val, min), max);

  const powerFraction = 0.3;

  const normalized = (val - min) / (max - min);

  const scaled = Math.pow(normalized, powerFraction);

  return scaled;
}

function HeatmapCell({ date, time, duration, color, hover }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true && hover === true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="HeatmapCell" style={{ backgroundColor: color }} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      {isHovered && <div className="popup-square" >
        {date}
        <div className="popup-square-duration">
          {(duration / (60 * 1000)).toFixed(0.2)}m
        </div>
      </div>
      }
    </div>
  );
}
/*

          */

function Selected({ selected }) {
  return (
    <div className={`Selected ${selected ? 'active' : ''}`}>
      <span className="Checkmark"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></span>
    </div>
  );
}

export function HeatmapYear({ visits, year, selected, onYearClick, small }) {
  return (
    <div className="HeatmapYearContainer" onClick={() => onYearClick ? onYearClick(year) : ""}>

      {year ?
        <div className="YearTitle">{[...year.toString()].map((char, index) => <div key={index} className="YearTitleChar">{char}</div>)}</div>
        : ""}

      <div className="HeatmapPadding">

        <div className="Heatmap" >
          {!small ? ['s', 'm', 't', 'w', 't', 'f', 's'].map((day, index) => { return <div key={index} className="HeatmapPaddingCell">{day}</div> }) : ""}

          {visits.map((day, index) => {
            if (day === null) return <div key={index}></div>;

            let { date, time, duration, color } = day;
            return (
              <HeatmapCell
                key={index}
                date={date}
                time={time}
                duration={duration}
                popup_month={date.substr(date.length - 2, 2) === "01"}
                color={`rgb(${color.r}, ${color.g}, ${color.b})`}
                hover={true}
              />
            );
          })}
        </div>
      </div>
      {!small ? <Selected selected={selected} /> : ""}
    </div>
  );
}

export function addPaddingToVisits(visits) {
  let visitsCopy = [...visits];

  if (visits.length < 1) return visits;

  let firstDay = new Date(visits[0].date);
  for (let i = 0; i < firstDay.getUTCDay(); i++) visitsCopy.unshift(null);

  let lastDay = new Date(visits[visits.length - 1].date);
  for (let i = 0; i < 6 - lastDay.getUTCDay(); i++) visitsCopy.push(null);

  return visitsCopy;
}

export function addEmptyDaysToVisits(visits) {
  

  return visits.reduce((acc, visit) => {
    if (acc.length === 0) {
      acc.push(visit);
      return acc;
    }
    const lastDate = new Date(acc[acc.length - 1].date);

    const nbOfDays = Math.floor(
      (new Date(visit.date).getTime() - lastDate.getTime()) / 86400000
    );

    for (let i = 1; i < nbOfDays; i++) {
      let newDate = new Date(lastDate.getTime() + 86400000 * i);

      acc.push({
        date: formatDate(newDate),
        time: formatTime(newDate),
        duration: 0,
        color: "rgba(0, 0, 0, 0)",
        dateObj: newDate,
      });
    }

    acc.push(visit);
    return acc;
  }, []);
}

export function HeatmapList({ places, onYearChange }) {

  let [visits, setVisits] = useState(() => {
    let max = Math.max(...places.reduce((acc, place) => { acc.push(...place["visits"].map((visit) => visit.duration)); return acc; }, []));
    let visitsDict = {}
    for (let place in places) {
      places[place]["visits"].forEach((visit) => {


        let newVisit = {
          ...visit,
          dateObj: new Date(`${visit.date}T${visit.time}`),
          color: getColorFromGradient(mapToLogScale(visit.duration, 0, max), places[place]["gradient"]),
          name: places[place]["name"],
          address: places[place]["address"],
        }

        if (visit.date in visitsDict) {
          visitsDict[visit.date] = {
            ...visitsDict[visit.date],
            name: [places[place]["name"], visitsDict[visit.date]["name"]].join(", "),
            address: [places[place]["address"], visitsDict[visit.date]["address"]].join(", "),
            time: [visit.time, visitsDict[visit.date]["time"]].join(", "),
            duration: visit.duration + visitsDict[visit.date]["duration"],
            color: mergeRGBColors(newVisit.color, visitsDict[visit.date].color),
          }
        }
        else {
          visitsDict[visit.date] = newVisit;
        }
      })
    }
    return Object.values(visitsDict);
  });


  const [yearsData, setYearsData] = useState(() => {

    visits.sort((a, b) => a.dateObj - b.dateObj);
    if (visits[0].dateObj.getUTCMonth() !== 0 || visits[0].dateObj.getUTCDate() !== 1) {
      const firstDayOfYear = new Date(visits[0].dateObj.getUTCFullYear(), 0, 1);
      visits.unshift({
        date: formatDate(firstDayOfYear),
        time: formatTime(firstDayOfYear),
        duration: 0,
        color: "rgba(0, 0, 0, 0)",
        dateObj: firstDayOfYear,
      });
    }
    if (visits[visits.length - 1].dateObj.getUTCMonth() !== 11 || visits[visits.length - 1].dateObj.getUTCDate() !== 31) {
      const lastDayOfYear = new Date(visits[visits.length - 1].dateObj.getUTCFullYear(), 11, 31);
      visits.push({
        date: formatDate(lastDayOfYear),
        time: formatTime(lastDayOfYear),
        duration: 0,
        color: "rgba(0, 0, 0, 0)",
        dateObj: lastDayOfYear
      });
    }

    const { separatedVisits } = addEmptyDaysToVisits(visits).reduce(
      ({ separatedVisits, lastYear }, visit) => {
        const currYear = visit.dateObj.getUTCFullYear();
        if (currYear === lastYear)
          separatedVisits[separatedVisits.length - 1].push(visit);
        else separatedVisits.push([visit]);

        return { separatedVisits, lastYear: currYear };
      },
      { separatedVisits: [], lastYear: undefined }
    );

    const paddedSeparatedVisits = separatedVisits.map((yearVisits) => {
      return {
        cellData: addPaddingToVisits(yearVisits),
        year: yearVisits.find((visit) => visit !== null).dateObj.getUTCFullYear(),
        selected: true
      }
    });
    return paddedSeparatedVisits

  });

  useEffect(() => {
    if (onYearChange)
      onYearChange(yearsData);
  }, []);

  function onYearClick(year) {
    const newYearsData = [...yearsData];
    newYearsData.forEach((yearData) => {
      if (yearData.year === year) {
        yearData.selected = !yearData.selected;
      }
    }
    )
    setYearsData(newYearsData);

    if (onYearChange) {
      onYearChange(newYearsData)
    }
  }

  return (
    <div className="HeatmapList">
      {yearsData.map((yearData, index) => {
        return <HeatmapYear visits={yearData["cellData"]}
          key={index}
          selected={yearData['selected']} onYearClick={onYearClick}

          year={yearData['cellData'].find((visit) => visit !== null).dateObj.getUTCFullYear()} />;
      })}
    </div>

  );
}
function mergeRGBColors(color1, color2) {
  const mergedR = Math.round((color1.r + color2.r) / 2);
  const mergedG = Math.round((color1.g + color2.g) / 2);
  const mergedB = Math.round((color1.b + color2.b) / 2);

  const mergedColor = { r: mergedR, g: mergedG, b: mergedB };
  return mergedColor;
}

function HeatmapLegend({ places }) {
  return <div style={{ alignSelf: "flex-end" }}>
    {places.map((place, index) => {
      const gradientStr = `linear-gradient(to right, ${place["gradient"].map(color => `rgb(${color.r}, ${color.g}, ${color.b})`).join(', ')})`;

      return <div key={index}>
        {place["name"]}
        <div style={{ width: "5rem", height: "1rem", background: gradientStr }}></div>
      </div>
    })}
  </div>
}
export function HeatmapContainer({ places }) {
  const [hourCount, setHourCount] = useState(0);
  let [workoutCount, setWorkoutCount] = useState(0);
  let [longestWorkout, setLongestWorkout] = useState(0);
  let [objectiveWorkouts, setObjectiveWorkouts] = useState(0);

  function onYearChange(yearsData) {
    let newHourCount = parseInt(yearsData.reduce((acc, yearData) => yearData.selected ? acc + yearData['cellData'].reduce((acc, visit) => {
      if (visit)
        acc += visit.duration
      return acc
    }, 0) : acc, 0) / (1000 * 60 * 60))

    if (newHourCount !== hourCount)
      setHourCount(newHourCount);

    let newWorkoutCount = yearsData.reduce((acc, yearData) => {
      return (yearData.selected ?
        yearData['cellData'].reduce((acc, visit) => (visit && visit['duration'] !== 0 ? 1 : 0) + acc
          , 0)
        : 0) + acc
    }, 0)
    //longestWorkout
    let newLongestWorkout = 0;

    yearsData.forEach(year => {

      if (!year.selected)
        return;

      year["cellData"].forEach(visit => {
        if (visit && visit["duration"] > newLongestWorkout) {
          newLongestWorkout = visit["duration"]
        }
      })
    })
    let firstDate = null;
    let lastDate = null;

    yearsData.forEach((year) => {
      if (!year.selected)
        return;
      year["cellData"].forEach((visit) => {
        if (!visit)
          return;
        const currentDate = visit.dateObj;
        
        if(visit["duration"] == 0){return}

        if (!firstDate || currentDate < firstDate) {
          firstDate = currentDate;
        }
        if (!lastDate || currentDate > lastDate) {
          lastDate = currentDate;
        }
      });
    });

    let visitsPerWeek = 5;

    let daysApart = Math.floor((lastDate - firstDate) / (1000 * 60 * 60 * 24));
    let newObjectiveWorkouts = Math.floor((visitsPerWeek / 7) * daysApart);
    if (objectiveWorkouts !== newObjectiveWorkouts)
      setObjectiveWorkouts(newObjectiveWorkouts)

    if (newLongestWorkout !== longestWorkout)
      setLongestWorkout(newLongestWorkout)
    if (workoutCount !== newWorkoutCount)
      setWorkoutCount(newWorkoutCount)
  }

  for (let place in places)
    places[place]["gradient"] = gradientColors[place % gradientColors.length];

  return (
    <div className="HeatmapContainer">
      <div className="YearsContaierTitle">Heatmap</div>

      <div className="HeatmapGraphs">

        <div className="HeatmapPhraseContainer" style={{width:"14rem",marginRight:"2rem"}}>
          <div style={{display:"flex", flexDirection:"column",gap:".5rem"}}> 
            <div style={{ fontSize: "large", letterSpacing: '.2rem' }}>{hourCount}Hs Total</div>
            <div style={{ fontSize: "large", letterSpacing: '.2rem' }}>{workoutCount} workouts out of {objectiveWorkouts} days</div>
            <div style={{ fontSize: "large", letterSpacing: '.2rem' }}>{(hourCount / (workoutCount === 0 ? 1 : workoutCount)).toFixed(2)}Hs/Workout</div>
            <div style={{ fontSize: "large", letterSpacing: '.2rem' }}>Longest session {((longestWorkout) / (1000 * 60 * 60)).toFixed(2)}Hs</div>
          </div>

          <HeatmapLegend places={places} />
        </div>

        <HeatmapList places={places} onYearChange={onYearChange} />
      </div>
    </div>
  )
}



export function HeatmapSmall({ visits }) {
  return (
    <div className="HeatmapPaddingSmall">

      <div className="HeatmapSmall" >
        {!false ? ['s', 'm', 't', 'w', 't', 'f', 's'].map((day, index) => { return <div key={index} className="HeatmapPaddingCell">{day}</div> }) : ""}

        {visits.map((day, index) => {
          if (day === null) return <div key={index}></div>;

          let { date, time, duration, color } = day;
          return (
            <HeatmapCell
              key={index}
              date={date}
              time={time}
              duration={duration}
              color={`rgb(${color.r}, ${color.g}, ${color.b})`}
            />
          );
        })}
      </div>
    </div>
  )
}
