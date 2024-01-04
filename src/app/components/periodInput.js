import { useState } from "react";
import { MonthPeriodInput } from "./monthPeriodInput.js";
import { YearPeriodInput } from "./yearPeriodInput.js";

export function PeriodInput({ yearsRange, onDateChange }) {
  const [startYear, setStartYear] = useState(0);
  const [endYear, setEndYear] = useState(0);
  const [startMonth, setStartMonth] = useState(null);
  const [endMonth, setEndMonth] = useState(null);


  function onYearUpdate(startYear,endYear) {
    if(startYear > endYear){
      let tmp = startYear;
      startYear = endYear;
      endYear = tmp;
    }
    setStartYear(startYear);
    setEndYear(endYear);
    if (typeof onDateChange !== "undefined") {
      onDateChange(startYear, endYear, startMonth, endMonth);
    }
  }

  function onMonthUpdate(newStartMonth, newEndMonth) {
    setStartMonth(newStartMonth);
    setEndMonth(newEndMonth);
    if (typeof onDateChange !== "undefined") {
      onDateChange(startYear, endYear, newStartMonth, newEndMonth);
    }
  }

  return (
    <div className="unselectable">
      <YearPeriodInput yearsRange={yearsRange} onYearUpdate={onYearUpdate} />
      <MonthPeriodInput
        startYear={startYear}
        endYear={endYear}
        onMonthUpdate={onMonthUpdate}
      />
    </div>
  );
}
