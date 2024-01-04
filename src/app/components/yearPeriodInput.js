import { useState } from "react";

export function YearButton({ year, onYearClick, isSelected }) {
  return (
    <div
      className={"button year " + (isSelected ? "selected" : "")}
      onClick={() => onYearClick(year)}
    >
      {year}
    </div>
  );
}

export function YearPeriodInput({ yearsRange, onYearUpdate }) {
  const [isStart, setSwitchEndStart] = useState(true);

  const [yearStart, setYearStart] = useState(undefined);
  const [yearEnd, setYearEnd] = useState(undefined);

  function handleSelect(year) {
    if (isStart) {
      setYearStart(year);
    } else {
      setYearEnd(year);
    }

    if (typeof onYearUpdate !== "undefined") {
      onYearUpdate(isStart ? year : yearStart, isStart ?  yearEnd: year);
    }

    setSwitchEndStart(isStart ? false : true);
  }

  return (
    <div className="year-period-input ">
      <span className="subtitle">year</span>
      <span className="sub-text">
        {isStart ? "select start" : "select end"}
      </span>
      <div className="years">
        {yearsRange.map((year, index) => {
          return (
            <YearButton
              key={index}
              year={year}
              isSelected={year === yearStart || year === yearEnd}
              onYearClick={handleSelect}
            />
          );
        })}
      </div>
    </div>
  );
}
