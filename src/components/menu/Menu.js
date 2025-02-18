import * as React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { useState } from "react";

import icons from "../../index.js";

const Menu = () => {
  const [clicked, setClicked] = useState();

  const handleButtonClick = (buttonIndex) => {
    setClicked(buttonIndex);
  };

  // Default text color for buttons
  const buttonStyle = {
    color: "white",
    background: "black",
  };

  // Text color for the clicked button
  const activeButtonStyle = {
    color: "#4BCCAA",
    background: "#266396CC",
  };

  return (
    <div className="menu">
      <div className="item">
        <Button
          fillMode={"null"}
          rounded={"none"}
          className="button"
          style={clicked === 0 ? activeButtonStyle : buttonStyle}
          onClick={() => handleButtonClick(0)}
        >
          <Link to="/" className="link">
            <img src={icons.OverviewIcon} className="icon" alt="overview" />
          </Link>
          <span className="iconText">OVERVIEW</span>
        </Button>
        <div className="item">
          <Button
            fillMode={"null"}
            rounded={"none"}
            className="button"
            style={clicked === 1 ? activeButtonStyle : buttonStyle}
            onClick={() => handleButtonClick(1)}
          >
            <Link to="/" className="link">
              <img src={icons.DevicesIcon} className="icon" alt="console" />
            </Link>
            <span className="iconText">CONSOLE</span>
          </Button>
        </div>
        <div className="item">
          <Button
            fillMode={"null"}
            rounded={"none"}
            className="button"
            style={clicked === 2 ? activeButtonStyle : buttonStyle}
            onClick={() => handleButtonClick(2)}
          >
            <Link to="/environment" className="link">
              <img
                src={icons.EnvironmentIcon}
                className="icon"
                alt="environment"
              />
            </Link>
            <span className="iconText">ENVIRONMENT</span>
          </Button>
        </div>
        <div className="item">
          <Button
            fillMode={"null"}
            rounded={"none"}
            className="button"
            style={clicked === 3 ? activeButtonStyle : buttonStyle}
            onClick={() => handleButtonClick(3)}
          >
            <Link to="/" className="link">
              <img
                src={icons.IrrigationIcon}
                className="icon"
                alt="irrigation"
              />
            </Link>
            <span className="iconText">IRRIGATION</span>
          </Button>
        </div>
        <div className="item">
          <Button
            fillMode={"null"}
            rounded={"none"}
            className="button"
            style={clicked === 4 ? activeButtonStyle : buttonStyle}
            onClick={() => handleButtonClick(4)}
          >
            <Link to="/calendar" className="link">
              <img src={icons.CalendarIcon} className="icon" alt="calendar" />
            </Link>
            <span className="iconText">CALENDAR</span>
          </Button>
        </div>
        <div className="item">
          <Button
            fillMode={"null"}
            rounded={"none"}
            className="button"
            style={clicked === 5 ? activeButtonStyle : buttonStyle}
            onClick={() => handleButtonClick(5)}
          >
            <Link to="/" className="link">
              <img src={icons.AlarmIcon} className="icon" alt="alarm" />
            </Link>
            <span className="iconText">ALARM</span>
          </Button>
        </div>
        <div className="item">
          <Button
            fillMode={"null"}
            rounded={"none"}
            className="button"
            style={clicked === 6 ? activeButtonStyle : buttonStyle}
            onClick={() => handleButtonClick(6)}
          >
            <Link to="/" className="link">
              <img src={icons.SettingsIcon} className="icon" alt="settings" />
            </Link>
            <span className="iconText">SETTINGS</span>
          </Button>
        </div>
        <div className="item allRoomBtn">
          <Button fillMode={"null"} rounded={"none"} className="button ">
            <Link to="/" className="link">
              <img src={icons.BackIcon} className="icon" alt="allRoom" />
            </Link>
            <span className="iconText">ALL ROOM</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
