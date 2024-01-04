import { useEffect, useState, useRef, Fragment } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, getElementAtEvent } from 'react-chartjs-2';
import { TypeSelector } from "../../components/generalComponents"


ChartJS.register(ArcElement, Tooltip, Legend);


let activityColors = {
    "IN_BUS": "#FF5733",
    "WALKING": "#33FF57",
    "MOTORCYCLING": "#3366FF",
    "IN_PASSENGER_VEHICLE": "#FF33A1",
    "UNKNOWN_ACTIVITY_TYPE": "#999999",
    "CYCLING": "#FF9933"
}

function CommuteGraph({ commuteData, type, onTypeClick }) {
    let dataset = { data: [], backgroundColor: [] };

    let graphData = { labels: [], datasets: [] };

    switch (type) {
        case "prev":

            dataset["label"] = "commute type for going to the gym";
            dataset["borderWidth"] = 0;
            for (let activityType in commuteData) {
                dataset["data"].push(commuteData[activityType]["commutes"].reduce((prev, curr) => {
                    return curr["isPrev"] ? prev + 1 : prev
                }, 0))
                dataset["backgroundColor"].push(activityColors[activityType])
                graphData["labels"].push(activityType)
            }
            graphData.datasets.push(dataset)
            break;


        case "next":
            dataset["label"] = "commute type for going to the gym";
            dataset["borderWidth"] = 0;
            for (let activityType in commuteData) {
                dataset["data"].push(commuteData[activityType]["commutes"].reduce((prev, curr) => {
                    return !curr["isPrev"] ? prev + 1 : prev
                }, 0))
                dataset["backgroundColor"].push(activityColors[activityType])
                graphData["labels"].push(activityType)
            }
            graphData.datasets.push(dataset)
            break;

        case "total":
            dataset["label"] = "commute type for going to the gym";
            dataset["borderWidth"] = 0;
            for (let activityType in commuteData) {
                dataset["data"].push(commuteData[activityType]["commutes"].length)
                dataset["backgroundColor"].push(activityColors[activityType])
                graphData["labels"].push(activityType)
            }
            graphData.datasets.push(dataset)
            break;
    }
    const chartRef = useRef();
    return <Doughnut ref={chartRef}
        data={graphData}
        onClick={(event) => {
            onTypeClick(getElementAtEvent(chartRef.current, event))
        }} />;
}


const types = ["next", "prev", "total"]


export function CommuteGraphContainer({ places }) {
    let placesOptions = places.map((place)=>{return place.name})
    placesOptions.push("all")
    function commute_data_from_places(places,placeSelected)
    {
        let commuteData = {}
        places.filter((place)=>{
            if(placeSelected === "all"){return true}
            else{return placeSelected === place.name}
    
        }).forEach(element => {
            element["visits"].forEach(element => {
    
    
                element.nextActivitySegment.forEach(element => {
    
                    commuteData[element["activityType"]] = commuteData[element["activityType"]] ? commuteData[element["activityType"]] : {
                        activityType: element["activityType"]
                        , commutes: []
                    };
                    element["isPrev"] = false;
                    commuteData[element["activityType"]]["commutes"].push(element)
                })
    
                element.prevActivitySegment.forEach(element => {
                    commuteData[element["activityType"]] = commuteData[element["activityType"]] ? commuteData[element["activityType"]] : {
                        activityType: element["activityType"]
                        , commutes: []
                    }
                    element["isPrev"] = true;
                    commuteData[element["activityType"]]["commutes"].push(element)
    
    
    
                })
            })
        });
        return commuteData;
    }
    let [type, setType] = useState(types[0])
    let [placeSelected, setPlacesSelected] = useState(placesOptions[0])
    let [commuteData, setCommuteData] = useState(commute_data_from_places(places,placeSelected))


    const onTypeClick = (event) => {
    }

    function onTypeChange(type) {
        setType(type)
    }
    function onPlaceChange(type) {
        setPlacesSelected(type)
        setCommuteData(commute_data_from_places(places,type))
    }

    return <div className="CommuteGraphContainer">
        <div style={{ width: "30%", }}>

        </div>
        <div style={{ marginTop: "2rem" }}>
        <TypeSelector options={types} onChange={onTypeChange} />

            <TypeSelector options={placesOptions} onChange={onPlaceChange} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap:"1rem", marginTop:"2rem"}}>

                <div>
                    segment type
                </div>
                <div>avg duration
                </div>
                <div>number of commutes
                </div>
                <div>distance
                </div>
                {Object.values(commuteData).sort((a, b) => b.commutes.length - a.commutes.length).slice(0, 4).map((commuteObj, index) => {


                    return <Fragment key={index}>
                        <div>
                            {commuteObj["activityType"]}
                        </div>
                        <div>
                        {(commuteObj.commutes.reduce((accumulator, currentObject) => {  return accumulator + currentObject.duration;}, 0) / commuteObj.commutes.length / (60 * 1000)).toFixed(2)}m
                        </div>
                        <div>
                            {commuteObj.commutes.length}
                        </div>
                        <div>
                            {(commuteObj.commutes.reduce((accumulator, currentObject) => {  return currentObject.distance ? accumulator + currentObject.distance : 0;}, 0) / commuteObj.commutes.length / (1000)).toFixed(2)}KM
                        </div>
                    </Fragment>


                })}

            </div>

        </div>

        <div className="Doughnut">
            <CommuteGraph commuteData={commuteData} type={type} onTypeClick={onTypeClick} />
        </div>
    </div>
}