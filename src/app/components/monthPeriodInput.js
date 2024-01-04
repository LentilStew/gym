import { useState } from "react";
import { monthNames } from "./generalComponents.js";

export function MonthButton({ month, onMonthClick, isSelected }) {
  return (
    <div
      className={"button month " + (isSelected ? "selected" : "")}
      onClick={() => onMonthClick(month)}
    >
      {month}
    </div>
  );
}

export function MonthInput({ months, onMonthClick, year }) {
  const [monthSelected, setMonthSelected] = useState("");

  function onClick(month) {
    setMonthSelected(month);
    if (typeof onMonthClick !== "undefined") {
      onMonthClick(month);
    }
  }

  return (
    <div>
      <span className="sub-text" style={{ marginLeft: "0" }}>
        year {year}
      </span>

      <div className="months-container start">
        {months.map((month, index) => {
          return (
            <MonthButton
              key={index}
              month={month}
              isSelected={month === monthSelected}
              onMonthClick={() => onClick(month)}
            />
          );
        })}
      </div>
    </div>
  );
}

export function MonthPeriodInput({ startYear, endYear, onMonthUpdate }) {
  const [startMonth, setStartMonths] = useState("");
  const [endMonth, setEndMonths] = useState("");

  return (
    <div>
      <span className="subtitle">month</span>
      <div className="month-period-input">
        <MonthInput
          months={monthNames}
          onMonthClick={(month) => {
            setStartMonths(month);
            onMonthUpdate(month, endMonth);
          }}
          year={startYear}
        />
        <MonthInput
          months={monthNames}
          onMonthClick={(month) => {
            setEndMonths(month);
            onMonthUpdate(startMonth, month);
          }}
          year={endYear}
        />
      </div>
    </div>
  );
}
