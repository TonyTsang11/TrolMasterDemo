import "./navbar.scss";
import icons from "../../index.js";
import { Button } from "@progress/kendo-react-buttons";
import Clock from "../clock/Clock.js";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setClicked(buttonIndex);
  };

  // Default text color for buttons
  const buttonStyle = {
    color: "white",
  };

  // Text color for the clicked button
  const activeButtonStyle = {
    color: "#4BCCAA",
  };

  return (
    <div className="navbar">
      <div className="leftControl">
        <img src={icons.LogoHorizontal} className="logo" alt="Logo" />

        <Button
          className={"dashboardBtn"}
          imageUrl={icons.DashboardIcon}
          type="button"
          size={"small"}
          fillMode={"null"}
          rounded={"null"}
          style={clicked === 0 ? activeButtonStyle : buttonStyle}
          onClick={() => handleButtonClick(0)}
        >
          DASHBOARD
        </Button>

        <Button
          imageUrl={icons.GrowRoomIcon}
          type="button"
          size={"small"}
          fillMode={"null"}
          style={clicked === 1 ? activeButtonStyle : buttonStyle}
          onClick={() => handleButtonClick(1)}
        >
          GROW ROOM
        </Button>

        <Button
          imageUrl={icons.PlantManagementIcon}
          type="button"
          size={"small"}
          fillMode={"null"}
          style={clicked === 2 ? activeButtonStyle : buttonStyle}
          onClick={() => handleButtonClick(2)}
        >
          PLANT MANAGEMENT
        </Button>

        <Button
          imageUrl={icons.TaskManagementIcon}
          type="button"
          size={"small"}
          fillMode={"null"}
          style={clicked === 3 ? activeButtonStyle : buttonStyle}
          onClick={() => handleButtonClick(3)}
        >
          TASK MANAGEMENT
        </Button>

        <Button
          imageUrl={icons.DataAnalyticIcon}
          type="button"
          size={"small"}
          fillMode={"null"}
          style={clicked === 4 ? activeButtonStyle : buttonStyle}
          onClick={() => handleButtonClick(4)}
        >
          DATA ANALYTIC
        </Button>
      </div>

      <div className="rightControl">
        <div className="clock">
          <Clock />
        </div>
        <Button imageUrl={icons.userIcon} type="button" fillMode={"null"} />
        <Button imageUrl={icons.bulkIcon} type="button" fillMode={"null"} />
        <Button imageUrl={icons.settingIcon} type="button" fillMode={"null"} />
        <Button imageUrl={icons.logoutIcon} type="button" fillMode={"null"} />
      </div>
    </div>
  );
};

export default Navbar;
