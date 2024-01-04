import Image from 'next/image';
import arrowIcon from "../others/arrowlong.svg"
import { StrictMode, useState } from "react";

function OffDaySelector({ days, onDayChange }) {
  return <div>
    <div>Days off:</div>
    {days.map((day, index) => {
      return <div key={index} onClick={() => onDayChange(index)} className={"YearSelectorButton" + (day.off ? " selected" : "")}>
        {day.day}
      </div>

    })}
  </div>
}


function LongestStreak({ places }) {
  const [offDays, setOffDays] = useState(["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map(day => {
    return { day, off: false }
  }));
  if (offDays.every((day) => day.off)) {
    return <div className="LongestStreakContainer">
      <OffDaySelector days={offDays} onDayChange={onDayChange} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>Longest Streak:</div>
        <div className="LongestStreak">0 Days</div>
      </div>
    </div>
  }
  let visits = places.reduce((acc, place) => {acc.push(...place.visits); return acc},[])
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
        currDay = new Date(currDay.getTime() + (24 * 60 * 60 * 1000)); }

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

  return <div className="LongestStreakContainer">
    <OffDaySelector days={offDays} onDayChange={onDayChange} />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Longest Streak:</div>
      <div className="LongestStreak">{longestStreak} Days</div>
      <div className="LongestStreakDays">
        <div className="streakDate">
          {longestStreakDays[0]}
        </div>
        <Image src={arrowIcon} style={{ height: "100%", width: "4rem" }} alt="arrow" />
        <div className="streakDate">
          {longestStreakDays[longestStreakDays.length - 1]}
        </div>
      </div>
    </div>
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