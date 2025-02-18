import * as React from "react";
import { Scheduler, MonthView } from "@progress/kendo-react-scheduler";
import { sampleData, displayDate } from "./sc-events-utc";
import { useState } from "react";
import icons from "../../index.js";
import "../../../node_modules/uikit/dist/css/uikit-core.min.css";

const Calendar = () => {
  const [firstRowClicked, setFirstRowClicked] = useState();

  const handleFirstRowButtonClick = (buttonIndex) => {
    setFirstRowClicked(buttonIndex);
  };

  // Default text color for buttons
  const buttonStyle = {
    color: "white",
  };

  // Text color for the clicked button
  const activeButtonStyle = {
    color: "#4BCCAA",
    background: "#266396CC",
  };

  return (
    <div className="calendar">
      <div className="firstRow">
        <button
          className="selectionBtn"
          style={firstRowClicked === 0 ? activeButtonStyle : buttonStyle}
          onClick={() => handleFirstRowButtonClick(0)}
        >
          <span className="selectionText">CALENDAR</span>
          <img src={icons.sCalendarIcon} alt="setPointSetting" />
        </button>
        <button
          className="selectionBtn"
          style={firstRowClicked === 1 ? activeButtonStyle : buttonStyle}
          onClick={() => handleFirstRowButtonClick(1)}
        >
          <span className="selectionText">AGENDA</span>
          <img src={icons.sAgendaIcon} alt="sensors" />
        </button>
        <button
          className="selectionBtn"
          style={firstRowClicked === 2 ? activeButtonStyle : buttonStyle}
          onClick={() => handleFirstRowButtonClick(2)}
        >
          <span className="selectionText">RECIPE</span>
          <img src={icons.sRecipeIcon} alt="devices" />
        </button>
      </div>
      <Scheduler data={sampleData} defaultDate={displayDate}>
        <MonthView
          title="Month"
          selectedDateFormat="{0:M}"
          selectedShortDateFormat="{0:M}"
        />
      </Scheduler>
    </div>
  );
};
export default Calendar;
