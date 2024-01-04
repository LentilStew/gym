import { useState } from "react";

import "../graphs.css";
import {TypeSelector } from "../components/generalComponents"
function ColumnChart({ percent, dayName, value, unit }) {
  return (
    <div>
      <div className="day-title">{dayName}</div>
      <div className="day-container" style={{
        background: `linear-gradient(90deg, var(--scolor) ${percent}%, var(--mcolor) ${percent}%)`
      }}>
        <span className="day-value">
          {value} {unit}
        </span>

      </div>
    </div>
  );
}

const analysisTypesNames = ["days", "days-percent", "monthly-analysis", "total-time-per-day", "average-time-per-day",'time'];
function ColumnsChart({ visits, analysisType }) {
  //settings = [{percent:{}, value:{} ,dayName:{},  , unit:{} }]
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const analysisTypes = {
    "days": (visits) => {
      let dayCount = new Array(7).fill(0)

      visits.forEach((visit, index) => {
        const visitAsDate = new Date(visit.date)
        dayCount[visitAsDate.getUTCDay()]++;
      })

      return dayCount.map((count, index) => {
        return {
          percent: (count * 100) / Math.max(...dayCount),
          dayName: dayNames[index],
          value: count,
          unit: "days"
        }
      })
    },
    "time": (visits) => {
      let timeTitles = ['00:00-04:00','04:00-08:00','08:00-12:00','12:00-16:00','16:00-20:00','20:00-24:00']
      let timeBars = new Array(6).fill(0)

      visits.forEach((visit, index) => {
        timeBars[Math.floor(parseInt(visit["time"].slice(0,2)) / 4)]++;
      })

      return timeBars.map((count, index) => {
        return {
          percent: (count * 100) / Math.max(...timeBars),
          dayName: timeTitles[index],
          value: count,
          unit: "times"
        }
      })
    },
    "days-percent": (visits) => {
      let dayCount = new Array(7).fill(0)

      visits.forEach((visit, index) => {
        const visitAsDate = new Date(visit.date)
        dayCount[visitAsDate.getUTCDay()]++;
      })

      return dayCount.map((count, index) => {
        return {
          percent: count / visits.length * 100,
          dayName: dayNames[index],
          value: (count / visits.length * 100).toFixed(2),
          unit: "%"
        }
      })
    },
    "monthly-analysis": (visits) => {
      let monthTotalVisits = new Array(12).fill(0);

      visits.forEach((visit, index) => {
        const visitAsDate = new Date(visit.date)
        const monthIndex = visitAsDate.getUTCMonth();
        monthTotalVisits[monthIndex]++;
      });

      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      return monthTotalVisits.map((count, index) => {
        return {
          value: count,
          dayName: monthNames[index],
          unit: "visits",
          percent: Math.max(...monthTotalVisits) > 0 ? (count * 100) / Math.max(...monthTotalVisits) : 0
        };
      });
    },
    "total-time-per-day": (visits) => {
      let dayTotalTime = new Array(7).fill(0);

      visits.forEach((visit, index) => {
        const visitAsDate = new Date(new Date(visit.date));
        dayTotalTime[visitAsDate.getUTCDay()] += visit.duration / (60 * 1000);
      });

      return dayTotalTime.map((totalTime, index) => {
        return {
          value: totalTime.toFixed(2),
          dayName: dayNames[index],
          unit: "minutes",
          percent: Math.max(...dayTotalTime) > 0 ? totalTime * 100 / Math.max(...dayTotalTime) : 0


        };
      });
    },
    "average-time-per-day": (visits) => {
      let dayTotalTime = new Array(7).fill(0);
      let dayVisitCount = new Array(7).fill(0);

      visits.forEach((visit, index) => {
        const visitAsDate = new Date(visit.date)
        const visitDuration = visit.duration / (60 * 1000);
        const dayIndex = visitAsDate.getUTCDay();
        dayTotalTime[dayIndex] += visitDuration;
        dayVisitCount[dayIndex]++;
      });
      //biggest average time
      let averageTime = dayTotalTime.map((totalTime, index) => {
        return dayVisitCount[index] > 0 ? totalTime / dayVisitCount[index] : 0;
      })

      return averageTime.map((avgTime, index) => {
        return {
          value: avgTime.toFixed(2),
          dayName: dayNames[index],
          unit: "minutes",
          percent: Math.max(...averageTime) > 0 ? (avgTime * 100) / Math.max(...averageTime) : 0
        };
      });
    },

  }

  const settings = analysisTypes[analysisType](visits)
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



function YearSelector({ years, onYearSelect }) {


  return (
    <div className="YearSelector">
      {years.map((year, index) => <div key={index} onClick={() => onYearSelect(year.year)} className={"YearSelectorButton" + (year.selected ? " selected" : "")}>{year["year"]}</div>)}
    </div>
  )

}
export function ColumnChartContainer({ places }) {
  const [analysisType, setAnalysisType] = useState(analysisTypesNames[0])

  const visits = places.reduce((acc, place) => { acc.push(...place['visits']); return acc; }, [])



  const [yearsSelected, setYearsSelected] = useState(() => {
    let yearsSelected = visits.reduce((years, visit) => {
      const visitAsDate = new Date(visit.date)
      const year = visitAsDate.getUTCFullYear();
      if (!years.includes(year)) {
        years.push(year)
      }
      return years;
    }, []).sort((a, b) => a - b).map(year => {
      return {
        year,
        selected: true
      }

    })
    return yearsSelected;
  })

  function onChange(analysisType) {
    setAnalysisType(analysisType)
  }

  function onYearSelect(yearSelected) {
    setYearsSelected((yearsSelected) => yearsSelected.map(year => {
      return year.year === yearSelected ? {
        ...year,
        selected: !year.selected
      } : { ...year }
    }))
  }

  return <div className="ColumnChartContainer" >

    <TypeSelector onChange={onChange} options={analysisTypesNames} />

    <YearSelector years={yearsSelected} onYearSelect={onYearSelect} />

    <ColumnsChart visits={ visits.filter(visit => yearsSelected.find(year => year.year === parseInt(visit.date.slice(0, 4)) && year.selected))} 
    
    analysisType={analysisType} />
  </div>

}
