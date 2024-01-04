import { useState } from "react";

export function HideButton({ onClick, isHidden }) {
    return (
        <div
            className={
                "button hide unselectable " + (isHidden ? "arrow-rotated" : "")
            }
            onClick={onClick}
        >
            ▲
        </div>
    );
}

import Image from 'next/image';
import arrowIcon from "../others/arrow.svg"

export function TypeSelector({ onChange, options }) {
    const [optionIndex, setOptionIndex] = useState(0)

    function onClick(direction) {
        let newIndex = null;
        if (direction === "left") {
            if (optionIndex === 0) {
                newIndex = options.length - 1
            } else {
                newIndex = optionIndex - 1
            }
        } else {
            if (optionIndex === options.length - 1) {
                newIndex = 0
            } else {
                newIndex = optionIndex + 1
            }
        }
        onChange(options[newIndex])
        setOptionIndex(newIndex)
    }
    return (
        <div className="AnalysisTypeSelector">
            <div className="Arrow Left" onClick={() => onClick("left")}>
                <Image src={arrowIcon} className="logo" alt="<" />
            </div>
            <div className="AnalysisType">
                {options[optionIndex]}
            </div>
            <div className="Arrow Right" onClick={() => onClick("right")}>
                <Image src={arrowIcon} className="logo" alt=">" />
            </div>
        </div>
    )
}
export const gradientColors = [[
    { r: 253, g: 213, b: 3 },
    { r: 102, g: 11, b: 239 },
    { r: 0, g: 0, b: 0 },

],
[
    { r: 253, g: 213, b: 3 },
    {
        r: 167,
        g: 59,
        b: 8
    },
    { r: 0, g: 0, b: 0 },

]
    ,
[{ r: 253, g: 213, b: 3 },
{
    r: 11,
    g: 87,
    b: 239
},
{ r: 0, g: 0, b: 0 },
],
[

    { r: 253, g: 213, b: 3 },
    {
        r: 239,
        g: 84,
        b: 11
    },
    { r: 0, g: 0, b: 0 },

]

];

export function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

export function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hour = String(date.getUTCHours()).padStart(2, "0");
    const minute = String(date.getUTCMinutes()).padStart(2, "0");
    const second = String(date.getUTCSeconds()).padStart(2, "0");
    return `${hour}:${minute}:${second}`;
}
export function createNumberArray(start, end) {
    return Array(end + 1 - start)
        .fill(0)
        .map((_, index) => {
            return start + index;
        });
}

export const UNSELECTED = 0;
export const SELECTEDEND = 1;
export const SELECTEDSTART = 2;
export const monthNames = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
];
export const monthToInt = {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12,
};

export const monthsDict = {
    JANUARY: 1,
    FEBRUARY: 2,
    MARCH: 3,
    APRIL: 4,
    MAY: 5,
    JUNE: 6,
    JULY: 7,
    AUGUST: 8,
    SEPTEMBER: 9,
    OCTOBER: 10,
    NOVEMBER: 11,
    DECEMBER: 12,
};

export const FILELIMIT = 500;

export const TAKEOUTFILEPATTERN = new RegExp(
    `^\\d{4}_(${Object.keys(monthsDict).join("|")})\\.json$`
);

export const placesTests ={
    "SampleGoogleID0": {
        "visits": [
            {
                "date": "2021-10-05",
                "time": "20:38:49",
                "duration": 7003859,
                "prevActivitySegment": [
                    {
                        "date": "2021-10-05",
                        "time": "20:28:43",
                        "duration": 606060,
                        "distance": 820,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-10-05",
                        "time": "22:35:33",
                        "duration": 735138,
                        "distance": 991,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-10-05T00:00:00.000Z"
            },
            {
                "date": "2021-10-06",
                "time": "20:40:59",
                "duration": 8152668,
                "prevActivitySegment": [
                    {
                        "date": "2021-10-06",
                        "time": "20:24:40",
                        "duration": 978885,
                        "distance": 674,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-10-06",
                        "time": "22:56:51",
                        "duration": 151075,
                        "distance": 793,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-10-06T00:00:00.000Z"
            },
            {
                "date": "2021-10-12",
                "time": "20:31:50",
                "duration": 7997636,
                "prevActivitySegment": [
                    {
                        "date": "2021-10-12",
                        "time": "20:25:46",
                        "duration": 364459,
                        "distance": 618,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-10-12",
                        "time": "22:45:08",
                        "duration": 121397,
                        "distance": 768,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-10-12T00:00:00.000Z"
            },
            {
                "date": "2021-10-13",
                "time": "20:36:48",
                "duration": 5893232,
                "prevActivitySegment": [
                    {
                        "date": "2021-10-13",
                        "time": "20:27:10",
                        "duration": 578248,
                        "distance": 640,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-10-13",
                        "time": "22:15:02",
                        "duration": 611974,
                        "distance": 1160,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-10-13T00:00:00.000Z"
            },
            {
                "date": "2021-10-15",
                "time": "20:27:06",
                "duration": 8086166,
                "prevActivitySegment": [
                    {
                        "date": "2021-10-15",
                        "time": "20:19:15",
                        "duration": 470761,
                        "distance": 654,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-10-15",
                        "time": "22:41:52",
                        "duration": 858095,
                        "distance": 1118,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-10-15T00:00:00.000Z"
            },
            {
                "date": "2021-10-20",
                "time": "20:43:07",
                "duration": 8154426,
                "prevActivitySegment": [
                    {
                        "date": "2021-10-20",
                        "time": "20:21:11",
                        "duration": 1316438,
                        "distance": 972,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-10-20",
                        "time": "22:59:02",
                        "duration": 247255,
                        "distance": 860,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-10-20T00:00:00.000Z"
            },
            {
                "date": "2021-10-25",
                "time": "20:38:57",
                "duration": 5732998,
                "prevActivitySegment": [
                    {
                        "date": "2021-10-25",
                        "time": "20:28:50",
                        "duration": 607010,
                        "distance": 682,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-10-25",
                        "time": "22:14:30",
                        "duration": 364145,
                        "distance": 1029,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-10-25T00:00:00.000Z"
            },
            {
                "date": "2021-10-27",
                "time": "20:37:22",
                "duration": 5216566,
                "prevActivitySegment": [
                    {
                        "date": "2021-10-27",
                        "time": "20:29:36",
                        "duration": 466285,
                        "distance": 589,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-10-27",
                        "time": "22:04:18",
                        "duration": 363088,
                        "distance": 928,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-10-27T00:00:00.000Z"
            },
            {
                "date": "2021-10-28",
                "time": "20:42:00",
                "duration": 6669527,
                "prevActivitySegment": [
                    {
                        "date": "2021-10-28",
                        "time": "20:27:51",
                        "duration": 849362,
                        "distance": 880,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-10-28",
                        "time": "22:33:09",
                        "duration": 244034,
                        "distance": 862,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-10-28T00:00:00.000Z"
            },
            {
                "date": "2021-10-29",
                "time": "20:40:08",
                "duration": 7778675,
                "prevActivitySegment": [
                    {
                        "date": "2021-10-29",
                        "time": "20:29:57",
                        "duration": 611468,
                        "distance": 847,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-10-29",
                        "time": "22:49:47",
                        "duration": 246827,
                        "distance": 880,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-10-29T00:00:00.000Z"
            },
            {
                "date": "2021-11-01",
                "time": "20:37:10",
                "duration": 7927612,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-01",
                        "time": "20:25:02",
                        "duration": 727471,
                        "distance": 916,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-01",
                        "time": "22:49:18",
                        "duration": 121384,
                        "distance": 814,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-01T00:00:00.000Z"
            },
            {
                "date": "2021-11-03",
                "time": "20:35:46",
                "duration": 3342545,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-03",
                        "time": "20:25:40",
                        "duration": 606213,
                        "distance": 719,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-03",
                        "time": "21:31:29",
                        "duration": 976573,
                        "distance": 1248,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-03T00:00:00.000Z"
            },
            {
                "date": "2021-11-04",
                "time": "20:34:14",
                "duration": 4207898,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-04",
                        "time": "20:26:36",
                        "duration": 458597,
                        "distance": 578,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-04",
                        "time": "21:44:22",
                        "duration": 852173,
                        "distance": 1225,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-04T00:00:00.000Z"
            },
            {
                "date": "2021-11-05",
                "time": "20:26:19",
                "duration": 5489159,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-05",
                        "time": "20:17:47",
                        "duration": 511255,
                        "distance": 573,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-05",
                        "time": "21:57:48",
                        "duration": 848947,
                        "distance": 1211,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-05T00:00:00.000Z"
            },
            {
                "date": "2021-11-08",
                "time": "20:34:27",
                "duration": 7997449,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-08",
                        "time": "20:26:21",
                        "duration": 486086,
                        "distance": 618,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-08",
                        "time": "22:47:45",
                        "duration": 242919,
                        "distance": 869,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-08T00:00:00.000Z"
            },
            {
                "date": "2021-11-09",
                "time": "21:08:30",
                "duration": 6742911,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-09",
                        "time": "20:54:18",
                        "duration": 852765,
                        "distance": 1357,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-09",
                        "time": "23:00:53",
                        "duration": 974288,
                        "distance": 1221,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-09T00:00:00.000Z"
            },
            {
                "date": "2021-11-12",
                "time": "20:28:03",
                "duration": 5962134,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-12",
                        "time": "20:17:56",
                        "duration": 606675,
                        "distance": 797,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-12",
                        "time": "22:07:25",
                        "duration": 849338,
                        "distance": 1060,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-12T00:00:00.000Z"
            },
            {
                "date": "2021-11-15",
                "time": "20:34:08",
                "duration": 6279817,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-15",
                        "time": "20:26:02",
                        "duration": 485591,
                        "distance": 592,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-15",
                        "time": "22:18:47",
                        "duration": 246236,
                        "distance": 1147,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-15T00:00:00.000Z"
            },
            {
                "date": "2021-11-16",
                "time": "20:38:46",
                "duration": 4632548,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-16",
                        "time": "20:26:32",
                        "duration": 733978,
                        "distance": 925,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-16",
                        "time": "21:55:59",
                        "duration": 191974,
                        "distance": 970,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-16T00:00:00.000Z"
            },
            {
                "date": "2021-11-17",
                "time": "20:39:08",
                "duration": 7459681,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-17",
                        "time": "20:27:00",
                        "duration": 727977,
                        "distance": 808,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-17",
                        "time": "22:43:27",
                        "duration": 242927,
                        "distance": 858,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-17T00:00:00.000Z"
            },
            {
                "date": "2021-11-19",
                "time": "18:11:58",
                "duration": 1863456,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-19",
                        "time": "18:05:18",
                        "duration": 400209,
                        "distance": 561,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-19",
                        "time": "18:43:02",
                        "duration": 846436,
                        "distance": 1213,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-19T00:00:00.000Z"
            },
            {
                "date": "2021-11-23",
                "time": "20:40:08",
                "duration": 4563579,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-23",
                        "time": "20:28:00",
                        "duration": 727773,
                        "distance": 774,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-23",
                        "time": "21:56:12",
                        "duration": 242739,
                        "distance": 856,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-23T00:00:00.000Z"
            },
            {
                "date": "2021-11-24",
                "time": "20:39:51",
                "duration": 7376276,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-24",
                        "time": "20:27:33",
                        "duration": 738297,
                        "distance": 807,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-24",
                        "time": "22:42:48",
                        "duration": 611475,
                        "distance": 1897,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-24T00:00:00.000Z"
            },
            {
                "date": "2021-11-29",
                "time": "19:18:29",
                "duration": 4235784,
                "prevActivitySegment": [
                    {
                        "date": "2021-11-29",
                        "time": "19:10:24",
                        "duration": 485314,
                        "distance": 663,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-11-29",
                        "time": "20:29:05",
                        "duration": 973814,
                        "distance": 1261,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-11-29T00:00:00.000Z"
            },
            {
                "date": "2021-12-01",
                "time": "20:34:11",
                "duration": 5316772,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-01",
                        "time": "20:24:04",
                        "duration": 607111,
                        "distance": 732,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-01",
                        "time": "22:02:48",
                        "duration": 366321,
                        "distance": 1017,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-01T00:00:00.000Z"
            },
            {
                "date": "2021-12-03",
                "time": "20:25:23",
                "duration": 4226017,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-03",
                        "time": "20:15:15",
                        "duration": 607399,
                        "distance": 763,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-03",
                        "time": "21:35:49",
                        "duration": 269270,
                        "distance": 899,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-03T00:00:00.000Z"
            },
            {
                "date": "2021-12-06",
                "time": "17:10:04",
                "duration": 2752936,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-06",
                        "time": "17:01:05",
                        "duration": 538696,
                        "distance": 688,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-06",
                        "time": "17:55:57",
                        "duration": 852405,
                        "distance": 1162,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-06T00:00:00.000Z"
            },
            {
                "date": "2021-12-10",
                "time": "20:07:02",
                "duration": 4934980,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-10",
                        "time": "19:58:57",
                        "duration": 485823,
                        "distance": 643,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-10",
                        "time": "21:29:17",
                        "duration": 970518,
                        "distance": 1189,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-10T00:00:00.000Z"
            },
            {
                "date": "2021-12-14",
                "time": "20:29:30",
                "duration": 5895657,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-14",
                        "time": "20:19:46",
                        "duration": 584425,
                        "distance": 689,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-14",
                        "time": "22:07:46",
                        "duration": 243081,
                        "distance": 885,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-14T00:00:00.000Z"
            },
            {
                "date": "2021-12-16",
                "time": "19:30:11",
                "duration": 5681112,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-16",
                        "time": "19:22:06",
                        "duration": 485204,
                        "distance": 725,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-16",
                        "time": "21:04:52",
                        "duration": 853606,
                        "distance": 1207,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-16T00:00:00.000Z"
            },
            {
                "date": "2021-12-20",
                "time": "19:53:58",
                "duration": 5152823,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-20",
                        "time": "19:47:35",
                        "duration": 382937,
                        "distance": 1358,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-20",
                        "time": "21:19:51",
                        "duration": 261196,
                        "distance": 871,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-20T00:00:00.000Z"
            },
            {
                "date": "2021-12-21",
                "time": "19:55:12",
                "duration": 5416982,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-21",
                        "time": "19:41:00",
                        "duration": 852122,
                        "distance": 788,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-21",
                        "time": "21:25:29",
                        "duration": 745011,
                        "distance": 1016,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-21T00:00:00.000Z"
            },
            {
                "date": "2021-12-23",
                "time": "19:18:09",
                "duration": 4895338,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-23",
                        "time": "19:12:49",
                        "duration": 319063,
                        "distance": 1284,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-23",
                        "time": "20:39:44",
                        "duration": 284268,
                        "distance": 929,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-23T00:00:00.000Z"
            },
            {
                "date": "2021-12-27",
                "time": "19:04:46",
                "duration": 6260878,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-27",
                        "time": "18:50:26",
                        "duration": 860426,
                        "distance": 1325,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-27",
                        "time": "20:49:07",
                        "duration": 849105,
                        "distance": 1129,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-27T00:00:00.000Z"
            },
            {
                "date": "2021-12-28",
                "time": "19:14:20",
                "duration": 4224980,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-28",
                        "time": "18:55:55",
                        "duration": 1104196,
                        "distance": 1316,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-28",
                        "time": "20:24:45",
                        "duration": 853507,
                        "distance": 1057,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-28T00:00:00.000Z"
            },
            {
                "date": "2021-12-30",
                "time": "19:01:17",
                "duration": 4372860,
                "prevActivitySegment": [
                    {
                        "date": "2021-12-30",
                        "time": "18:43:04",
                        "duration": 1092728,
                        "distance": 843,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2021-12-30",
                        "time": "20:14:10",
                        "duration": 1334855,
                        "distance": 3383,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2021-12-30T00:00:00.000Z"
            },
            {
                "date": "2022-10-03",
                "time": "12:34:35",
                "duration": 5619736,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-03",
                        "time": "12:22:32",
                        "duration": 722428,
                        "distance": 1000,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-03",
                        "time": "14:08:14",
                        "duration": 348552,
                        "distance": 972,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-03T00:00:00.000Z"
            },
            {
                "date": "2022-10-04",
                "time": "13:09:09",
                "duration": 3998632,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-04",
                        "time": "13:05:12",
                        "duration": 236961,
                        "distance": 910,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-04",
                        "time": "14:15:47",
                        "duration": 241129,
                        "distance": 873,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-04T00:00:00.000Z"
            },
            {
                "date": "2022-10-05",
                "time": "12:29:43",
                "duration": 4834452,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-05",
                        "time": "12:21:13",
                        "duration": 509768,
                        "distance": 1343,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-05",
                        "time": "13:50:17",
                        "duration": 214845,
                        "distance": 864,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-05T00:00:00.000Z"
            },
            {
                "date": "2022-10-06",
                "time": "11:48:01",
                "duration": 3680300,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-06",
                        "time": "11:46:04",
                        "duration": 117000,
                        "distance": 765,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-06",
                        "time": "12:49:21",
                        "duration": 199994,
                        "distance": 948,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-06T00:00:00.000Z"
            },
            {
                "date": "2022-10-07",
                "time": "22:30:16",
                "duration": 5384995,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-07",
                        "time": "22:20:31",
                        "duration": 585130,
                        "distance": 1214,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-08",
                        "time": "00:00:01",
                        "duration": 246920,
                        "distance": 863,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-07T00:00:00.000Z"
            },
            {
                "date": "2022-10-11",
                "time": "12:32:33",
                "duration": 4056605,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-11",
                        "time": "12:28:32",
                        "duration": 241143,
                        "distance": 1063,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-11",
                        "time": "13:40:10",
                        "duration": 241825,
                        "distance": 862,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-11T00:00:00.000Z"
            },
            {
                "date": "2022-10-18",
                "time": "13:35:58",
                "duration": 3682250,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-18",
                        "time": "13:29:09",
                        "duration": 409106,
                        "distance": 1178,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-18",
                        "time": "14:37:20",
                        "duration": 248790,
                        "distance": 908,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-18T00:00:00.000Z"
            },
            {
                "date": "2022-10-19",
                "time": "21:34:37",
                "duration": 5804769,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-19",
                        "time": "21:23:19",
                        "duration": 677815,
                        "distance": 1223,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-19",
                        "time": "23:11:22",
                        "duration": 260287,
                        "distance": 1080,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-19T00:00:00.000Z"
            },
            {
                "date": "2022-10-20",
                "time": "13:45:05",
                "duration": 3854278,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-20",
                        "time": "13:35:28",
                        "duration": 577627,
                        "distance": 1331,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-20",
                        "time": "14:49:20",
                        "duration": 245247,
                        "distance": 852,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-20T00:00:00.000Z"
            },
            {
                "date": "2022-10-21",
                "time": "22:45:47",
                "duration": 5927714,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-21",
                        "time": "22:33:58",
                        "duration": 708808,
                        "distance": 1231,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-22",
                        "time": "00:24:34",
                        "duration": 241677,
                        "distance": 885,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-21T00:00:00.000Z"
            },
            {
                "date": "2022-10-24",
                "time": "21:31:50",
                "duration": 7722825,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-24",
                        "time": "21:29:48",
                        "duration": 121820,
                        "distance": 572,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-24",
                        "time": "23:40:33",
                        "duration": 245137,
                        "distance": 894,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-24T00:00:00.000Z"
            },
            {
                "date": "2022-10-25",
                "time": "13:18:14",
                "duration": 4465547,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-25",
                        "time": "13:10:02",
                        "duration": 491712,
                        "distance": 910,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-25",
                        "time": "14:32:40",
                        "duration": 243346,
                        "distance": 866,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-25T00:00:00.000Z"
            },
            {
                "date": "2022-10-26",
                "time": "12:47:23",
                "duration": 4622532,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-26",
                        "time": "12:14:09",
                        "duration": 1994534,
                        "distance": 1364,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-26",
                        "time": "14:04:26",
                        "duration": 171844,
                        "distance": 828,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-26T00:00:00.000Z"
            },
            {
                "date": "2022-10-27",
                "time": "13:19:36",
                "duration": 3789855,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-27",
                        "time": "11:55:02",
                        "duration": 5074184,
                        "distance": 1120,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-27",
                        "time": "14:22:46",
                        "duration": 307395,
                        "distance": 977,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-27T00:00:00.000Z"
            },
            {
                "date": "2022-10-28",
                "time": "22:14:51",
                "duration": 4107103,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-28",
                        "time": "22:08:48",
                        "duration": 363073,
                        "distance": 1053,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-28",
                        "time": "23:23:18",
                        "duration": 242344,
                        "distance": 868,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-28T00:00:00.000Z"
            },
            {
                "date": "2022-10-31",
                "time": "13:09:45",
                "duration": 3158900,
                "prevActivitySegment": [
                    {
                        "date": "2022-10-31",
                        "time": "13:03:42",
                        "duration": 362895,
                        "distance": 957,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-10-31",
                        "time": "14:02:24",
                        "duration": 993939,
                        "distance": 1327,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-10-31T00:00:00.000Z"
            },
            {
                "date": "2022-11-01",
                "time": "23:13:27",
                "duration": 4439697,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-01",
                        "time": "23:02:39",
                        "duration": 647818,
                        "distance": 995,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-02",
                        "time": "00:27:27",
                        "duration": 320741,
                        "distance": 885,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-01T00:00:00.000Z"
            },
            {
                "date": "2022-11-02",
                "time": "13:35:04",
                "duration": 3699044,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-02",
                        "time": "13:21:55",
                        "duration": 788728,
                        "distance": 1670,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-02",
                        "time": "14:36:43",
                        "duration": 306754,
                        "distance": 1000,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-02T00:00:00.000Z"
            },
            {
                "date": "2022-11-03",
                "time": "22:35:43",
                "duration": 5028875,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-03",
                        "time": "22:25:33",
                        "duration": 609809,
                        "distance": 3017,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-03",
                        "time": "23:59:32",
                        "duration": 245164,
                        "distance": 887,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-03T00:00:00.000Z"
            },
            {
                "date": "2022-11-07",
                "time": "13:24:12",
                "duration": 5645437,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-07",
                        "time": "13:16:03",
                        "duration": 489051,
                        "distance": 1145,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-07",
                        "time": "14:58:17",
                        "duration": 241454,
                        "distance": 889,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-07T00:00:00.000Z"
            },
            {
                "date": "2022-11-08",
                "time": "13:25:47",
                "duration": 3347232,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-08",
                        "time": "13:17:42",
                        "duration": 484134,
                        "distance": 1069,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-08",
                        "time": "14:21:34",
                        "duration": 1825112,
                        "distance": 863,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-08T00:00:00.000Z"
            },
            {
                "date": "2022-11-09",
                "time": "13:16:09",
                "duration": 3601402,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-09",
                        "time": "12:49:00",
                        "duration": 1628822,
                        "distance": 1193,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-09",
                        "time": "14:16:10",
                        "duration": 780782,
                        "distance": 869,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-09T00:00:00.000Z"
            },
            {
                "date": "2022-11-10",
                "time": "22:28:27",
                "duration": 2257250,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-10",
                        "time": "22:26:25",
                        "duration": 122496,
                        "distance": 592,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-10",
                        "time": "23:06:05",
                        "duration": 2347516,
                        "distance": 851,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-10T00:00:00.000Z"
            },
            {
                "date": "2022-11-14",
                "time": "12:30:33",
                "duration": 4941212,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-14",
                        "time": "12:24:00",
                        "duration": 392857,
                        "distance": 1131,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-14",
                        "time": "13:52:54",
                        "duration": 476758,
                        "distance": 889,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-14T00:00:00.000Z"
            },
            {
                "date": "2022-11-15",
                "time": "20:52:11",
                "duration": 4103851,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-15",
                        "time": "20:43:20",
                        "duration": 530163,
                        "distance": 1129,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-15",
                        "time": "22:00:34",
                        "duration": 242986,
                        "distance": 847,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-15T00:00:00.000Z"
            },
            {
                "date": "2022-11-22",
                "time": "22:17:59",
                "duration": 4832779,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-22",
                        "time": "22:07:26",
                        "duration": 632685,
                        "distance": 695,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-22",
                        "time": "23:38:31",
                        "duration": 851198,
                        "distance": 1122,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-22T00:00:00.000Z"
            },
            {
                "date": "2022-11-23",
                "time": "13:40:05",
                "duration": 3444104,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-23",
                        "time": "13:03:02",
                        "duration": 2222878,
                        "distance": 1340,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-23",
                        "time": "14:37:29",
                        "duration": 733017,
                        "distance": 1089,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-23T00:00:00.000Z"
            },
            {
                "date": "2022-11-24",
                "time": "22:29:09",
                "duration": 4320465,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-24",
                        "time": "22:22:39",
                        "duration": 389908,
                        "distance": 1017,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-24",
                        "time": "23:41:09",
                        "duration": 243515,
                        "distance": 870,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-24T00:00:00.000Z"
            },
            {
                "date": "2022-11-28",
                "time": "22:25:36",
                "duration": 4479656,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-28",
                        "time": "22:19:34",
                        "duration": 362347,
                        "distance": 849,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-28",
                        "time": "23:40:16",
                        "duration": 973783,
                        "distance": 1150,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-28T00:00:00.000Z"
            },
            {
                "date": "2022-11-29",
                "time": "13:28:19",
                "duration": 3974600,
                "prevActivitySegment": [
                    {
                        "date": "2022-11-29",
                        "time": "13:15:39",
                        "duration": 760731,
                        "distance": 1104,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-11-29",
                        "time": "14:34:34",
                        "duration": 610546,
                        "distance": 846,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-11-29T00:00:00.000Z"
            },
            {
                "date": "2022-12-01",
                "time": "13:40:26",
                "duration": 3376216,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-01",
                        "time": "13:31:14",
                        "duration": 552264,
                        "distance": 1280,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-01",
                        "time": "14:36:42",
                        "duration": 287039,
                        "distance": 837,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-12-01T00:00:00.000Z"
            },
            {
                "date": "2022-12-05",
                "time": "13:41:49",
                "duration": 4931098,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-05",
                        "time": "13:35:28",
                        "duration": 380993,
                        "distance": 1008,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-05",
                        "time": "15:04:00",
                        "duration": 160262,
                        "distance": 839,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-12-05T00:00:00.000Z"
            },
            {
                "date": "2022-12-06",
                "time": "13:45:39",
                "duration": 3616814,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-06",
                        "time": "13:38:56",
                        "duration": 403618,
                        "distance": 1042,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-06",
                        "time": "14:45:56",
                        "duration": 279183,
                        "distance": 834,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-12-06T00:00:00.000Z"
            },
            {
                "date": "2022-12-12",
                "time": "23:17:59",
                "duration": 5620785,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-12",
                        "time": "23:07:33",
                        "duration": 625763,
                        "distance": 1207,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-13",
                        "time": "00:51:39",
                        "duration": 278962,
                        "distance": 875,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-12-12T00:00:00.000Z"
            },
            {
                "date": "2022-12-14",
                "time": "23:48:11",
                "duration": 3851018,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-14",
                        "time": "23:37:16",
                        "duration": 655638,
                        "distance": 1299,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-15",
                        "time": "00:52:22",
                        "duration": 215491,
                        "distance": 835,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-12-14T00:00:00.000Z"
            },
            {
                "date": "2022-12-15",
                "time": "23:08:08",
                "duration": 3908263,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-15",
                        "time": "22:54:41",
                        "duration": 806758,
                        "distance": 1204,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-16",
                        "time": "00:13:16",
                        "duration": 149263,
                        "distance": 812,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-12-15T00:00:00.000Z"
            },
            {
                "date": "2022-12-16",
                "time": "23:28:37",
                "duration": 3831722,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-16",
                        "time": "23:21:41",
                        "duration": 415427,
                        "distance": 887,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-17",
                        "time": "00:32:29",
                        "duration": 274157,
                        "distance": 986,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-12-16T00:00:00.000Z"
            },
            {
                "date": "2022-05-02",
                "time": "22:37:35",
                "duration": 6392538,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-02",
                        "time": "22:25:34",
                        "duration": 720877,
                        "distance": 1118,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-03",
                        "time": "00:24:07",
                        "duration": 447079,
                        "distance": 857,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-02T00:00:00.000Z"
            },
            {
                "date": "2022-05-03",
                "time": "23:02:57",
                "duration": 4527118,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-03",
                        "time": "22:59:25",
                        "duration": 212579,
                        "distance": 1012,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-04",
                        "time": "00:18:24",
                        "duration": 182194,
                        "distance": 890,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-03T00:00:00.000Z"
            },
            {
                "date": "2022-05-04",
                "time": "22:33:43",
                "duration": 5194694,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-04",
                        "time": "22:19:40",
                        "duration": 842876,
                        "distance": 1314,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-05",
                        "time": "00:00:17",
                        "duration": 349267,
                        "distance": 1015,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-04T00:00:00.000Z"
            },
            {
                "date": "2022-05-05",
                "time": "22:40:51",
                "duration": 6115312,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-05",
                        "time": "22:36:42",
                        "duration": 248509,
                        "distance": 847,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-06",
                        "time": "00:22:46",
                        "duration": 216515,
                        "distance": 1181,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-05T00:00:00.000Z"
            },
            {
                "date": "2022-05-11",
                "time": "22:30:08",
                "duration": 1571067,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-11",
                        "time": "20:54:00",
                        "duration": 5768238,
                        "distance": 572,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-11",
                        "time": "22:56:19",
                        "duration": 6574638,
                        "distance": 855,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-11T00:00:00.000Z"
            },
            {
                "date": "2022-05-12",
                "time": "22:33:16",
                "duration": 6611507,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-12",
                        "time": "22:28:20",
                        "duration": 295801,
                        "distance": 725,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-13",
                        "time": "00:23:28",
                        "duration": 505869,
                        "distance": 855,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-12T00:00:00.000Z"
            },
            {
                "date": "2022-05-16",
                "time": "22:11:08",
                "duration": 6947311,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-16",
                        "time": "22:02:38",
                        "duration": 509905,
                        "distance": 1290,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-17",
                        "time": "00:06:55",
                        "duration": 367855,
                        "distance": 1050,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-16T00:00:00.000Z"
            },
            {
                "date": "2022-05-17",
                "time": "22:27:32",
                "duration": 4851591,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-17",
                        "time": "22:20:21",
                        "duration": 431406,
                        "distance": 675,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-17",
                        "time": "23:48:24",
                        "duration": 293424,
                        "distance": 861,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-17T00:00:00.000Z"
            },
            {
                "date": "2022-05-20",
                "time": "22:11:52",
                "duration": 4325308,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-20",
                        "time": "22:00:02",
                        "duration": 710435,
                        "distance": 1260,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-20",
                        "time": "23:23:57",
                        "duration": 207623,
                        "distance": 1030,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-20T00:00:00.000Z"
            },
            {
                "date": "2022-05-23",
                "time": "22:40:26",
                "duration": 5810845,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-23",
                        "time": "22:36:25",
                        "duration": 241067,
                        "distance": 895,
                        "activityType": "MOTORCYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-24",
                        "time": "00:17:17",
                        "duration": 304764,
                        "distance": 1062,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-23T00:00:00.000Z"
            },
            {
                "date": "2022-05-24",
                "time": "22:15:27",
                "duration": 7706200,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-24",
                        "time": "22:03:29",
                        "duration": 718352,
                        "distance": 1270,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-25",
                        "time": "00:23:53",
                        "duration": 369008,
                        "distance": 978,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-24T00:00:00.000Z"
            },
            {
                "date": "2022-05-30",
                "time": "22:28:28",
                "duration": 6762144,
                "prevActivitySegment": [
                    {
                        "date": "2022-05-30",
                        "time": "22:24:26",
                        "duration": 241881,
                        "distance": 857,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-05-31",
                        "time": "00:21:10",
                        "duration": 302480,
                        "distance": 1111,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-05-30T00:00:00.000Z"
            },
            {
                "date": "2022-06-01",
                "time": "22:30:40",
                "duration": 7923907,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-01",
                        "time": "22:26:30",
                        "duration": 249881,
                        "distance": 1070,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-02",
                        "time": "00:42:44",
                        "duration": 241980,
                        "distance": 1089,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-01T00:00:00.000Z"
            },
            {
                "date": "2022-06-02",
                "time": "23:27:23",
                "duration": 4999727,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-02",
                        "time": "23:20:24",
                        "duration": 419722,
                        "distance": 871,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-03",
                        "time": "00:50:43",
                        "duration": 120309,
                        "distance": 746,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-02T00:00:00.000Z"
            },
            {
                "date": "2022-06-06",
                "time": "22:30:28",
                "duration": 5709087,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-06",
                        "time": "22:21:56",
                        "duration": 512203,
                        "distance": 736,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-07",
                        "time": "00:05:37",
                        "duration": 191293,
                        "distance": 840,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-06T00:00:00.000Z"
            },
            {
                "date": "2022-06-07",
                "time": "22:16:50",
                "duration": 4894874,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-07",
                        "time": "22:11:11",
                        "duration": 338347,
                        "distance": 990,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-07",
                        "time": "23:38:24",
                        "duration": 426764,
                        "distance": 1047,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-07T00:00:00.000Z"
            },
            {
                "date": "2022-06-09",
                "time": "22:35:28",
                "duration": 7332419,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-09",
                        "time": "22:31:27",
                        "duration": 240600,
                        "distance": 705,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-10",
                        "time": "00:37:40",
                        "duration": 232531,
                        "distance": 845,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-09T00:00:00.000Z"
            },
            {
                "date": "2022-06-13",
                "time": "21:48:58",
                "duration": 4274878,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-13",
                        "time": "21:44:56",
                        "duration": 241771,
                        "distance": 763,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-13",
                        "time": "23:00:13",
                        "duration": 398629,
                        "distance": 843,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-13T00:00:00.000Z"
            },
            {
                "date": "2022-06-14",
                "time": "22:11:47",
                "duration": 5447047,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-14",
                        "time": "22:06:13",
                        "duration": 333608,
                        "distance": 850,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-14",
                        "time": "23:42:34",
                        "duration": 862131,
                        "distance": 1356,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-14T00:00:00.000Z"
            },
            {
                "date": "2022-06-15",
                "time": "22:55:43",
                "duration": 6998760,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-15",
                        "time": "22:49:39",
                        "duration": 363248,
                        "distance": 1238,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-16",
                        "time": "00:52:21",
                        "duration": 254762,
                        "distance": 887,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-15T00:00:00.000Z"
            },
            {
                "date": "2022-06-21",
                "time": "22:28:03",
                "duration": 26146851,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-21",
                        "time": "22:18:01",
                        "duration": 602576,
                        "distance": 625,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [],
                "dateObj": "2022-06-21T00:00:00.000Z"
            },
            {
                "date": "2022-06-22",
                "time": "21:29:29",
                "duration": 3963539,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-22",
                        "time": "21:23:24",
                        "duration": 365000,
                        "distance": 854,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-22",
                        "time": "22:35:32",
                        "duration": 326394,
                        "distance": 901,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-22T00:00:00.000Z"
            },
            {
                "date": "2022-06-27",
                "time": "22:18:55",
                "duration": 6910090,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-27",
                        "time": "22:09:51",
                        "duration": 543409,
                        "distance": 1287,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-28",
                        "time": "00:14:05",
                        "duration": 313690,
                        "distance": 853,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-27T00:00:00.000Z"
            },
            {
                "date": "2022-06-28",
                "time": "22:19:52",
                "duration": 4286198,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-28",
                        "time": "22:16:15",
                        "duration": 216575,
                        "distance": 962,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-28",
                        "time": "23:31:18",
                        "duration": 241287,
                        "distance": 889,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-28T00:00:00.000Z"
            },
            {
                "date": "2022-06-29",
                "time": "20:21:15",
                "duration": 6942535,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-29",
                        "time": "20:17:36",
                        "duration": 219110,
                        "distance": 752,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-06-29",
                        "time": "22:16:57",
                        "duration": 324500,
                        "distance": 987,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-29T00:00:00.000Z"
            },
            {
                "date": "2022-06-30",
                "time": "23:21:38",
                "duration": 5930271,
                "prevActivitySegment": [
                    {
                        "date": "2022-06-30",
                        "time": "23:15:28",
                        "duration": 370497,
                        "distance": 381,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-01",
                        "time": "15:38:42",
                        "duration": 600584,
                        "distance": 176,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-06-30T00:00:00.000Z"
            },
            {
                "date": "2022-08-01",
                "time": "22:30:40",
                "duration": 6455924,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-01",
                        "time": "22:24:27",
                        "duration": 372634,
                        "distance": 1296,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-02",
                        "time": "00:18:15",
                        "duration": 370194,
                        "distance": 755,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-01T00:00:00.000Z"
            },
            {
                "date": "2022-08-02",
                "time": "22:23:23",
                "duration": 6087329,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-02",
                        "time": "22:20:00",
                        "duration": 203148,
                        "distance": 696,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-03",
                        "time": "00:04:50",
                        "duration": 590996,
                        "distance": 851,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-02T00:00:00.000Z"
            },
            {
                "date": "2022-08-03",
                "time": "21:29:22",
                "duration": 6715959,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-03",
                        "time": "21:25:23",
                        "duration": 239503,
                        "distance": 824,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-03",
                        "time": "23:21:18",
                        "duration": 171550,
                        "distance": 844,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-03T00:00:00.000Z"
            },
            {
                "date": "2022-08-04",
                "time": "22:30:35",
                "duration": 6762202,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-04",
                        "time": "22:26:34",
                        "duration": 240781,
                        "distance": 1037,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-05",
                        "time": "00:23:17",
                        "duration": 244696,
                        "distance": 868,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-04T00:00:00.000Z"
            },
            {
                "date": "2022-08-08",
                "time": "22:09:11",
                "duration": 10560142,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-08",
                        "time": "21:58:54",
                        "duration": 617343,
                        "distance": 2656,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [],
                "dateObj": "2022-08-08T00:00:00.000Z"
            },
            {
                "date": "2022-08-09",
                "time": "22:39:02",
                "duration": 4337742,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-09",
                        "time": "22:32:57",
                        "duration": 364407,
                        "distance": 959,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-09",
                        "time": "23:51:19",
                        "duration": 175583,
                        "distance": 804,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-09T00:00:00.000Z"
            },
            {
                "date": "2022-08-10",
                "time": "23:11:21",
                "duration": 4641613,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-10",
                        "time": "22:46:59",
                        "duration": 1461519,
                        "distance": 5544,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-11",
                        "time": "00:28:42",
                        "duration": 252044,
                        "distance": 871,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-10T00:00:00.000Z"
            },
            {
                "date": "2022-08-11",
                "time": "23:12:17",
                "duration": 5969938,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-11",
                        "time": "22:54:36",
                        "duration": 1061076,
                        "distance": 1287,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-12",
                        "time": "00:51:47",
                        "duration": 219418,
                        "distance": 854,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-11T00:00:00.000Z"
            },
            {
                "date": "2022-08-16",
                "time": "22:20:40",
                "duration": 5022109,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-16",
                        "time": "22:13:12",
                        "duration": 448792,
                        "distance": 690,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-16",
                        "time": "23:44:22",
                        "duration": 240076,
                        "distance": 887,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-16T00:00:00.000Z"
            },
            {
                "date": "2022-08-17",
                "time": "21:25:42",
                "duration": 6811292,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-17",
                        "time": "21:21:38",
                        "duration": 243857,
                        "distance": 561,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-17",
                        "time": "23:19:13",
                        "duration": 273755,
                        "distance": 850,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-17T00:00:00.000Z"
            },
            {
                "date": "2022-08-18",
                "time": "22:42:19",
                "duration": 6506015,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-18",
                        "time": "22:38:47",
                        "duration": 211877,
                        "distance": 467,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-19",
                        "time": "00:30:45",
                        "duration": 426613,
                        "distance": 855,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-18T00:00:00.000Z"
            },
            {
                "date": "2022-08-19",
                "time": "22:56:36",
                "duration": 4897385,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-19",
                        "time": "22:47:35",
                        "duration": 540609,
                        "distance": 1279,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-20",
                        "time": "00:18:13",
                        "duration": 216360,
                        "distance": 841,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-19T00:00:00.000Z"
            },
            {
                "date": "2022-08-23",
                "time": "12:05:29",
                "duration": 5127094,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-23",
                        "time": "11:56:26",
                        "duration": 542488,
                        "distance": 1100,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-23",
                        "time": "13:30:56",
                        "duration": 121991,
                        "distance": 835,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-23T00:00:00.000Z"
            },
            {
                "date": "2022-08-24",
                "time": "13:28:47",
                "duration": 4304707,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-24",
                        "time": "13:17:07",
                        "duration": 699796,
                        "distance": 1266,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-24",
                        "time": "14:40:31",
                        "duration": 439094,
                        "distance": 855,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-24T00:00:00.000Z"
            },
            {
                "date": "2022-08-25",
                "time": "12:17:03",
                "duration": 5473529,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-25",
                        "time": "12:06:28",
                        "duration": 634732,
                        "distance": 1275,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-25",
                        "time": "13:48:17",
                        "duration": 267927,
                        "distance": 868,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-25T00:00:00.000Z"
            },
            {
                "date": "2022-08-26",
                "time": "22:38:22",
                "duration": 4573169,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-26",
                        "time": "22:28:06",
                        "duration": 616516,
                        "distance": 856,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-26",
                        "time": "23:54:35",
                        "duration": 204656,
                        "distance": 903,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-26T00:00:00.000Z"
            },
            {
                "date": "2022-08-27",
                "time": "11:40:53",
                "duration": 6098086,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-27",
                        "time": "11:34:48",
                        "duration": 365152,
                        "distance": 1098,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-27",
                        "time": "13:22:31",
                        "duration": 231784,
                        "distance": 845,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-27T00:00:00.000Z"
            },
            {
                "date": "2022-08-29",
                "time": "20:34:04",
                "duration": 7053858,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-29",
                        "time": "20:29:45",
                        "duration": 259482,
                        "distance": 694,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-29",
                        "time": "22:31:38",
                        "duration": 491349,
                        "distance": 2488,
                        "activityType": "MOTORCYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-29T00:00:00.000Z"
            },
            {
                "date": "2022-08-30",
                "time": "13:26:48",
                "duration": 4358556,
                "prevActivitySegment": [
                    {
                        "date": "2022-08-30",
                        "time": "13:22:45",
                        "duration": 243275,
                        "distance": 985,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-08-30",
                        "time": "14:39:27",
                        "duration": 241603,
                        "distance": 859,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-08-30T00:00:00.000Z"
            },
            {
                "date": "2022-01-03",
                "time": "19:03:24",
                "duration": 5649324,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-03",
                        "time": "18:47:14",
                        "duration": 969964,
                        "distance": 1331,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-03",
                        "time": "20:37:33",
                        "duration": 970953,
                        "distance": 1338,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-03T00:00:00.000Z"
            },
            {
                "date": "2022-01-04",
                "time": "18:58:07",
                "duration": 2604616,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-04",
                        "time": "18:43:54",
                        "duration": 852646,
                        "distance": 1229,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-04",
                        "time": "19:41:31",
                        "duration": 970439,
                        "distance": 1359,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-04T00:00:00.000Z"
            },
            {
                "date": "2022-01-05",
                "time": "18:55:35",
                "duration": 3047293,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-05",
                        "time": "18:41:24",
                        "duration": 851043,
                        "distance": 1205,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-05",
                        "time": "19:46:22",
                        "duration": 1092777,
                        "distance": 1253,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-05T00:00:00.000Z"
            },
            {
                "date": "2022-01-06",
                "time": "18:56:17",
                "duration": 3978209,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-06",
                        "time": "18:39:53",
                        "duration": 984463,
                        "distance": 1231,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-06",
                        "time": "20:02:36",
                        "duration": 849493,
                        "distance": 1058,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-06T00:00:00.000Z"
            },
            {
                "date": "2022-01-11",
                "time": "18:58:40",
                "duration": 3763333,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-11",
                        "time": "18:53:17",
                        "duration": 322871,
                        "distance": 1128,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-11",
                        "time": "20:01:24",
                        "duration": 969537,
                        "distance": 1373,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-11T00:00:00.000Z"
            },
            {
                "date": "2022-01-17",
                "time": "14:42:12",
                "duration": 1877713,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-17",
                        "time": "14:28:02",
                        "duration": 850491,
                        "distance": 1222,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-17",
                        "time": "15:13:30",
                        "duration": 821339,
                        "distance": 1285,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-17T00:00:00.000Z"
            },
            {
                "date": "2022-01-19",
                "time": "18:57:36",
                "duration": 2283685,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-19",
                        "time": "18:43:20",
                        "duration": 855975,
                        "distance": 1228,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-19",
                        "time": "19:35:40",
                        "duration": 970904,
                        "distance": 1345,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-19T00:00:00.000Z"
            },
            {
                "date": "2022-01-21",
                "time": "19:15:20",
                "duration": 2835864,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-21",
                        "time": "19:00:55",
                        "duration": 865337,
                        "distance": 1278,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-21",
                        "time": "20:02:36",
                        "duration": 852899,
                        "distance": 1081,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-21T00:00:00.000Z"
            },
            {
                "date": "2022-01-24",
                "time": "19:11:26",
                "duration": 3626000,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-24",
                        "time": "18:57:11",
                        "duration": 855238,
                        "distance": 1178,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-24",
                        "time": "20:11:52",
                        "duration": 849532,
                        "distance": 1101,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-24T00:00:00.000Z"
            },
            {
                "date": "2022-01-25",
                "time": "19:18:06",
                "duration": 3550686,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-25",
                        "time": "19:03:56",
                        "duration": 849973,
                        "distance": 1121,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-25",
                        "time": "20:17:17",
                        "duration": 974597,
                        "distance": 1323,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-25T00:00:00.000Z"
            },
            {
                "date": "2022-01-26",
                "time": "19:09:30",
                "duration": 2603242,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-26",
                        "time": "18:55:14",
                        "duration": 856202,
                        "distance": 1281,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-26",
                        "time": "19:52:53",
                        "duration": 974574,
                        "distance": 1347,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-26T00:00:00.000Z"
            },
            {
                "date": "2022-01-27",
                "time": "19:21:55",
                "duration": 2866101,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-27",
                        "time": "19:07:38",
                        "duration": 856952,
                        "distance": 1239,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-27",
                        "time": "20:09:42",
                        "duration": 838724,
                        "distance": 1166,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-27T00:00:00.000Z"
            },
            {
                "date": "2022-01-31",
                "time": "19:02:01",
                "duration": 2610555,
                "prevActivitySegment": [
                    {
                        "date": "2022-01-31",
                        "time": "18:47:46",
                        "duration": 854754,
                        "distance": 1267,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-01-31",
                        "time": "19:45:32",
                        "duration": 855537,
                        "distance": 1190,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-01-31T00:00:00.000Z"
            },
            {
                "date": "2022-04-04",
                "time": "22:01:26",
                "duration": 7124286,
                "prevActivitySegment": [
                    {
                        "date": "2022-04-04",
                        "time": "21:44:46",
                        "duration": 999485,
                        "distance": 1153,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-04-05",
                        "time": "00:00:10",
                        "duration": 363894,
                        "distance": 2460,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-04-04T00:00:00.000Z"
            },
            {
                "date": "2022-04-06",
                "time": "21:50:42",
                "duration": 8050109,
                "prevActivitySegment": [
                    {
                        "date": "2022-04-06",
                        "time": "21:38:58",
                        "duration": 704175,
                        "distance": 2256,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-04-07",
                        "time": "00:04:52",
                        "duration": 401639,
                        "distance": 1109,
                        "activityType": "MOTORCYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-04-06T00:00:00.000Z"
            },
            {
                "date": "2022-04-07",
                "time": "22:36:15",
                "duration": 4375233,
                "prevActivitySegment": [
                    {
                        "date": "2022-04-07",
                        "time": "22:28:11",
                        "duration": 484029,
                        "distance": 1279,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-04-07",
                        "time": "23:49:10",
                        "duration": 378749,
                        "distance": 895,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-04-07T00:00:00.000Z"
            },
            {
                "date": "2022-04-11",
                "time": "21:50:09",
                "duration": 5944704,
                "prevActivitySegment": [
                    {
                        "date": "2022-04-11",
                        "time": "21:41:34",
                        "duration": 515389,
                        "distance": 1250,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-04-11",
                        "time": "23:29:14",
                        "duration": 242489,
                        "distance": 945,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-04-11T00:00:00.000Z"
            },
            {
                "date": "2022-04-12",
                "time": "22:32:32",
                "duration": 5026407,
                "prevActivitySegment": [
                    {
                        "date": "2022-04-12",
                        "time": "22:30:30",
                        "duration": 121453,
                        "distance": 614,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-04-12",
                        "time": "23:56:18",
                        "duration": 367199,
                        "distance": 1045,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-04-12T00:00:00.000Z"
            },
            {
                "date": "2022-04-18",
                "time": "22:14:48",
                "duration": 4455425,
                "prevActivitySegment": [
                    {
                        "date": "2022-04-18",
                        "time": "22:09:26",
                        "duration": 321577,
                        "distance": 881,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-04-18",
                        "time": "23:29:03",
                        "duration": 327142,
                        "distance": 870,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-04-18T00:00:00.000Z"
            },
            {
                "date": "2022-04-19",
                "time": "22:08:14",
                "duration": 3817948,
                "prevActivitySegment": [
                    {
                        "date": "2022-04-19",
                        "time": "22:03:30",
                        "duration": 283551,
                        "distance": 880,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-04-19",
                        "time": "23:11:52",
                        "duration": 506551,
                        "distance": 886,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-04-19T00:00:00.000Z"
            },
            {
                "date": "2022-04-20",
                "time": "22:37:13",
                "duration": 4161527,
                "prevActivitySegment": [
                    {
                        "date": "2022-04-20",
                        "time": "22:33:11",
                        "duration": 242088,
                        "distance": 863,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-04-20",
                        "time": "23:46:34",
                        "duration": 242034,
                        "distance": 843,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-04-20T00:00:00.000Z"
            },
            {
                "date": "2022-04-25",
                "time": "22:32:44",
                "duration": 5861068,
                "prevActivitySegment": [
                    {
                        "date": "2022-04-25",
                        "time": "22:25:02",
                        "duration": 461666,
                        "distance": 1261,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-04-26",
                        "time": "00:10:25",
                        "duration": 243362,
                        "distance": 1013,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-04-25T00:00:00.000Z"
            },
            {
                "date": "2022-04-26",
                "time": "22:31:29",
                "duration": 3606558,
                "prevActivitySegment": [
                    {
                        "date": "2022-04-26",
                        "time": "22:25:22",
                        "duration": 367527,
                        "distance": 676,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-04-26",
                        "time": "23:31:36",
                        "duration": 362063,
                        "distance": 895,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-04-26T00:00:00.000Z"
            },
            {
                "date": "2022-04-27",
                "time": "22:23:37",
                "duration": 6530889,
                "prevActivitySegment": [
                    {
                        "date": "2022-04-27",
                        "time": "22:12:58",
                        "duration": 639328,
                        "distance": 1270,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-04-28",
                        "time": "00:12:28",
                        "duration": 327572,
                        "distance": 1023,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-04-27T00:00:00.000Z"
            },
            {
                "date": "2022-03-07",
                "time": "19:04:54",
                "duration": 4625913,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-07",
                        "time": "18:50:44",
                        "duration": 849108,
                        "distance": 1190,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-07",
                        "time": "20:22:00",
                        "duration": 853591,
                        "distance": 1250,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-07T00:00:00.000Z"
            },
            {
                "date": "2022-03-08",
                "time": "18:52:20",
                "duration": 3805394,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-08",
                        "time": "18:38:10",
                        "duration": 850120,
                        "distance": 1190,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-08",
                        "time": "19:55:45",
                        "duration": 850423,
                        "distance": 1137,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-08T00:00:00.000Z"
            },
            {
                "date": "2022-03-14",
                "time": "21:58:11",
                "duration": 5755515,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-14",
                        "time": "21:43:59",
                        "duration": 851977,
                        "distance": 1251,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-14",
                        "time": "23:34:06",
                        "duration": 730991,
                        "distance": 1002,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-14T00:00:00.000Z"
            },
            {
                "date": "2022-03-15",
                "time": "22:44:43",
                "duration": 4635104,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-15",
                        "time": "22:27:55",
                        "duration": 1007678,
                        "distance": 2385,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-16",
                        "time": "00:01:58",
                        "duration": 855347,
                        "distance": 1197,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-15T00:00:00.000Z"
            },
            {
                "date": "2022-03-16",
                "time": "21:42:57",
                "duration": 5752314,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-16",
                        "time": "21:32:51",
                        "duration": 606855,
                        "distance": 815,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-16",
                        "time": "23:18:50",
                        "duration": 848542,
                        "distance": 1122,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-16T00:00:00.000Z"
            },
            {
                "date": "2022-03-17",
                "time": "22:39:18",
                "duration": 5703976,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-17",
                        "time": "22:29:10",
                        "duration": 607390,
                        "distance": 674,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-18",
                        "time": "00:14:22",
                        "duration": 853011,
                        "distance": 1079,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-17T00:00:00.000Z"
            },
            {
                "date": "2022-03-21",
                "time": "22:04:36",
                "duration": 6907898,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-21",
                        "time": "21:50:20",
                        "duration": 855684,
                        "distance": 1259,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-21",
                        "time": "23:59:44",
                        "duration": 363594,
                        "distance": 1155,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-21T00:00:00.000Z"
            },
            {
                "date": "2022-03-22",
                "time": "21:54:26",
                "duration": 5914873,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-22",
                        "time": "21:50:22",
                        "duration": 243651,
                        "distance": 879,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-22",
                        "time": "23:33:01",
                        "duration": 244984,
                        "distance": 866,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-22T00:00:00.000Z"
            },
            {
                "date": "2022-03-23",
                "time": "22:01:48",
                "duration": 4851014,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-23",
                        "time": "21:31:33",
                        "duration": 1814432,
                        "distance": 5547,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-23",
                        "time": "23:22:39",
                        "duration": 365305,
                        "distance": 907,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-23T00:00:00.000Z"
            },
            {
                "date": "2022-03-25",
                "time": "22:02:22",
                "duration": 4863474,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-25",
                        "time": "21:56:18",
                        "duration": 364368,
                        "distance": 857,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-25",
                        "time": "23:23:26",
                        "duration": 243796,
                        "distance": 864,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-25T00:00:00.000Z"
            },
            {
                "date": "2022-03-28",
                "time": "21:56:01",
                "duration": 6254508,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-28",
                        "time": "21:47:56",
                        "duration": 484619,
                        "distance": 1330,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-28",
                        "time": "23:40:15",
                        "duration": 367320,
                        "distance": 1063,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-28T00:00:00.000Z"
            },
            {
                "date": "2022-03-29",
                "time": "22:39:51",
                "duration": 3669779,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-29",
                        "time": "22:27:41",
                        "duration": 730507,
                        "distance": 890,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-29",
                        "time": "23:41:01",
                        "duration": 368116,
                        "distance": 901,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-29T00:00:00.000Z"
            },
            {
                "date": "2022-03-30",
                "time": "22:23:59",
                "duration": 7012964,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-30",
                        "time": "21:59:39",
                        "duration": 1460367,
                        "distance": 5116,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-03-31",
                        "time": "00:20:52",
                        "duration": 377548,
                        "distance": 857,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-30T00:00:00.000Z"
            },
            {
                "date": "2022-03-31",
                "time": "23:05:27",
                "duration": 5982524,
                "prevActivitySegment": [
                    {
                        "date": "2022-03-31",
                        "time": "22:57:22",
                        "duration": 484788,
                        "distance": 4670,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-01",
                        "time": "01:00:28",
                        "duration": 439864,
                        "distance": 849,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-03-31T00:00:00.000Z"
            },
            {
                "date": "2022-07-01",
                "time": "22:13:16",
                "duration": 4384870,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-01",
                        "time": "22:02:13",
                        "duration": 663017,
                        "distance": 1332,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-01",
                        "time": "23:26:21",
                        "duration": 615540,
                        "distance": 850,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-01T00:00:00.000Z"
            },
            {
                "date": "2022-07-04",
                "time": "20:34:47",
                "duration": 1690449,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-04",
                        "time": "20:26:43",
                        "duration": 483413,
                        "distance": 760,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-04",
                        "time": "21:02:57",
                        "duration": 13524727,
                        "distance": 848,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-04T00:00:00.000Z"
            },
            {
                "date": "2022-07-05",
                "time": "22:24:03",
                "duration": 4377320,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-05",
                        "time": "22:19:59",
                        "duration": 244072,
                        "distance": 761,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-05",
                        "time": "23:37:01",
                        "duration": 310880,
                        "distance": 3691,
                        "activityType": "MOTORCYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-05T00:00:00.000Z"
            },
            {
                "date": "2022-07-06",
                "time": "21:09:25",
                "duration": 5278187,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-06",
                        "time": "21:04:21",
                        "duration": 304416,
                        "distance": 1193,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-06",
                        "time": "22:37:23",
                        "duration": 256932,
                        "distance": 422,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-06T00:00:00.000Z"
            },
            {
                "date": "2022-07-07",
                "time": "22:34:15",
                "duration": 6476141,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-07",
                        "time": "22:30:13",
                        "duration": 242616,
                        "distance": 889,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-08",
                        "time": "00:22:12",
                        "duration": 241963,
                        "distance": 887,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-07T00:00:00.000Z"
            },
            {
                "date": "2022-07-11",
                "time": "20:43:47",
                "duration": 6650229,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-11",
                        "time": "20:33:45",
                        "duration": 602106,
                        "distance": 1415,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-11",
                        "time": "22:34:37",
                        "duration": 261737,
                        "distance": 510,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-11T00:00:00.000Z"
            },
            {
                "date": "2022-07-12",
                "time": "23:17:30",
                "duration": 5701674,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-12",
                        "time": "23:07:57",
                        "duration": 573112,
                        "distance": 1221,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-13",
                        "time": "00:52:32",
                        "duration": 164222,
                        "distance": 856,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-12T00:00:00.000Z"
            },
            {
                "date": "2022-07-13",
                "time": "21:30:02",
                "duration": 5134677,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-13",
                        "time": "21:23:31",
                        "duration": 390361,
                        "distance": 1048,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-13",
                        "time": "22:55:36",
                        "duration": 325396,
                        "distance": 886,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-13T00:00:00.000Z"
            },
            {
                "date": "2022-07-14",
                "time": "22:30:21",
                "duration": 7662334,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-14",
                        "time": "22:24:17",
                        "duration": 363642,
                        "distance": 749,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-15",
                        "time": "00:38:03",
                        "duration": 468349,
                        "distance": 883,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-14T00:00:00.000Z"
            },
            {
                "date": "2022-07-15",
                "time": "22:31:48",
                "duration": 5916015,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-15",
                        "time": "22:25:52",
                        "duration": 355364,
                        "distance": 1018,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-16",
                        "time": "00:10:24",
                        "duration": 286838,
                        "distance": 900,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-15T00:00:00.000Z"
            },
            {
                "date": "2022-07-18",
                "time": "22:57:24",
                "duration": 6204457,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-18",
                        "time": "22:51:11",
                        "duration": 372869,
                        "distance": 853,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-19",
                        "time": "00:40:49",
                        "duration": 246211,
                        "distance": 860,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-18T00:00:00.000Z"
            },
            {
                "date": "2022-07-19",
                "time": "22:27:51",
                "duration": 5509880,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-19",
                        "time": "22:21:00",
                        "duration": 410961,
                        "distance": 997,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-19",
                        "time": "23:59:41",
                        "duration": 137706,
                        "distance": 845,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-19T00:00:00.000Z"
            },
            {
                "date": "2022-07-21",
                "time": "22:41:58",
                "duration": 6008062,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-21",
                        "time": "22:34:00",
                        "duration": 478800,
                        "distance": 1275,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-22",
                        "time": "00:22:06",
                        "duration": 264839,
                        "distance": 859,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-21T00:00:00.000Z"
            },
            {
                "date": "2022-07-25",
                "time": "23:31:17",
                "duration": 5632361,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-25",
                        "time": "23:25:02",
                        "duration": 374759,
                        "distance": 1055,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-26",
                        "time": "01:05:09",
                        "duration": 151283,
                        "distance": 881,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-25T00:00:00.000Z"
            },
            {
                "date": "2022-07-26",
                "time": "23:24:31",
                "duration": 4796643,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-26",
                        "time": "23:17:02",
                        "duration": 449098,
                        "distance": 851,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-27",
                        "time": "00:44:28",
                        "duration": 258159,
                        "distance": 882,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-26T00:00:00.000Z"
            },
            {
                "date": "2022-07-28",
                "time": "23:05:27",
                "duration": 6548227,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-28",
                        "time": "22:57:10",
                        "duration": 497256,
                        "distance": 1170,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-29",
                        "time": "00:54:35",
                        "duration": 246544,
                        "distance": 877,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-28T00:00:00.000Z"
            },
            {
                "date": "2022-07-29",
                "time": "22:46:59",
                "duration": 5587293,
                "prevActivitySegment": [
                    {
                        "date": "2022-07-29",
                        "time": "22:37:40",
                        "duration": 558765,
                        "distance": 1258,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-07-30",
                        "time": "00:20:06",
                        "duration": 198512,
                        "distance": 890,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-07-29T00:00:00.000Z"
            },
            {
                "date": "2022-02-01",
                "time": "19:04:52",
                "duration": 4266148,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-01",
                        "time": "18:50:42",
                        "duration": 850097,
                        "distance": 1126,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-01",
                        "time": "20:15:58",
                        "duration": 970609,
                        "distance": 2367,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-01T00:00:00.000Z"
            },
            {
                "date": "2022-02-02",
                "time": "19:11:30",
                "duration": 3690506,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-02",
                        "time": "18:56:14",
                        "duration": 916002,
                        "distance": 1298,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-02",
                        "time": "20:13:00",
                        "duration": 937468,
                        "distance": 1187,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-02T00:00:00.000Z"
            },
            {
                "date": "2022-02-09",
                "time": "18:59:55",
                "duration": 3343500,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-09",
                        "time": "18:45:45",
                        "duration": 850093,
                        "distance": 1191,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-09",
                        "time": "19:55:39",
                        "duration": 973253,
                        "distance": 1251,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-09T00:00:00.000Z"
            },
            {
                "date": "2022-02-10",
                "time": "19:08:24",
                "duration": 2948476,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-10",
                        "time": "18:55:07",
                        "duration": 797819,
                        "distance": 1115,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-10",
                        "time": "19:57:33",
                        "duration": 872510,
                        "distance": 1190,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-10T00:00:00.000Z"
            },
            {
                "date": "2022-02-14",
                "time": "20:02:13",
                "duration": 4618300,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-14",
                        "time": "19:46:02",
                        "duration": 970824,
                        "distance": 1349,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-14",
                        "time": "21:19:12",
                        "duration": 970477,
                        "distance": 1333,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-14T00:00:00.000Z"
            },
            {
                "date": "2022-02-15",
                "time": "19:18:37",
                "duration": 2743968,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-15",
                        "time": "19:02:25",
                        "duration": 971271,
                        "distance": 1350,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-15",
                        "time": "20:04:21",
                        "duration": 1613108,
                        "distance": 1309,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-15T00:00:00.000Z"
            },
            {
                "date": "2022-02-16",
                "time": "19:16:25",
                "duration": 4594759,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-16",
                        "time": "19:01:29",
                        "duration": 895483,
                        "distance": 1262,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-16",
                        "time": "20:32:59",
                        "duration": 1046043,
                        "distance": 1341,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-16T00:00:00.000Z"
            },
            {
                "date": "2022-02-17",
                "time": "19:17:26",
                "duration": 3501681,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-17",
                        "time": "19:01:41",
                        "duration": 944696,
                        "distance": 1297,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-17",
                        "time": "20:15:47",
                        "duration": 974037,
                        "distance": 1263,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-17T00:00:00.000Z"
            },
            {
                "date": "2022-02-21",
                "time": "19:49:31",
                "duration": 3821187,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-21",
                        "time": "19:31:39",
                        "duration": 1072703,
                        "distance": 1346,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-21",
                        "time": "20:53:12",
                        "duration": 1036524,
                        "distance": 1318,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-21T00:00:00.000Z"
            },
            {
                "date": "2022-02-22",
                "time": "19:51:45",
                "duration": 3303653,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-22",
                        "time": "19:37:35",
                        "duration": 850431,
                        "distance": 1176,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-22",
                        "time": "20:46:49",
                        "duration": 244657,
                        "distance": 880,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-22T00:00:00.000Z"
            },
            {
                "date": "2022-02-24",
                "time": "19:49:46",
                "duration": 3966744,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-24",
                        "time": "19:35:28",
                        "duration": 858242,
                        "distance": 1221,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-24",
                        "time": "20:55:53",
                        "duration": 854067,
                        "distance": 1160,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-24T00:00:00.000Z"
            },
            {
                "date": "2022-02-25",
                "time": "20:37:02",
                "duration": 4663823,
                "prevActivitySegment": [
                    {
                        "date": "2022-02-25",
                        "time": "20:22:48",
                        "duration": 854573,
                        "distance": 1163,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-02-25",
                        "time": "21:54:46",
                        "duration": 590280,
                        "distance": 884,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-02-25T00:00:00.000Z"
            },
            {
                "date": "2022-09-01",
                "time": "12:34:50",
                "duration": 5765981,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-01",
                        "time": "12:24:17",
                        "duration": 633752,
                        "distance": 1116,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-01",
                        "time": "14:10:56",
                        "duration": 132982,
                        "distance": 838,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-01T00:00:00.000Z"
            },
            {
                "date": "2022-09-02",
                "time": "19:29:41",
                "duration": 4587354,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-02",
                        "time": "19:23:25",
                        "duration": 375640,
                        "distance": 1072,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-02",
                        "time": "20:46:08",
                        "duration": 674075,
                        "distance": 983,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-02T00:00:00.000Z"
            },
            {
                "date": "2022-09-05",
                "time": "22:11:14",
                "duration": 6419996,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-05",
                        "time": "22:00:49",
                        "duration": 625010,
                        "distance": 1071,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-05",
                        "time": "23:58:14",
                        "duration": 241755,
                        "distance": 867,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-05T00:00:00.000Z"
            },
            {
                "date": "2022-09-06",
                "time": "12:16:46",
                "duration": 4530697,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-06",
                        "time": "11:58:18",
                        "duration": 1108879,
                        "distance": 1026,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-06",
                        "time": "13:32:17",
                        "duration": 253533,
                        "distance": 853,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-06T00:00:00.000Z"
            },
            {
                "date": "2022-09-07",
                "time": "13:04:08",
                "duration": 5177758,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-07",
                        "time": "12:54:30",
                        "duration": 577772,
                        "distance": 1089,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-07",
                        "time": "14:30:26",
                        "duration": 249801,
                        "distance": 868,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-07T00:00:00.000Z"
            },
            {
                "date": "2022-09-09",
                "time": "21:27:40",
                "duration": 6170859,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-09",
                        "time": "21:11:56",
                        "duration": 944117,
                        "distance": 1517,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-09",
                        "time": "23:10:31",
                        "duration": 241607,
                        "distance": 864,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-09T00:00:00.000Z"
            },
            {
                "date": "2022-09-10",
                "time": "13:35:10",
                "duration": 3841427,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-10",
                        "time": "13:22:26",
                        "duration": 763965,
                        "distance": 1223,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-10",
                        "time": "14:39:11",
                        "duration": 496886,
                        "distance": 847,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-10T00:00:00.000Z"
            },
            {
                "date": "2022-09-12",
                "time": "13:07:20",
                "duration": 5853578,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-12",
                        "time": "13:00:31",
                        "duration": 408946,
                        "distance": 1160,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-12",
                        "time": "14:44:54",
                        "duration": 135949,
                        "distance": 801,
                        "activityType": "CYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-12T00:00:00.000Z"
            },
            {
                "date": "2022-09-26",
                "time": "23:00:15",
                "duration": 5664270,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-26",
                        "time": "22:50:17",
                        "duration": 598384,
                        "distance": 1212,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-27",
                        "time": "00:34:39",
                        "duration": 242187,
                        "distance": 897,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-26T00:00:00.000Z"
            },
            {
                "date": "2022-09-27",
                "time": "12:13:55",
                "duration": 4055255,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-27",
                        "time": "12:05:46",
                        "duration": 488775,
                        "distance": 1211,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-27",
                        "time": "13:21:30",
                        "duration": 229783,
                        "distance": 898,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-27T00:00:00.000Z"
            },
            {
                "date": "2022-09-28",
                "time": "12:30:16",
                "duration": 4040995,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-28",
                        "time": "12:24:03",
                        "duration": 372727,
                        "distance": 1159,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-28",
                        "time": "13:37:37",
                        "duration": 177651,
                        "distance": 981,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-28T00:00:00.000Z"
            },
            {
                "date": "2022-09-29",
                "time": "12:27:46",
                "duration": 3332261,
                "prevActivitySegment": [
                    {
                        "date": "2022-09-29",
                        "time": "12:18:00",
                        "duration": 586587,
                        "distance": 1225,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-09-29",
                        "time": "13:23:18",
                        "duration": 332205,
                        "distance": 966,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2022-09-29T00:00:00.000Z"
            },
            {
                "date": "2023-10-02",
                "time": "13:00:02",
                "duration": 5207841,
                "prevActivitySegment": [
                    {
                        "date": "2023-10-02",
                        "time": "12:43:29",
                        "duration": 993090,
                        "distance": 1168,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-10-02",
                        "time": "14:26:50",
                        "duration": 922986,
                        "distance": 1008,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2023-10-02T00:00:00.000Z"
            },
            {
                "date": "2023-10-06",
                "time": "18:04:02",
                "duration": 4148596,
                "prevActivitySegment": [
                    {
                        "date": "2023-10-06",
                        "time": "17:46:10",
                        "duration": 1071980,
                        "distance": 1222,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-10-06",
                        "time": "19:13:11",
                        "duration": 1018637,
                        "distance": 1111,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2023-10-06T00:00:00.000Z"
            },
            {
                "date": "2023-10-09",
                "time": "18:02:28",
                "duration": 5395796,
                "prevActivitySegment": [
                    {
                        "date": "2023-10-09",
                        "time": "17:51:18",
                        "duration": 669805,
                        "distance": 1222,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-10-09",
                        "time": "19:32:24",
                        "duration": 1041216,
                        "distance": 1055,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2023-10-09T00:00:00.000Z"
            },
            {
                "date": "2023-10-11",
                "time": "18:05:51",
                "duration": 2615490,
                "prevActivitySegment": [
                    {
                        "date": "2023-10-11",
                        "time": "17:44:46",
                        "duration": 1265315,
                        "distance": 1130,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-10-11",
                        "time": "18:49:27",
                        "duration": 875929,
                        "distance": 1020,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2023-10-11T00:00:00.000Z"
            },
            {
                "date": "2023-10-18",
                "time": "18:15:30",
                "duration": 4076672,
                "prevActivitySegment": [
                    {
                        "date": "2023-10-18",
                        "time": "17:56:14",
                        "duration": 1156080,
                        "distance": 1194,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-10-18",
                        "time": "19:23:27",
                        "duration": 939093,
                        "distance": 1124,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2023-10-18T00:00:00.000Z"
            },
            {
                "date": "2023-10-20",
                "time": "18:54:13",
                "duration": 4931712,
                "prevActivitySegment": [
                    {
                        "date": "2023-10-20",
                        "time": "18:37:53",
                        "duration": 980455,
                        "distance": 1221,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-10-20",
                        "time": "20:16:25",
                        "duration": 1086130,
                        "distance": 1244,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2023-10-20T00:00:00.000Z"
            },
            {
                "date": "2023-10-25",
                "time": "18:25:47",
                "duration": 4411093,
                "prevActivitySegment": [
                    {
                        "date": "2023-10-25",
                        "time": "18:09:09",
                        "duration": 998878,
                        "distance": 1231,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-10-25",
                        "time": "19:39:19",
                        "duration": 1090397,
                        "distance": 1297,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2023-10-25T00:00:00.000Z"
            },
            {
                "date": "2023-10-27",
                "time": "18:19:54",
                "duration": 4578329,
                "prevActivitySegment": [
                    {
                        "date": "2023-10-27",
                        "time": "18:05:54",
                        "duration": 840762,
                        "distance": 1058,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-10-27",
                        "time": "19:36:13",
                        "duration": 1093731,
                        "distance": 1246,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2023-10-27T00:00:00.000Z"
            },
            {
                "date": "2023-10-30",
                "time": "18:08:27",
                "duration": 4525800,
                "prevActivitySegment": [
                    {
                        "date": "2023-10-30",
                        "time": "17:49:49",
                        "duration": 1117398,
                        "distance": 1150,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-10-30",
                        "time": "19:23:53",
                        "duration": 1016779,
                        "distance": 1223,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2023-10-30T00:00:00.000Z"
            },
            {
                "date": "2023-11-01",
                "time": "18:22:06",
                "duration": 3288546,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-01",
                        "time": "18:06:55",
                        "duration": 910176,
                        "distance": 1123,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-01",
                        "time": "19:16:54",
                        "duration": 989348,
                        "distance": 1109,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2023-11-01T00:00:00.000Z"
            },
            {
                "date": "2023-01-10",
                "time": "22:38:40",
                "duration": 957019,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-10",
                        "time": "22:31:34",
                        "duration": 425446,
                        "distance": 1072,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": true
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-10",
                        "time": "22:54:37",
                        "duration": 692797,
                        "distance": 3052,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "dateObj": "2023-01-10T00:00:00.000Z"
            }
        ],
        "placeId": "SampleGoogleID0",
        "address": "Fake address 5030",
        "name": "Gym 0",
        "gradient": [
            {
                "r": 253,
                "g": 213,
                "b": 3
            },
            {
                "r": 102,
                "g": 11,
                "b": 239
            },
            {
                "r": 0,
                "g": 0,
                "b": 0
            }
        ]
    },
    "SampleGoogleID1": {
        "visits": [
            {
                "date": "2022-12-21",
                "time": "18:00:28",
                "duration": 4518681,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-21",
                        "time": "17:37:12",
                        "duration": 1395815,
                        "distance": 4627,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-21",
                        "time": "19:15:46",
                        "duration": 1085824,
                        "distance": 4075,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2022-12-21T00:00:00.000Z"
            },
            {
                "date": "2022-12-22",
                "time": "19:57:33",
                "duration": 3026051,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-22",
                        "time": "19:39:33",
                        "duration": 1080137,
                        "distance": 4004,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-22",
                        "time": "20:47:59",
                        "duration": 1038435,
                        "distance": 4233,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2022-12-22T00:00:00.000Z"
            },
            {
                "date": "2022-12-23",
                "time": "19:08:46",
                "duration": 5609726,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-23",
                        "time": "18:46:45",
                        "duration": 1321193,
                        "distance": 4383,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-23",
                        "time": "20:42:16",
                        "duration": 2559584,
                        "distance": 8202,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2022-12-23T00:00:00.000Z"
            },
            {
                "date": "2022-12-27",
                "time": "23:09:45",
                "duration": 2558034,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-27",
                        "time": "22:52:35",
                        "duration": 1029867,
                        "distance": 3610,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-27",
                        "time": "23:52:23",
                        "duration": 2385336,
                        "distance": 3921,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2022-12-27T00:00:00.000Z"
            },
            {
                "date": "2022-12-28",
                "time": "22:57:11",
                "duration": 3958069,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-28",
                        "time": "22:41:05",
                        "duration": 965598,
                        "distance": 4053,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-29",
                        "time": "00:03:09",
                        "duration": 918052,
                        "distance": 3915,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2022-12-28T00:00:00.000Z"
            },
            {
                "date": "2022-12-30",
                "time": "20:26:03",
                "duration": 6048866,
                "prevActivitySegment": [
                    {
                        "date": "2022-12-30",
                        "time": "20:10:38",
                        "duration": 925455,
                        "distance": 4383,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2022-12-30",
                        "time": "22:06:52",
                        "duration": 750277,
                        "distance": 2767,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2022-12-30T00:00:00.000Z"
            },
            {
                "date": "2023-06-01",
                "time": "18:19:59",
                "duration": 2500058,
                "prevActivitySegment": [
                    {
                        "date": "2023-06-01",
                        "time": "17:56:25",
                        "duration": 1414467,
                        "distance": 4769,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-06-01",
                        "time": "19:01:39",
                        "duration": 2481965,
                        "distance": 538,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-06-01",
                        "time": "19:43:01",
                        "duration": 1426906,
                        "distance": 4713,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-06-01T00:00:00.000Z"
            },
            {
                "date": "2023-06-02",
                "time": "19:55:09",
                "duration": 1623502,
                "prevActivitySegment": [
                    {
                        "date": "2023-06-02",
                        "time": "19:28:21",
                        "duration": 1608163,
                        "distance": 5097,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-06-02",
                        "time": "20:22:13",
                        "duration": 257864,
                        "distance": 287,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-06-02T00:00:00.000Z"
            },
            {
                "date": "2023-06-05",
                "time": "12:32:59",
                "duration": 3747445,
                "prevActivitySegment": [
                    {
                        "date": "2023-06-05",
                        "time": "12:03:21",
                        "duration": 1778298,
                        "distance": 4740,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-06-05",
                        "time": "13:35:27",
                        "duration": 1631664,
                        "distance": 5129,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-06-05T00:00:00.000Z"
            },
            {
                "date": "2023-06-06",
                "time": "18:17:36",
                "duration": 3959186,
                "prevActivitySegment": [
                    {
                        "date": "2023-06-06",
                        "time": "17:50:13",
                        "duration": 1642903,
                        "distance": 4851,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-06-06",
                        "time": "19:23:36",
                        "duration": 456970,
                        "distance": 359,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-06-06",
                        "time": "19:31:13",
                        "duration": 1660871,
                        "distance": 5502,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-06-06T00:00:00.000Z"
            },
            {
                "date": "2023-06-08",
                "time": "17:53:06",
                "duration": 5105106,
                "prevActivitySegment": [
                    {
                        "date": "2023-06-08",
                        "time": "17:31:22",
                        "duration": 1303247,
                        "distance": 4680,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-06-08",
                        "time": "19:18:11",
                        "duration": 151978,
                        "distance": 177,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-06-08T00:00:00.000Z"
            },
            {
                "date": "2023-06-12",
                "time": "14:01:15",
                "duration": 3736672,
                "prevActivitySegment": [
                    {
                        "date": "2023-06-12",
                        "time": "13:40:25",
                        "duration": 1249264,
                        "distance": 5117,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-06-12",
                        "time": "15:03:31",
                        "duration": 422798,
                        "distance": 394,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-06-12T00:00:00.000Z"
            },
            {
                "date": "2023-06-13",
                "time": "18:50:10",
                "duration": 5737720,
                "prevActivitySegment": [
                    {
                        "date": "2023-06-13",
                        "time": "18:24:31",
                        "duration": 1538367,
                        "distance": 5072,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-06-13",
                        "time": "20:25:47",
                        "duration": 2022799,
                        "distance": 4875,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-06-13T00:00:00.000Z"
            },
            {
                "date": "2023-06-14",
                "time": "18:14:05",
                "duration": 4134559,
                "prevActivitySegment": [
                    {
                        "date": "2023-06-14",
                        "time": "17:54:10",
                        "duration": 1195016,
                        "distance": 4110,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-06-14",
                        "time": "19:22:59",
                        "duration": 1653364,
                        "distance": 4974,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-06-14T00:00:00.000Z"
            },
            {
                "date": "2023-06-15",
                "time": "18:45:20",
                "duration": 2904905,
                "prevActivitySegment": [
                    {
                        "date": "2023-06-15",
                        "time": "18:27:08",
                        "duration": 1092100,
                        "distance": 3717,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-06-15",
                        "time": "19:33:45",
                        "duration": 570627,
                        "distance": 421,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-06-15",
                        "time": "19:43:15",
                        "duration": 1379341,
                        "distance": 4769,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-06-15T00:00:00.000Z"
            },
            {
                "date": "2023-06-22",
                "time": "18:12:03",
                "duration": 3341090,
                "prevActivitySegment": [
                    {
                        "date": "2023-06-22",
                        "time": "17:39:19",
                        "duration": 1964746,
                        "distance": 4984,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-06-22",
                        "time": "19:07:44",
                        "duration": 296317,
                        "distance": 268,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-06-22T00:00:00.000Z"
            },
            {
                "date": "2023-06-30",
                "time": "18:10:08",
                "duration": 3905907,
                "prevActivitySegment": [
                    {
                        "date": "2023-06-30",
                        "time": "17:40:51",
                        "duration": 537823,
                        "distance": 209,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-06-30",
                        "time": "17:49:49",
                        "duration": 1219020,
                        "distance": 4672,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-06-30",
                        "time": "19:15:14",
                        "duration": 935293,
                        "distance": 642,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-06-30",
                        "time": "19:30:49",
                        "duration": 1577186,
                        "distance": 4728,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-06-30T00:00:00.000Z"
            },
            {
                "date": "2023-07-01",
                "time": "17:37:04",
                "duration": 3125452,
                "prevActivitySegment": [
                    {
                        "date": "2023-07-01",
                        "time": "17:14:06",
                        "duration": 1377332,
                        "distance": 4897,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-07-01",
                        "time": "18:29:09",
                        "duration": 607408,
                        "distance": 596,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-07-01",
                        "time": "18:39:17",
                        "duration": 1395491,
                        "distance": 4298,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-07-01T00:00:00.000Z"
            },
            {
                "date": "2023-07-07",
                "time": "18:14:11",
                "duration": 3916631,
                "prevActivitySegment": [
                    {
                        "date": "2023-07-07",
                        "time": "17:51:27",
                        "duration": 1363825,
                        "distance": 3243,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-07-07",
                        "time": "19:19:28",
                        "duration": 848235,
                        "distance": 3302,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-07-07T00:00:00.000Z"
            },
            {
                "date": "2023-07-10",
                "time": "19:44:45",
                "duration": 3087377,
                "prevActivitySegment": [
                    {
                        "date": "2023-07-10",
                        "time": "19:23:15",
                        "duration": 1289988,
                        "distance": 4676,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-07-10",
                        "time": "20:36:12",
                        "duration": 1975811,
                        "distance": 5926,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-07-10T00:00:00.000Z"
            },
            {
                "date": "2023-07-17",
                "time": "19:19:28",
                "duration": 3119624,
                "prevActivitySegment": [
                    {
                        "date": "2023-07-17",
                        "time": "18:55:51",
                        "duration": 1416331,
                        "distance": 4775,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-07-17",
                        "time": "20:11:27",
                        "duration": 1798515,
                        "distance": 4876,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-07-17T00:00:00.000Z"
            },
            {
                "date": "2023-07-19",
                "time": "18:28:34",
                "duration": 3617136,
                "prevActivitySegment": [
                    {
                        "date": "2023-07-19",
                        "time": "17:58:54",
                        "duration": 1779869,
                        "distance": 4922,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-07-19",
                        "time": "19:28:51",
                        "duration": 1683702,
                        "distance": 5081,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-07-19T00:00:00.000Z"
            },
            {
                "date": "2023-07-20",
                "time": "18:06:09",
                "duration": 3280951,
                "prevActivitySegment": [
                    {
                        "date": "2023-07-20",
                        "time": "17:46:54",
                        "duration": 1155233,
                        "distance": 4844,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-07-20",
                        "time": "19:00:50",
                        "duration": 184032,
                        "distance": 240,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-07-20T00:00:00.000Z"
            },
            {
                "date": "2023-07-21",
                "time": "17:17:28",
                "duration": 2946742,
                "prevActivitySegment": [
                    {
                        "date": "2023-07-21",
                        "time": "16:48:16",
                        "duration": 1751844,
                        "distance": 5045,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-07-21",
                        "time": "18:06:34",
                        "duration": 660698,
                        "distance": 541,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-07-21",
                        "time": "18:17:35",
                        "duration": 1945471,
                        "distance": 5782,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-07-21T00:00:00.000Z"
            },
            {
                "date": "2023-07-24",
                "time": "18:37:44",
                "duration": 3309318,
                "prevActivitySegment": [
                    {
                        "date": "2023-07-24",
                        "time": "18:18:21",
                        "duration": 1162646,
                        "distance": 4740,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-07-24",
                        "time": "19:32:53",
                        "duration": 1891098,
                        "distance": 5987,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-07-24T00:00:00.000Z"
            },
            {
                "date": "2023-07-25",
                "time": "17:50:43",
                "duration": 3736488,
                "prevActivitySegment": [
                    {
                        "date": "2023-07-25",
                        "time": "17:26:43",
                        "duration": 1439703,
                        "distance": 4686,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-07-25",
                        "time": "18:53:00",
                        "duration": 1998886,
                        "distance": 6078,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-07-25T00:00:00.000Z"
            },
            {
                "date": "2023-07-26",
                "time": "17:28:32",
                "duration": 2730744,
                "prevActivitySegment": [
                    {
                        "date": "2023-07-26",
                        "time": "17:03:14",
                        "duration": 1518444,
                        "distance": 4487,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-07-26",
                        "time": "18:14:03",
                        "duration": 1935769,
                        "distance": 4726,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-07-26T00:00:00.000Z"
            },
            {
                "date": "2023-05-04",
                "time": "18:08:14",
                "duration": 5077014,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-04",
                        "time": "17:43:51",
                        "duration": 1463035,
                        "distance": 4991,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-04",
                        "time": "19:32:51",
                        "duration": 2033104,
                        "distance": 6021,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-04T00:00:00.000Z"
            },
            {
                "date": "2023-05-05",
                "time": "17:32:30",
                "duration": 5399931,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-05",
                        "time": "17:05:07",
                        "duration": 1642696,
                        "distance": 5159,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-05",
                        "time": "19:02:30",
                        "duration": 1901814,
                        "distance": 5173,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-05T00:00:00.000Z"
            },
            {
                "date": "2023-05-08",
                "time": "18:23:58",
                "duration": 3757782,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-08",
                        "time": "18:13:30",
                        "duration": 628566,
                        "distance": 2182,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-08",
                        "time": "19:26:36",
                        "duration": 228003,
                        "distance": 304,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-08T00:00:00.000Z"
            },
            {
                "date": "2023-05-09",
                "time": "17:45:50",
                "duration": 4193233,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-09",
                        "time": "17:19:54",
                        "duration": 1556241,
                        "distance": 5107,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-09",
                        "time": "18:55:43",
                        "duration": 2269679,
                        "distance": 5329,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-09T00:00:00.000Z"
            },
            {
                "date": "2023-05-10",
                "time": "18:18:14",
                "duration": 2091731,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-10",
                        "time": "17:53:03",
                        "duration": 1510785,
                        "distance": 5073,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-10",
                        "time": "18:53:05",
                        "duration": 2098631,
                        "distance": 4997,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-10T00:00:00.000Z"
            },
            {
                "date": "2023-05-11",
                "time": "18:27:03",
                "duration": 1609546,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-11",
                        "time": "17:57:22",
                        "duration": 1780949,
                        "distance": 4860,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-11",
                        "time": "18:53:53",
                        "duration": 6877538,
                        "distance": 3034,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-11T00:00:00.000Z"
            },
            {
                "date": "2023-05-12",
                "time": "18:52:22",
                "duration": 3387567,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-12",
                        "time": "18:26:53",
                        "duration": 1529172,
                        "distance": 4954,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-12",
                        "time": "19:48:50",
                        "duration": 476809,
                        "distance": 359,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-05-12",
                        "time": "19:56:46",
                        "duration": 1922611,
                        "distance": 5730,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-12T00:00:00.000Z"
            },
            {
                "date": "2023-05-15",
                "time": "13:58:04",
                "duration": 5145222,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-15",
                        "time": "13:37:08",
                        "duration": 1255901,
                        "distance": 4761,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-15",
                        "time": "15:23:49",
                        "duration": 1640673,
                        "distance": 4708,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-15T00:00:00.000Z"
            },
            {
                "date": "2023-05-16",
                "time": "17:45:10",
                "duration": 5827936,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-16",
                        "time": "17:19:00",
                        "duration": 1570776,
                        "distance": 4731,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-16",
                        "time": "19:22:18",
                        "duration": 1152573,
                        "distance": 5212,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-16T00:00:00.000Z"
            },
            {
                "date": "2023-05-17",
                "time": "13:24:55",
                "duration": 3423884,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-17",
                        "time": "12:52:15",
                        "duration": 1959590,
                        "distance": 4978,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-17",
                        "time": "14:21:59",
                        "duration": 1811233,
                        "distance": 4962,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-17T00:00:00.000Z"
            },
            {
                "date": "2023-05-18",
                "time": "17:41:17",
                "duration": 5429576,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-18",
                        "time": "17:16:27",
                        "duration": 1489853,
                        "distance": 5002,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-18",
                        "time": "19:11:46",
                        "duration": 1644404,
                        "distance": 4968,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-18T00:00:00.000Z"
            },
            {
                "date": "2023-05-22",
                "time": "13:15:32",
                "duration": 4630607,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-22",
                        "time": "12:48:51",
                        "duration": 433359,
                        "distance": 264,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-05-22",
                        "time": "12:56:04",
                        "duration": 1167591,
                        "distance": 4537,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-22",
                        "time": "14:32:42",
                        "duration": 1700225,
                        "distance": 4640,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-22T00:00:00.000Z"
            },
            {
                "date": "2023-05-23",
                "time": "18:15:50",
                "duration": 2748253,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-23",
                        "time": "17:44:08",
                        "duration": 497916,
                        "distance": 224,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-05-23",
                        "time": "17:52:26",
                        "duration": 1403384,
                        "distance": 4889,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-23",
                        "time": "19:01:38",
                        "duration": 2115742,
                        "distance": 206,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-05-23",
                        "time": "19:36:54",
                        "duration": 1505153,
                        "distance": 5009,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-23T00:00:00.000Z"
            },
            {
                "date": "2023-05-29",
                "time": "19:01:26",
                "duration": 4790220,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-29",
                        "time": "18:33:19",
                        "duration": 1687093,
                        "distance": 2069,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [],
                "dateObj": "2023-05-29T00:00:00.000Z"
            },
            {
                "date": "2023-05-30",
                "time": "18:58:03",
                "duration": 5887514,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-30",
                        "time": "18:34:31",
                        "duration": 1412083,
                        "distance": 4766,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-30",
                        "time": "20:36:11",
                        "duration": 1500550,
                        "distance": 5293,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-05-30",
                        "time": "21:01:11",
                        "duration": 316380,
                        "distance": 83,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-30T00:00:00.000Z"
            },
            {
                "date": "2023-05-31",
                "time": "13:35:40",
                "duration": 3343572,
                "prevActivitySegment": [
                    {
                        "date": "2023-05-31",
                        "time": "13:06:07",
                        "duration": 1773035,
                        "distance": 5137,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-05-31",
                        "time": "14:31:24",
                        "duration": 522295,
                        "distance": 387,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-05-31",
                        "time": "14:40:06",
                        "duration": 1297410,
                        "distance": 4460,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-05-31T00:00:00.000Z"
            },
            {
                "date": "2023-02-01",
                "time": "22:37:44",
                "duration": 4132563,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-01",
                        "time": "22:19:42",
                        "duration": 1081981,
                        "distance": 4310,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-01",
                        "time": "23:46:36",
                        "duration": 908510,
                        "distance": 4072,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-01T00:00:00.000Z"
            },
            {
                "date": "2023-02-02",
                "time": "21:23:18",
                "duration": 3633253,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-02",
                        "time": "21:05:29",
                        "duration": 1068287,
                        "distance": 4263,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-02",
                        "time": "22:23:51",
                        "duration": 924035,
                        "distance": 4322,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-02T00:00:00.000Z"
            },
            {
                "date": "2023-02-03",
                "time": "23:38:11",
                "duration": 3889975,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-03",
                        "time": "23:19:23",
                        "duration": 1128026,
                        "distance": 4139,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-04",
                        "time": "00:43:01",
                        "duration": 907315,
                        "distance": 4178,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-03T00:00:00.000Z"
            },
            {
                "date": "2023-02-06",
                "time": "23:25:45",
                "duration": 4678104,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-06",
                        "time": "23:04:38",
                        "duration": 1267155,
                        "distance": 4447,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-07",
                        "time": "00:43:43",
                        "duration": 965428,
                        "distance": 4142,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-06T00:00:00.000Z"
            },
            {
                "date": "2023-02-07",
                "time": "23:28:05",
                "duration": 4624280,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-07",
                        "time": "23:10:21",
                        "duration": 1063790,
                        "distance": 4091,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-08",
                        "time": "00:45:09",
                        "duration": 925694,
                        "distance": 3890,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-07T00:00:00.000Z"
            },
            {
                "date": "2023-02-08",
                "time": "23:33:36",
                "duration": 3437774,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-08",
                        "time": "23:15:36",
                        "duration": 1079312,
                        "distance": 4250,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-09",
                        "time": "00:30:53",
                        "duration": 1031636,
                        "distance": 4351,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-08T00:00:00.000Z"
            },
            {
                "date": "2023-02-10",
                "time": "18:51:26",
                "duration": 4850956,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-10",
                        "time": "18:32:43",
                        "duration": 1122878,
                        "distance": 4388,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-10",
                        "time": "20:12:17",
                        "duration": 1662243,
                        "distance": 6248,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-10T00:00:00.000Z"
            },
            {
                "date": "2023-02-13",
                "time": "22:02:52",
                "duration": 2811904,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-13",
                        "time": "21:27:58",
                        "duration": 2094148,
                        "distance": 2362,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-13",
                        "time": "22:49:44",
                        "duration": 333339,
                        "distance": 415,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-13T00:00:00.000Z"
            },
            {
                "date": "2023-02-14",
                "time": "20:50:12",
                "duration": 3970075,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-14",
                        "time": "20:35:50",
                        "duration": 861731,
                        "distance": 2891,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-14",
                        "time": "21:56:22",
                        "duration": 2063053,
                        "distance": 5990,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-14T00:00:00.000Z"
            },
            {
                "date": "2023-02-15",
                "time": "20:33:00",
                "duration": 3457783,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-15",
                        "time": "20:06:30",
                        "duration": 869884,
                        "distance": 1583,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-02-15",
                        "time": "20:21:00",
                        "duration": 719876,
                        "distance": 1388,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-15",
                        "time": "21:30:38",
                        "duration": 2007073,
                        "distance": 5990,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-15T00:00:00.000Z"
            },
            {
                "date": "2023-02-17",
                "time": "21:46:32",
                "duration": 3968232,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-17",
                        "time": "21:19:29",
                        "duration": 1622555,
                        "distance": 2086,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-17",
                        "time": "22:52:40",
                        "duration": 409502,
                        "distance": 1078,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-17T00:00:00.000Z"
            },
            {
                "date": "2023-02-20",
                "time": "18:31:52",
                "duration": 4976749,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-20",
                        "time": "18:16:25",
                        "duration": 927444,
                        "distance": 4256,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-20",
                        "time": "19:54:49",
                        "duration": 932927,
                        "distance": 4288,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-20T00:00:00.000Z"
            },
            {
                "date": "2023-02-21",
                "time": "18:44:06",
                "duration": 3057329,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-21",
                        "time": "18:22:59",
                        "duration": 1267232,
                        "distance": 4961,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-21",
                        "time": "19:35:03",
                        "duration": 512023,
                        "distance": 374,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-02-21",
                        "time": "19:43:35",
                        "duration": 1285459,
                        "distance": 4787,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-21T00:00:00.000Z"
            },
            {
                "date": "2023-02-23",
                "time": "21:01:08",
                "duration": 3194954,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-23",
                        "time": "20:32:42",
                        "duration": 1706389,
                        "distance": 4606,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-23",
                        "time": "21:54:23",
                        "duration": 577114,
                        "distance": 427,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-02-23",
                        "time": "22:04:00",
                        "duration": 1545655,
                        "distance": 4735,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-23T00:00:00.000Z"
            },
            {
                "date": "2023-02-24",
                "time": "19:54:12",
                "duration": 3506490,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-24",
                        "time": "19:26:11",
                        "duration": 442306,
                        "distance": 198,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-02-24",
                        "time": "19:33:33",
                        "duration": 1238408,
                        "distance": 5110,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-24",
                        "time": "20:52:38",
                        "duration": 270452,
                        "distance": 329,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-24T00:00:00.000Z"
            },
            {
                "date": "2023-02-28",
                "time": "21:31:22",
                "duration": 2853198,
                "prevActivitySegment": [
                    {
                        "date": "2023-02-28",
                        "time": "21:08:27",
                        "duration": 1374597,
                        "distance": 2318,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-02-28",
                        "time": "22:18:55",
                        "duration": 257547,
                        "distance": 307,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-02-28T00:00:00.000Z"
            },
            {
                "date": "2023-01-02",
                "time": "14:53:21",
                "duration": 3293439,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-02",
                        "time": "14:35:41",
                        "duration": 1060123,
                        "distance": 4728,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-02",
                        "time": "15:48:14",
                        "duration": 1641000,
                        "distance": 6541,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-02T00:00:00.000Z"
            },
            {
                "date": "2023-01-03",
                "time": "13:23:39",
                "duration": 5548404,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-03",
                        "time": "12:56:33",
                        "duration": 1625745,
                        "distance": 4967,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-03",
                        "time": "14:56:07",
                        "duration": 571096,
                        "distance": 379,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-01-03",
                        "time": "15:05:38",
                        "duration": 1246078,
                        "distance": 4616,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-01-03",
                        "time": "15:26:24",
                        "duration": 209756,
                        "distance": 113,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-03T00:00:00.000Z"
            },
            {
                "date": "2023-01-04",
                "time": "23:20:02",
                "duration": 4358619,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-04",
                        "time": "23:03:02",
                        "duration": 1020362,
                        "distance": 3977,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-05",
                        "time": "00:32:41",
                        "duration": 676008,
                        "distance": 3638,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-04T00:00:00.000Z"
            },
            {
                "date": "2023-01-05",
                "time": "18:49:33",
                "duration": 4801168,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-05",
                        "time": "18:26:43",
                        "duration": 1370377,
                        "distance": 4959,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-05",
                        "time": "20:09:34",
                        "duration": 809194,
                        "distance": 4084,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-05T00:00:00.000Z"
            },
            {
                "date": "2023-01-09",
                "time": "23:15:25",
                "duration": 6037184,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-09",
                        "time": "22:59:20",
                        "duration": 965576,
                        "distance": 3976,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-10",
                        "time": "00:56:03",
                        "duration": 1590081,
                        "distance": 5296,
                        "activityType": "MOTORCYCLING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-09T00:00:00.000Z"
            },
            {
                "date": "2023-01-10",
                "time": "23:06:09",
                "duration": 4944037,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-10",
                        "time": "22:54:37",
                        "duration": 692797,
                        "distance": 3052,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0,
                        "isPrev": false
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-11",
                        "time": "00:28:33",
                        "duration": 1714123,
                        "distance": 5932,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-10T00:00:00.000Z"
            },
            {
                "date": "2023-01-11",
                "time": "23:28:21",
                "duration": 4178476,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-11",
                        "time": "23:07:02",
                        "duration": 1279180,
                        "distance": 4760,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-12",
                        "time": "00:37:59",
                        "duration": 360910,
                        "distance": 381,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-11T00:00:00.000Z"
            },
            {
                "date": "2023-01-14",
                "time": "18:17:49",
                "duration": 3143266,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-14",
                        "time": "18:01:39",
                        "duration": 970367,
                        "distance": 3929,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-14",
                        "time": "19:10:12",
                        "duration": 790526,
                        "distance": 4017,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-14T00:00:00.000Z"
            },
            {
                "date": "2023-01-18",
                "time": "21:21:44",
                "duration": 2551107,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-18",
                        "time": "21:09:00",
                        "duration": 764644,
                        "distance": 3245,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-18",
                        "time": "22:04:15",
                        "duration": 191067,
                        "distance": 230,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-18T00:00:00.000Z"
            },
            {
                "date": "2023-01-19",
                "time": "23:14:37",
                "duration": 3258961,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-19",
                        "time": "22:57:16",
                        "duration": 1040706,
                        "distance": 4277,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-20",
                        "time": "00:08:56",
                        "duration": 931201,
                        "distance": 4279,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-19T00:00:00.000Z"
            },
            {
                "date": "2023-01-21",
                "time": "18:02:38",
                "duration": 4701392,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-21",
                        "time": "17:49:22",
                        "duration": 796230,
                        "distance": 3846,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-21",
                        "time": "19:21:00",
                        "duration": 809380,
                        "distance": 4221,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-21T00:00:00.000Z"
            },
            {
                "date": "2023-01-23",
                "time": "18:43:12",
                "duration": 2410956,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-23",
                        "time": "18:19:06",
                        "duration": 1446310,
                        "distance": 4903,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-23",
                        "time": "19:23:23",
                        "duration": 448853,
                        "distance": 189,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-01-23",
                        "time": "19:30:52",
                        "duration": 1925822,
                        "distance": 6407,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-23T00:00:00.000Z"
            },
            {
                "date": "2023-01-25",
                "time": "20:23:42",
                "duration": 2509514,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-25",
                        "time": "20:03:31",
                        "duration": 1211089,
                        "distance": 4772,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-25",
                        "time": "21:05:31",
                        "duration": 349404,
                        "distance": 331,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-25T00:00:00.000Z"
            },
            {
                "date": "2023-01-26",
                "time": "21:06:26",
                "duration": 3208387,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-26",
                        "time": "20:40:36",
                        "duration": 1549601,
                        "distance": 5110,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-26",
                        "time": "21:59:54",
                        "duration": 15209706,
                        "distance": 3106,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-26T00:00:00.000Z"
            },
            {
                "date": "2023-01-30",
                "time": "19:28:33",
                "duration": 3866388,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-30",
                        "time": "19:05:45",
                        "duration": 1367937,
                        "distance": 4350,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-30",
                        "time": "20:33:00",
                        "duration": 1733082,
                        "distance": 6409,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-30T00:00:00.000Z"
            },
            {
                "date": "2023-01-31",
                "time": "19:01:46",
                "duration": 4684788,
                "prevActivitySegment": [
                    {
                        "date": "2023-01-31",
                        "time": "18:44:10",
                        "duration": 1056135,
                        "distance": 4671,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-01-31",
                        "time": "20:19:51",
                        "duration": 700829,
                        "distance": 381,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-01-31",
                        "time": "20:31:31",
                        "duration": 1360175,
                        "distance": 4826,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-01-31T00:00:00.000Z"
            },
            {
                "date": "2023-03-01",
                "time": "20:13:37",
                "duration": 3178220,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-01",
                        "time": "20:05:32",
                        "duration": 485026,
                        "distance": 1074,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-01",
                        "time": "21:06:35",
                        "duration": 964543,
                        "distance": 4159,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-03-02",
                        "time": "18:16:08",
                        "duration": 120006,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-01T00:00:00.000Z"
            },
            {
                "date": "2023-03-03",
                "time": "14:42:09",
                "duration": 4144907,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-03",
                        "time": "14:08:25",
                        "duration": 719760,
                        "distance": 216,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-03-03",
                        "time": "14:20:24",
                        "duration": 1304656,
                        "distance": 4910,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-03",
                        "time": "15:51:14",
                        "duration": 653857,
                        "distance": 402,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-03-03",
                        "time": "16:02:08",
                        "duration": 1655066,
                        "distance": 6080,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-03T00:00:00.000Z"
            },
            {
                "date": "2023-03-08",
                "time": "20:12:29",
                "duration": 3533892,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-08",
                        "time": "19:50:47",
                        "duration": 1302866,
                        "distance": 2466,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-08",
                        "time": "21:11:23",
                        "duration": 507571,
                        "distance": 397,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-03-08",
                        "time": "21:19:51",
                        "duration": 1753479,
                        "distance": 5089,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-08T00:00:00.000Z"
            },
            {
                "date": "2023-03-09",
                "time": "21:29:46",
                "duration": 1256304,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-09",
                        "time": "21:00:13",
                        "duration": 501365,
                        "distance": 207,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-03-09",
                        "time": "21:08:35",
                        "duration": 1271457,
                        "distance": 4608,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-09",
                        "time": "21:50:42",
                        "duration": 5933684,
                        "distance": 3045,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-09T00:00:00.000Z"
            },
            {
                "date": "2023-03-11",
                "time": "18:19:47",
                "duration": 3270857,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-11",
                        "time": "17:57:28",
                        "duration": 1338907,
                        "distance": 5600,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-11",
                        "time": "19:14:17",
                        "duration": 286035,
                        "distance": 321,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-11T00:00:00.000Z"
            },
            {
                "date": "2023-03-13",
                "time": "19:21:55",
                "duration": 4195183,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-13",
                        "time": "18:59:50",
                        "duration": 1324185,
                        "distance": 2109,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-13",
                        "time": "20:31:50",
                        "duration": 1661303,
                        "distance": 4990,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-13T00:00:00.000Z"
            },
            {
                "date": "2023-03-14",
                "time": "20:38:39",
                "duration": 2486057,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-14",
                        "time": "20:16:08",
                        "duration": 1351047,
                        "distance": 4817,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-14",
                        "time": "21:20:06",
                        "duration": 480082,
                        "distance": 129,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-03-14",
                        "time": "21:28:06",
                        "duration": 1876683,
                        "distance": 5036,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-14T00:00:00.000Z"
            },
            {
                "date": "2023-03-15",
                "time": "18:23:53",
                "duration": 3265231,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-15",
                        "time": "18:13:20",
                        "duration": 633496,
                        "distance": 3544,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-15",
                        "time": "19:18:18",
                        "duration": 361085,
                        "distance": 384,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-15T00:00:00.000Z"
            },
            {
                "date": "2023-03-16",
                "time": "21:27:31",
                "duration": 3474989,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-16",
                        "time": "21:09:56",
                        "duration": 1054940,
                        "distance": 4082,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-16",
                        "time": "22:25:26",
                        "duration": 511812,
                        "distance": 388,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-03-16",
                        "time": "22:33:58",
                        "duration": 1376428,
                        "distance": 4854,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-16T00:00:00.000Z"
            },
            {
                "date": "2023-03-17",
                "time": "19:33:25",
                "duration": 2124889,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-17",
                        "time": "19:20:22",
                        "duration": 782635,
                        "distance": 1165,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-17",
                        "time": "20:08:49",
                        "duration": 675213,
                        "distance": 958,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-17T00:00:00.000Z"
            },
            {
                "date": "2023-03-18",
                "time": "18:43:19",
                "duration": 2222485,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-18",
                        "time": "18:31:29",
                        "duration": 709960,
                        "distance": 3602,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-18",
                        "time": "19:20:22",
                        "duration": 1837511,
                        "distance": 5657,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-18T00:00:00.000Z"
            },
            {
                "date": "2023-03-20",
                "time": "14:45:18",
                "duration": 3855920,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-20",
                        "time": "14:15:06",
                        "duration": 1811988,
                        "distance": 4882,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-20",
                        "time": "15:49:34",
                        "duration": 1941120,
                        "distance": 5325,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-20T00:00:00.000Z"
            },
            {
                "date": "2023-03-21",
                "time": "12:59:44",
                "duration": 5170458,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-21",
                        "time": "12:37:06",
                        "duration": 1358252,
                        "distance": 3955,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-21",
                        "time": "14:25:54",
                        "duration": 772624,
                        "distance": 3498,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-21T00:00:00.000Z"
            },
            {
                "date": "2023-03-22",
                "time": "13:03:53",
                "duration": 3439529,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-22",
                        "time": "12:39:55",
                        "duration": 1437570,
                        "distance": 3597,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-22",
                        "time": "14:01:12",
                        "duration": 2012477,
                        "distance": 6158,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-22T00:00:00.000Z"
            },
            {
                "date": "2023-03-23",
                "time": "19:20:14",
                "duration": 8873114,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-23",
                        "time": "18:48:32",
                        "duration": 531289,
                        "distance": 222,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-03-23",
                        "time": "18:57:24",
                        "duration": 1370138,
                        "distance": 4794,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-23",
                        "time": "21:48:07",
                        "duration": 273023,
                        "distance": 325,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-23T00:00:00.000Z"
            },
            {
                "date": "2023-03-27",
                "time": "20:32:56",
                "duration": 3335640,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-27",
                        "time": "20:15:17",
                        "duration": 1058675,
                        "distance": 1843,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-27",
                        "time": "21:28:31",
                        "duration": 1176932,
                        "distance": 970,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-03-27",
                        "time": "21:48:08",
                        "duration": 1432447,
                        "distance": 4855,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-03-27",
                        "time": "22:12:01",
                        "duration": 302170,
                        "distance": 65,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-27T00:00:00.000Z"
            },
            {
                "date": "2023-03-28",
                "time": "13:28:12",
                "duration": 3539358,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-28",
                        "time": "12:59:07",
                        "duration": 1745504,
                        "distance": 4632,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-28",
                        "time": "14:27:11",
                        "duration": 151700,
                        "distance": 204,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-28T00:00:00.000Z"
            },
            {
                "date": "2023-03-30",
                "time": "20:58:51",
                "duration": 3844263,
                "prevActivitySegment": [
                    {
                        "date": "2023-03-30",
                        "time": "20:36:25",
                        "duration": 1346131,
                        "distance": 4361,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-03-30",
                        "time": "22:02:56",
                        "duration": 362099,
                        "distance": 387,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-03-30T00:00:00.000Z"
            },
            {
                "date": "2023-04-01",
                "time": "18:27:05",
                "duration": 3319629,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-01",
                        "time": "18:05:28",
                        "duration": 1297316,
                        "distance": 3869,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-01",
                        "time": "19:22:25",
                        "duration": 1911153,
                        "distance": 6062,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-01T00:00:00.000Z"
            },
            {
                "date": "2023-04-04",
                "time": "13:02:28",
                "duration": 3447503,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-04",
                        "time": "12:34:11",
                        "duration": 420105,
                        "distance": 296,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-04-04",
                        "time": "12:41:12",
                        "duration": 1276516,
                        "distance": 4352,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-04",
                        "time": "13:59:56",
                        "duration": 1895324,
                        "distance": 4723,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-04T00:00:00.000Z"
            },
            {
                "date": "2023-04-06",
                "time": "18:07:38",
                "duration": 3045791,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-06",
                        "time": "17:53:36",
                        "duration": 842802,
                        "distance": 3608,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-06",
                        "time": "18:58:24",
                        "duration": 208274,
                        "distance": 256,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-06T00:00:00.000Z"
            },
            {
                "date": "2023-04-10",
                "time": "14:49:17",
                "duration": 3538714,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-10",
                        "time": "14:26:33",
                        "duration": 1364411,
                        "distance": 4830,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-10",
                        "time": "15:48:16",
                        "duration": 1884868,
                        "distance": 4906,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-10T00:00:00.000Z"
            },
            {
                "date": "2023-04-11",
                "time": "18:06:18",
                "duration": 4864872,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-11",
                        "time": "17:48:39",
                        "duration": 1059077,
                        "distance": 4396,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-11",
                        "time": "19:27:23",
                        "duration": 912288,
                        "distance": 4053,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-11T00:00:00.000Z"
            },
            {
                "date": "2023-04-12",
                "time": "15:22:18",
                "duration": 2785940,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-12",
                        "time": "15:07:33",
                        "duration": 884986,
                        "distance": 3557,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-12",
                        "time": "16:08:44",
                        "duration": 496176,
                        "distance": 397,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-04-12",
                        "time": "16:17:01",
                        "duration": 2080693,
                        "distance": 5823,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-12T00:00:00.000Z"
            },
            {
                "date": "2023-04-14",
                "time": "18:15:34",
                "duration": 4318681,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-14",
                        "time": "17:45:32",
                        "duration": 1802449,
                        "distance": 4979,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-14",
                        "time": "19:27:33",
                        "duration": 1854867,
                        "distance": 4911,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-14T00:00:00.000Z"
            },
            {
                "date": "2023-04-17",
                "time": "13:09:06",
                "duration": 5170952,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-17",
                        "time": "12:48:44",
                        "duration": 1221301,
                        "distance": 4102,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-17",
                        "time": "14:35:17",
                        "duration": 1073795,
                        "distance": 3786,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-17T00:00:00.000Z"
            },
            {
                "date": "2023-04-18",
                "time": "13:32:09",
                "duration": 3632831,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-18",
                        "time": "13:18:40",
                        "duration": 808484,
                        "distance": 1299,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-18",
                        "time": "14:32:42",
                        "duration": 814929,
                        "distance": 3836,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-18T00:00:00.000Z"
            },
            {
                "date": "2023-04-20",
                "time": "13:09:55",
                "duration": 3625018,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-20",
                        "time": "12:53:34",
                        "duration": 981836,
                        "distance": 3818,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-20",
                        "time": "14:10:20",
                        "duration": 1054133,
                        "distance": 4155,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-20T00:00:00.000Z"
            },
            {
                "date": "2023-04-24",
                "time": "18:47:59",
                "duration": 4110797,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-24",
                        "time": "18:24:40",
                        "duration": 1398353,
                        "distance": 4682,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-24",
                        "time": "19:56:30",
                        "duration": 571976,
                        "distance": 422,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-04-24",
                        "time": "20:06:01",
                        "duration": 1959207,
                        "distance": 5903,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-24T00:00:00.000Z"
            },
            {
                "date": "2023-04-25",
                "time": "19:11:19",
                "duration": 2188498,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-25",
                        "time": "18:46:09",
                        "duration": 1510411,
                        "distance": 5068,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-25",
                        "time": "19:47:48",
                        "duration": 1808528,
                        "distance": 5443,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-25T00:00:00.000Z"
            },
            {
                "date": "2023-04-27",
                "time": "19:35:45",
                "duration": 4539476,
                "prevActivitySegment": [
                    {
                        "date": "2023-04-27",
                        "time": "19:04:07",
                        "duration": 556527,
                        "distance": 253,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-04-27",
                        "time": "19:13:23",
                        "duration": 1341489,
                        "distance": 4812,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-04-27",
                        "time": "20:51:24",
                        "duration": 2475485,
                        "distance": 5153,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-04-27T00:00:00.000Z"
            }
        ],
        "placeId": "SampleGoogleID1",
        "address": "Fake address 5031",
        "name": "Gym 1",
        "gradient": [
            {
                "r": 253,
                "g": 213,
                "b": 3
            },
            {
                "r": 167,
                "g": 59,
                "b": 8
            },
            {
                "r": 0,
                "g": 0,
                "b": 0
            }
        ]
    },
    "SampleGoogleID2": {
        "visits": [
            {
                "date": "2023-11-03",
                "time": "16:52:42",
                "duration": 4577661,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-03",
                        "time": "16:38:52",
                        "duration": 830108,
                        "distance": 2866,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-03",
                        "time": "18:09:00",
                        "duration": 757307,
                        "distance": 2826,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-11-03T00:00:00.000Z"
            },
            {
                "date": "2023-11-06",
                "time": "13:48:36",
                "duration": 4623154,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-06",
                        "time": "13:36:53",
                        "duration": 703389,
                        "distance": 2595,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-06",
                        "time": "15:05:39",
                        "duration": 747406,
                        "distance": 2364,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-11-06T00:00:00.000Z"
            },
            {
                "date": "2023-11-10",
                "time": "14:09:24",
                "duration": 4889870,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-10",
                        "time": "13:58:33",
                        "duration": 651324,
                        "distance": 2545,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-10",
                        "time": "15:30:54",
                        "duration": 943716,
                        "distance": 2383,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-11-10T00:00:00.000Z"
            },
            {
                "date": "2023-11-13",
                "time": "17:25:34",
                "duration": 4930294,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-13",
                        "time": "17:13:58",
                        "duration": 696025,
                        "distance": 2565,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-13",
                        "time": "18:47:44",
                        "duration": 807907,
                        "distance": 2358,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-11-13T00:00:00.000Z"
            },
            {
                "date": "2023-11-15",
                "time": "18:09:13",
                "duration": 3208413,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-15",
                        "time": "17:52:08",
                        "duration": 1025927,
                        "distance": 2662,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-15",
                        "time": "19:02:42",
                        "duration": 828722,
                        "distance": 2399,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-11-15T00:00:00.000Z"
            },
            {
                "date": "2023-11-21",
                "time": "20:14:16",
                "duration": 7498205,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-21",
                        "time": "20:00:20",
                        "duration": 835875,
                        "distance": 2551,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-21",
                        "time": "22:19:14",
                        "duration": 567302,
                        "distance": 144,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    },
                    {
                        "date": "2023-11-21",
                        "time": "22:28:41",
                        "duration": 660435,
                        "distance": 2300,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-11-21T00:00:00.000Z"
            },
            {
                "date": "2023-11-22",
                "time": "19:59:22",
                "duration": 4973385,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-22",
                        "time": "19:43:07",
                        "duration": 974456,
                        "distance": 2714,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-22",
                        "time": "21:22:15",
                        "duration": 963744,
                        "distance": 2528,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-11-22T00:00:00.000Z"
            },
            {
                "date": "2023-11-23",
                "time": "20:36:13",
                "duration": 4653431,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-23",
                        "time": "20:19:52",
                        "duration": 980284,
                        "distance": 2845,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-23",
                        "time": "21:53:46",
                        "duration": 1288486,
                        "distance": 2476,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-11-23T00:00:00.000Z"
            },
            {
                "date": "2023-11-25",
                "time": "13:31:47",
                "duration": 5991932,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-25",
                        "time": "13:20:19",
                        "duration": 687765,
                        "distance": 2623,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-25",
                        "time": "15:11:39",
                        "duration": 732104,
                        "distance": 2274,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-11-25T00:00:00.000Z"
            },
            {
                "date": "2023-11-28",
                "time": "21:11:03",
                "duration": 5828766,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-28",
                        "time": "20:52:54",
                        "duration": 1089389,
                        "distance": 2911,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-28",
                        "time": "22:48:12",
                        "duration": 752345,
                        "distance": 2343,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-11-28T00:00:00.000Z"
            },
            {
                "date": "2023-11-29",
                "time": "20:04:55",
                "duration": 3919937,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-29",
                        "time": "19:50:36",
                        "duration": 859052,
                        "distance": 2779,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-11-29",
                        "time": "21:10:15",
                        "duration": 726088,
                        "distance": 2212,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-11-29T00:00:00.000Z"
            },
            {
                "date": "2023-11-30",
                "time": "20:41:21",
                "duration": 5187889,
                "prevActivitySegment": [
                    {
                        "date": "2023-11-30",
                        "time": "20:26:18",
                        "duration": 903520,
                        "distance": 2737,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [],
                "dateObj": "2023-11-30T00:00:00.000Z"
            },
            {
                "date": "2023-12-01",
                "time": "20:41:54",
                "duration": 5601237,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-01",
                        "time": "20:28:44",
                        "duration": 790628,
                        "distance": 2653,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-01",
                        "time": "22:15:16",
                        "duration": 686770,
                        "distance": 2317,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-01T00:00:00.000Z"
            },
            {
                "date": "2023-12-04",
                "time": "17:24:01",
                "duration": 5238827,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-04",
                        "time": "17:12:43",
                        "duration": 677345,
                        "distance": 2537,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-04",
                        "time": "18:51:20",
                        "duration": 743966,
                        "distance": 2334,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-04T00:00:00.000Z"
            },
            {
                "date": "2023-12-05",
                "time": "20:11:55",
                "duration": 6635787,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-05",
                        "time": "19:52:32",
                        "duration": 1162399,
                        "distance": 2904,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-05",
                        "time": "22:02:31",
                        "duration": 889846,
                        "distance": 2544,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-05T00:00:00.000Z"
            },
            {
                "date": "2023-12-07",
                "time": "19:15:42",
                "duration": 4979472,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-07",
                        "time": "18:59:50",
                        "duration": 952038,
                        "distance": 2593,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-07",
                        "time": "20:38:41",
                        "duration": 136912,
                        "distance": 113,
                        "activityType": "WALKING",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-07T00:00:00.000Z"
            },
            {
                "date": "2023-12-11",
                "time": "18:09:37",
                "duration": 4686954,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-11",
                        "time": "17:59:13",
                        "duration": 623683,
                        "distance": 2533,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-11",
                        "time": "19:27:44",
                        "duration": 881839,
                        "distance": 2248,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-11T00:00:00.000Z"
            },
            {
                "date": "2023-12-12",
                "time": "18:23:44",
                "duration": 5637357,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-12",
                        "time": "18:10:30",
                        "duration": 793426,
                        "distance": 2840,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-12",
                        "time": "19:57:41",
                        "duration": 741675,
                        "distance": 2225,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-12T00:00:00.000Z"
            },
            {
                "date": "2023-12-13",
                "time": "19:30:37",
                "duration": 3973590,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-13",
                        "time": "19:19:55",
                        "duration": 641403,
                        "distance": 2599,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-13",
                        "time": "20:36:50",
                        "duration": 934442,
                        "distance": 2327,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-13T00:00:00.000Z"
            },
            {
                "date": "2023-12-14",
                "time": "20:04:00",
                "duration": 4586304,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-14",
                        "time": "19:53:51",
                        "duration": 609192,
                        "distance": 2438,
                        "activityType": "IN_PASSENGER_VEHICLE",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [],
                "dateObj": "2023-12-14T00:00:00.000Z"
            },
            {
                "date": "2023-12-15",
                "time": "20:02:17",
                "duration": 3026329,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-15",
                        "time": "19:51:50",
                        "duration": 626758,
                        "distance": 2508,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-15",
                        "time": "20:52:43",
                        "duration": 874287,
                        "distance": 2407,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-15T00:00:00.000Z"
            },
            {
                "date": "2023-12-18",
                "time": "17:02:04",
                "duration": 4252364,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-18",
                        "time": "16:48:57",
                        "duration": 786870,
                        "distance": 2585,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-18",
                        "time": "18:12:56",
                        "duration": 1159540,
                        "distance": 2334,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-18T00:00:00.000Z"
            },
            {
                "date": "2023-12-19",
                "time": "18:43:59",
                "duration": 5643853,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-19",
                        "time": "18:27:20",
                        "duration": 998389,
                        "distance": 2728,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-19",
                        "time": "20:18:02",
                        "duration": 1006486,
                        "distance": 2381,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-19T00:00:00.000Z"
            },
            {
                "date": "2023-12-20",
                "time": "18:41:57",
                "duration": 4375226,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-20",
                        "time": "18:27:18",
                        "duration": 879296,
                        "distance": 2737,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-20",
                        "time": "19:54:52",
                        "duration": 673934,
                        "distance": 2246,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-20T00:00:00.000Z"
            },
            {
                "date": "2023-12-21",
                "time": "21:07:21",
                "duration": 6995915,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-21",
                        "time": "20:49:08",
                        "duration": 1093244,
                        "distance": 2773,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-21",
                        "time": "23:03:57",
                        "duration": 1256901,
                        "distance": 2557,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-21T00:00:00.000Z"
            },
            {
                "date": "2023-12-22",
                "time": "20:36:56",
                "duration": 4593940,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-22",
                        "time": "20:25:43",
                        "duration": 672757,
                        "distance": 2471,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-22",
                        "time": "21:53:30",
                        "duration": 852567,
                        "distance": 2315,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-22T00:00:00.000Z"
            },
            {
                "date": "2023-12-26",
                "time": "17:52:46",
                "duration": 4734419,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-26",
                        "time": "17:43:18",
                        "duration": 567840,
                        "distance": 2534,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-26",
                        "time": "19:11:40",
                        "duration": 910366,
                        "distance": 2524,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-26T00:00:00.000Z"
            },
            {
                "date": "2023-12-27",
                "time": "17:26:41",
                "duration": 3729909,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-27",
                        "time": "17:08:50",
                        "duration": 1071394,
                        "distance": 2924,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-27",
                        "time": "18:28:51",
                        "duration": 774175,
                        "distance": 2306,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-27T00:00:00.000Z"
            },
            {
                "date": "2023-12-28",
                "time": "18:13:27",
                "duration": 5299440,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-28",
                        "time": "17:56:02",
                        "duration": 1044632,
                        "distance": 2760,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-28",
                        "time": "19:41:46",
                        "duration": 709602,
                        "distance": 2287,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-28T00:00:00.000Z"
            },
            {
                "date": "2023-12-29",
                "time": "17:45:26",
                "duration": 4343871,
                "prevActivitySegment": [
                    {
                        "date": "2023-12-29",
                        "time": "17:35:34",
                        "duration": 592076,
                        "distance": 2519,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "nextActivitySegment": [
                    {
                        "date": "2023-12-29",
                        "time": "18:57:50",
                        "duration": 695089,
                        "distance": 2220,
                        "activityType": "IN_BUS",
                        "startLong": 0,
                        "startLat": 0,
                        "endLong": 0,
                        "endLat": 0
                    }
                ],
                "dateObj": "2023-12-29T00:00:00.000Z"
            }
        ],
        "placeId": "SampleGoogleID2",
        "address": "Fake address 5032",
        "name": "Gym 2",
        "gradient": [
            {
                "r": 253,
                "g": 213,
                "b": 3
            },
            {
                "r": 11,
                "g": 87,
                "b": 239
            },
            {
                "r": 0,
                "g": 0,
                "b": 0
            }
        ]
    }
}

function fakeify_places(places){
    let places_test_fake= {}
    Object.values(places).forEach((gymData, index) => {
        gymData["name"] = `Gym number ${index}`
        gymData["address"] = `Fake address 503${index}`
        gymData["placeId"] = `SampleGoogleID${index}`
        gymData.visits = gymData.visits.map((visit) => {
            visit.nextActivitySegment.forEach(activitySegment => {
                activitySegment.startLat = 0
                activitySegment.startLong = 0
                activitySegment.endLat = 0
                activitySegment.endLong = 0
            })
            visit.prevActivitySegment.forEach(activitySegment => {
                activitySegment.startLat = 0
                activitySegment.startLong = 0
                activitySegment.endLat = 0
                activitySegment.endLong = 0
            })
    
            return visit
        })
        places_test_fake[gymData["placeId"]] = gymData
    })

    return places_test_fake
}