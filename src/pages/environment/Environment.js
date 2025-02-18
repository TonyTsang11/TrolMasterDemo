import React from "react";
import "../../../node_modules/uikit/dist/css/uikit-core.min.css";
import { Button } from "@progress/kendo-react-buttons";
import { useState } from "react";
import { Switch, RadioButton, TextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";
import "./environment.scss";
import icons from "../../index.js";

const Environment = () => {
  // Environment menu button selection
  const [firstRowClicked, setFirstRowClicked] = useState(0);

  const handleFirstRowButtonClick = (buttonIndex) => {
    setFirstRowClicked(buttonIndex);
  };

  const [secondRowClicked, setSecondRowClicked] = useState(3);

  const handleSecondRowButtonClick = (buttonIndex) => {
    setSecondRowClicked(buttonIndex);
  };

  const [thirdRowClicked, setThirdRowClicked] = useState(4);

  const handleThirdRowButtonClick = (buttonIndex) => {
    setThirdRowClicked(buttonIndex);
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

  // select chart button
  const [selectedValue, setSelectedValue] = React.useState(0);
  const handleChange = React.useCallback(
    (e) => {
      setSelectedValue(e.value);
    },
    [setSelectedValue]
  );

  // Chart
  const dataTime = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"];
  const chartData = [990, 740, 1000, 1000, 820, 900];

  const chartData2 = [660, 740, 500, 1000, 700, 660];

  const [chatDataSet, setChartDataSet] = useState(chartData);

  const handleChatDataSet = (dataset) => {
    setChartDataSet(dataset);
  };

  const ChartContainer = () => (
    <Chart>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={dataTime} />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem type="line" data={chatDataSet} />
      </ChartSeries>
    </Chart>
  );

  const selectOptions = ["AVG", "AVG", "AVG"];
  const temp = [
    "0",
    "10",
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100",
  ];

  return (
    <>
      <div className="environment">
        <div className="environmentMenu">
          {/* First row buttons */}
          <div className="firstRow">
            <button
              className="selectionBtn"
              style={firstRowClicked === 0 ? activeButtonStyle : buttonStyle}
              onClick={() => handleFirstRowButtonClick(0)}
            >
              <span className="selectionText">SET POINT SETTING</span>
              <img src={icons.sSettingsIcon} alt="setPointSetting" />
            </button>
            <button
              className="selectionBtn"
              style={firstRowClicked === 1 ? activeButtonStyle : buttonStyle}
              onClick={() => handleFirstRowButtonClick(1)}
            >
              <span className="selectionText">SENSORS</span>
              <img src={icons.sBySensorIcon} alt="sensors" />
            </button>
            <button
              className="selectionBtn"
              style={firstRowClicked === 2 ? activeButtonStyle : buttonStyle}
              onClick={() => handleFirstRowButtonClick(2)}
            >
              <span className="selectionText">DEVICES</span>
              <img src={icons.sDevicesIcon} alt="devices" />
            </button>
          </div>
          {/* Second row buttons */}

          <div className="secondRow">
            <button
              className="selectionBtn"
              style={secondRowClicked === 0 ? activeButtonStyle : buttonStyle}
              onClick={() => handleSecondRowButtonClick(0)}
            >
              <span className="selectionText">TEMPERATURE</span>
              <img src={icons.sTemperatureIcon} alt="temperature" />
            </button>
            <button
              className="selectionBtn"
              style={secondRowClicked === 1 ? activeButtonStyle : buttonStyle}
              onClick={() => handleSecondRowButtonClick(1)}
            >
              <span className="selectionText">HUMIDITY</span>
              <img src={icons.sHumidityIcon} alt="humidity" />
            </button>
            <button
              className="selectionBtn"
              style={secondRowClicked === 2 ? activeButtonStyle : buttonStyle}
              onClick={() => handleSecondRowButtonClick(2)}
            >
              <span className="selectionText">CO2</span>
              <img src={icons.sCO2Icon} alt="co2" />
            </button>
            <button
              className="selectionBtn"
              style={secondRowClicked === 3 ? activeButtonStyle : buttonStyle}
              onClick={() => handleSecondRowButtonClick(3)}
            >
              <span className="selectionText">LIGHT</span>
              <img src={icons.sLightIcon} alt="light" />
            </button>

            {/* <Switch className="switch" size={"small"} /> */}
          </div>
          {/* Third row buttons */}
          <div className="thirdRow">
            <button
              className="selectionBtn"
              style={thirdRowClicked === 0 ? activeButtonStyle : buttonStyle}
              onClick={() => handleThirdRowButtonClick(0)}
            >
              <span className="selectionText">LIGHT CONTROL</span>
              <img src={icons.sLightControlIcon} alt="lightControl" />
            </button>
            <button
              className="selectionBtn"
              style={thirdRowClicked === 1 ? activeButtonStyle : buttonStyle}
              onClick={() => handleThirdRowButtonClick(1)}
            >
              <span className="selectionText">GROUP CONTROL</span>
              <img src={icons.sLightControlIcon} alt="groupControl" />
            </button>
            <button
              className="selectionBtn"
              style={thirdRowClicked === 2 ? activeButtonStyle : buttonStyle}
              onClick={() => handleThirdRowButtonClick(2)}
            >
              <span className="selectionText">SPECTRUM CONTROL</span>
              <img src={icons.sSpectrumControlIcon} alt="spectrumControl" />
            </button>
            <button
              className="selectionBtn"
              style={thirdRowClicked === 3 ? activeButtonStyle : buttonStyle}
              onClick={() => handleThirdRowButtonClick(3)}
            >
              <span className="selectionText">SPECTRUM GROUP</span>
              <img src={icons.sSpectrumGroupIcon} alt="spectrumGroup" />
            </button>
            <button
              className="selectionBtn"
              style={thirdRowClicked === 4 ? activeButtonStyle : buttonStyle}
              onClick={() => handleThirdRowButtonClick(4)}
            >
              <span className="selectionText">DLI CONTROL</span>
              <img src={icons.sDLIControlIcon} alt="DLIControl" />
            </button>
            <button
              className="selectionBtn"
              style={thirdRowClicked === 5 ? activeButtonStyle : buttonStyle}
              onClick={() => handleThirdRowButtonClick(5)}
            >
              <span className="selectionText">CLOUD EFFECT</span>
              <img src={icons.sCloudEffectIcon} alt="cloudEffect" />
            </button>
          </div>

          {/* Display Content */}
          <div className="content">
            <div className="displayContainer">
              <div className="header">
                <div className="radioButton">
                  <RadioButton
                    name="group1"
                    value={0}
                    checked={selectedValue === 0}
                    label="Line 1"
                    onChange={handleChange}
                    onClick={() => handleChatDataSet(chartData)}
                  />
                  &emsp;
                  <RadioButton
                    name="group1"
                    value={1}
                    checked={selectedValue === 1}
                    label="Line 2"
                    onChange={handleChange}
                    onClick={() => handleChatDataSet(chartData2)}
                  />
                </div>
                <div className="chartControl">
                  <Button
                    type="button"
                    fillMode={"solid"}
                    themeColor={"secondary"}
                    size={"small"}
                    disabled
                  >
                    43.2 Moles/d
                  </Button>

                  <Button
                    imageUrl={icons.BinIcon}
                    type="button"
                    fillMode={"clear"}
                  />
                  <Button
                    imageUrl={icons.CreateIcon}
                    type="button"
                    fillMode={"clear"}
                  />
                  <Button
                    type="button"
                    fillMode={"solid"}
                    themeColor={"success"}
                    size={"small"}
                    rounded={"full"}
                  >
                    Initial Setting
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="chart">
            <ChartContainer />
          </div>
          <div className="settingButtonGroup">
            <div className="firstRow">
              <div className="settingButton">
                <p className="settingBtnTitle">Par Meter</p>
                <DropDownList
                  style={{
                    width: "200px",
                    height: "30px",
                  }}
                  data={selectOptions}
                  defaultValue="AVG"
                  rounded={"full"}
                />
              </div>
              <div className="settingButton">
                <p className="settingBtnTitle">Setpoint</p>
                <TextBox
                  placeholder="100 %"
                  style={{
                    width: "200px",
                    height: "30px",
                  }}
                  rounded={"full"}
                />
              </div>
              <div className="settingButton">
                <p className="settingBtnTitle">Time</p>
                <TextBox
                  placeholder="100 %"
                  style={{
                    width: "200px",
                    height: "30px",
                  }}
                  rounded={"full"}
                />
              </div>
            </div>
            <div className="secondRow">
              <div className="settingButton">
                <p className="settingBtnTitle">Temperature Sensor</p>
                <DropDownList
                  style={{
                    width: "200px",
                    height: "30px",
                  }}
                  data={selectOptions}
                  defaultValue="AVG"
                  rounded={"full"}
                />
              </div>
              <div className="settingButton">
                <p className="settingBtnTitle"> Shutdown Temperature</p>
                <TextBox
                  placeholder="95 F"
                  style={{
                    width: "200px",
                    height: "30px",
                  }}
                  rounded={"full"}
                />
              </div>
              <div className="settingButton">
                <p className="settingBtnTitle">Dimming Temperature</p>
                <TextBox
                  placeholder="90 F"
                  style={{
                    width: "200px",
                    height: "30px",
                  }}
                  rounded={"full"}
                />
              </div>
            </div>
            <div className="thirdRow">
              <div className="settingButton">
                <p className="settingBtnTitle">Bulb Type</p>
                <DropDownList
                  style={{
                    width: "200px",
                    height: "30px",
                  }}
                  data={selectOptions}
                  defaultValue="LED"
                  rounded={"full"}
                />
              </div>
              <div className="settingButton">
                <p className="settingBtnTitle"> Dimming Range</p>
                <DropDownList
                  style={{
                    width: "105px",
                    height: "30px",
                  }}
                  data={temp}
                  defaultValue="0"
                  rounded={"full"}
                />
                &nbsp;% &emsp;to &emsp;
              </div>
              <div className="settingButton">
                <p className="settingBtnTitle">&nbsp;</p>
                <DropDownList
                  style={{
                    width: "105px",
                    height: "30px",
                  }}
                  data={temp}
                  defaultValue="100"
                  rounded={"full"}
                />
                &nbsp;%
              </div>
            </div>
          </div>

          {/* Data Control Button */}
          <div className="dataControlButton">
            <div className="firstRow">
              <Button
                type="button"
                themeColor={"success"}
                rounded={"full"}
                style={{ width: "110px", marginLeft: "15px" }}
              >
                | SAVE
              </Button>
              <Button
                type="button"
                themeColor={"primary"}
                rounded={"full"}
                style={{ width: "110px", marginLeft: "15px" }}
              >
                | RESET
              </Button>
              <Button
                type="button"
                themeColor={"inverse"}
                rounded={"full"}
                style={{ width: "160px", marginLeft: "15px" }}
              >
                | SAVE TO RESET
              </Button>
            </div>
          </div>
        </div>

        <div className="presets">
          <span className="presetsTitle">PRESETS</span>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Environment;
