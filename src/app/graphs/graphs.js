
"use client";
import { HeatmapContainer } from "./heatmap.js";
import { ColumnChartContainer } from "./columnCharts.js";
import { LongestStreakContainer } from "./streak.js";
import * as htmlToImage from 'html-to-image';
import "../graphs.css"
import { StrictMode } from "react";
import { useState } from "react";
import {CommuteGraphContainer} from "./pie/pie.js"

export function Graphs({ places }) {
    console.log(places)
    const captureImage = () => {

        htmlToImage.toPng(document.body)
            .then((dataUrl) => {
                // You can save or display the captured image as needed
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'captured-image.png';
                link.click();
            })
            .catch((error) => {
                console.error('Error capturing image:', error);
            });
    };
    return (<StrictMode >
        <div style={{ display: "flex", flexDirection: "column" }} className="unselectable">

            <HeatmapContainer places={Object.values(places)} />
            <div className="YearsContaierTitle" style={{ fontFamily: "BricolageGrotesque-light", marginLeft: "3rem" }}>Column chart</div>

            <div style={{ display: "flex", flexDirection: "row", width: "90%", margin: "5%" }}>
                <div style={{ fontSize: "3rem", width: "25%" }}></div>
                <ColumnChartContainer places={Object.values(places)} />
            </div>

            
            <div className="YearsContaierTitle" style={{ fontFamily: "BricolageGrotesque-light", marginLeft: "3rem" }}>Commute type</div>
            <CommuteGraphContainer places={Object.values(places)}/>


            <div className="YearsContaierTitle" style={{ fontFamily: "BricolageGrotesque-light", marginLeft: "3rem" }}>Streak</div>
            <div style={{
                marginLeft: '30%'
            }}>
                <LongestStreakContainer places={Object.values(places)} />

            </div>

            <button onClick={captureImage}>
                Capture Image
            </button>
        </div>
    </StrictMode>)

}
