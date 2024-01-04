import Image from 'next/image';
import { StrictMode, useState } from "react";
import { addEmptyDaysToVisits, HeatmapYear, addPaddingToVisits, getColorFromGradient, mapToLogScale, HeatmapSmall } from "./heatmap.js";
import {
  formatDate,
  formatTime,
  gradientColors,
} from "../components/generalComponents.js";
import { ColumnChartContainer } from "./columnCharts.js";
import arrowIcon from "../others/arrowlong.svg"
function ColumnsChart({ visits }) {
  //settings = [{percent:{}, value:{} ,dayName:{},  , unit:{} }]

  let timeTitles = ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00']
  let timeBars = new Array(6).fill(0)

  visits.forEach((visit, index) => {
    timeBars[Math.floor(parseInt(visit["time"].slice(0, 2)) / 4)]++;
  })

  let settings= timeBars.map((count, index) => {
    return {
      percent: (count * 100) / Math.max(...timeBars),
      dayName: timeTitles[index],
      value: count,
      unit: "times"
    }
  })



return (
  <div  >
    {
      settings.map(
        (setting, index) =>
          <ColumnChart percent={setting.percent} dayName={setting.dayName} value={setting.value} unit={setting.unit} key={index} />)
    }
  </div >
);
}
function OffDaySelector({ days, onDayChange }) {
  return <div style={{
    display: 'flex',
    flexDirection: "column",
    fontSize: 'large',
    fontWeight: 'bold',
  }}>
    <div>Days off</div>
    <div style={{
      display: 'flex',
      flexDirection: "row"
    }}>

      {days.map((day, index) => {
        return <div key={index} onClick={() => onDayChange(index)} className={"YearSelectorButton YearSelectorButtonSmall" + (day.off ? " selected" : "")}>
          {day.day}
        </div>

      })}
    </div>
  </div>
}

function LongestStreak({ places }) {
  const [offDays, setOffDays] = useState(["s", "m", "t", "w", "t", "f", "s"].map(day => {
    return { day, off: false }
  }));
  if (offDays.every((day) => day.off)) {
    return <div className="LongestStreakContainerSmall">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>Longest Streak:</div>
        <div className="LongestStreak LongestStreakSmall">0 Days</div>
      </div>
      <OffDaySelector days={offDays} onDayChange={onDayChange} />
    </div>
  }
  let visits = places.reduce((acc, place) => { acc.push(...place.visits); return acc }, [])
  visits.sort((a, b) => (a.date > b.date) ? 1 : -1);
  let longestStreak = 0;
  let currStreak = 0;
  let streakDays = []
  let longestStreakDays = []
  let lastDate = null;

  visits.forEach(visit => {
    visit.dateObj = new Date(`${visit.date}`);
    if (lastDate === null) {
      lastDate = visit.dateObj;
      currStreak++;
      longestStreak = currStreak;
      return;
    }

    if (Math.floor((visit.dateObj - lastDate) / (24 * 60 * 60 * 1000)) <= 1) {
      currStreak++;
      streakDays.push(visit.date);

    }
    else {
      let currDay = new Date(lastDate.getTime() + (24 * 60 * 60 * 1000));


      while (offDays[currDay.getUTCDay()].off) {
        currDay = new Date(currDay.getTime() + (24 * 60 * 60 * 1000));
      }

      if (currDay.toDateString() === visit.dateObj.toDateString()) {
        currStreak++;
        streakDays.push(visit.date);
      }
      else {
        currStreak = 1;
        streakDays = [visit.date];
      }
    }

    if (longestStreak < currStreak) {
      longestStreak = currStreak;
      longestStreakDays = streakDays;

    }

    lastDate = visit.dateObj;

  });

  function onDayChange(day) {
    const newOffDays = [...offDays];
    newOffDays[day].off = !newOffDays[day].off;
    setOffDays(newOffDays);
  }

  return <div className="LongestStreakContainerSmall">

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: "xx-large" }}>Longest Streak:</div>
      <div className="LongestStreak LongestStreakSmall">{longestStreak} Days</div>
    </div>
    <OffDaySelector days={offDays} onDayChange={onDayChange} />
  </div>
}

export function LongestStreakContainer({ places }) {
  const [streak, setStreak] = useState(0);
  function onStreakChange(streakCount) {
    setStreak(streakCount)
  }
  return <div className="LongestStreakRow">
    <LongestStreak places={places} onStreakChange={onStreakChange} />
  </div>

}

export function Wrapped({ places }) {


  const [yearsData, setYearsData] = useState(() => {
    let visits = places.reduce((acc, place) => {
      acc.push(...place.visits)
      return acc
    }, []);
    let max = Math.max(...visits.reduce((acc, place) => {
      acc.push(place['duration']);
      return acc;
    }, []));

    visits.forEach((visit) => {
      visit.color = getColorFromGradient(mapToLogScale(visit.duration, 0, max), gradientColors[0]);
      visit.dateObj = new Date(`${visit.date}T${visit.time}`);
    })
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
        cellData: yearVisits,
        year: yearVisits.find((visit) => visit !== null).dateObj.getUTCFullYear(),
        selected: true
      }
    });
    return paddedSeparatedVisits

  });

  let yearData = yearsData[1];


  let workoutCount = yearData['cellData'].reduce((acc, visit) => (visit && visit['duration'] !== 0 ? 1 : 0) + acc, 0)
  let hourCount = parseInt(yearData['cellData'].reduce((acc, visit) => {
    if (visit)
      acc += visit.duration
    return acc
  }, 0) / (1000 * 60 * 60))

  return <div className='WrappedContainer'>
    <div className='yearTitleWrapped'>
      {yearData.year} Gym wrapped
    </div>
    <HeatmapSmall visits={addPaddingToVisits(yearData["cellData"].slice(0, Math.floor(yearData['cellData'].length / 2)))}
      selected={false} small={true} />
    <HeatmapSmall visits={addPaddingToVisits(yearData["cellData"].slice(Math.floor(yearData['cellData'].length / 2), yearData['cellData'].length))}
      selected={false} small={true} />

    <div style={{
      display: 'flex',
      flexDirection: 'row',
      fontSize: 'large',
      fontWeight: 'bold',
      color: '#1c1c1c',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        alignItems: 'center'
      }}>
        <div>

          <div>{hourCount}Hs</div>
          <div>{workoutCount} Workouts</div>
          <div >{(hourCount / (workoutCount === 0 ? 1 : workoutCount)).toFixed(2)}Hs/Workout</div>
        </div>

      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        alignItems: 'center'

      }}>
        <div>

          <div>ASD</div>
          <div>ASD</div>
        </div>


      </div>
    </div>
    <LongestStreakContainer places={places} />

  </div>
}