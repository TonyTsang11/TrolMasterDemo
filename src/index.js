import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import "../node_modules/uikit/dist/js/uikit.min.js";

//import and export Icon
import DashboardIcon from "./assets/icons/DashboardIcon.svg";
import DataAnalyticIcon from "./assets/icons/DataAnalyticIcon .svg";
import GrowRoomIcon from "./assets/icons/GrowRoomIcon.svg";
import PlantManagementIcon from "./assets/icons/PlantManagementIcon.svg";
import TaskManagementIcon from "./assets/icons/TaskManagementIcon.svg";
import LogoHorizontal from "./assets/icons/LogoHorizontal.svg";
import bulkIcon from "./assets/icons/bulkIcon.svg";
import logoutIcon from "./assets/icons/logoutIcon.svg";
import settingIcon from "./assets/icons/settingIcon.svg";
import userIcon from "./assets/icons/userIcon.svg";
import AlarmIcon from "./assets/icons/AlarmIcon.svg";
import CalendarIcon from "./assets/icons/CalendarIcon.svg";
import EnvironmentIcon from "./assets/icons/EnvironmentIcon.svg";
import IrrigationIcon from "./assets/icons/IrrigationIcon.svg";
import SettingsIcon from "./assets/icons/SettingsIcon.svg";
import OverviewIcon from "./assets/icons/OverviewIcon.svg";
import DevicesIcon from "./assets/icons/DevicesIcon.svg";
import BackIcon from "./assets/icons/BackIcon.svg";
import sBySensorIcon from "./assets/icons/sBySensorIcon.svg";
import sCO2Icon from "./assets/icons/sCO2Icon.svg";
import sCloudEffectIcon from "./assets/icons/sCloudEffectIcon.svg";
import sDLIControlIcon from "./assets/icons/sDLIControl Icon.svg";
import sDevicesIcon from "./assets/icons/sDevicesIcon.svg";
import sHumidityIcon from "./assets/icons/sHumidityIcon.svg";
import sLightControlIcon from "./assets/icons/sLightControlIcon.svg";
import sLightIcon from "./assets/icons/sLightIcon.svg";
import sSettingsIcon from "./assets/icons/sSettingsIcon.svg";
import sSpectrumControlIcon from "./assets/icons/sSpectrumControlIcon.svg";
import sSpectrumGroupIcon from "./assets/icons/sSpectrumGroupIcon.svg";
import sTemperatureIcon from "./assets/icons/sTemperatureIcon.svg";
import sSettingIcon from "./assets/icons/sSettingsIcon.svg";
import CreateIcon from "./assets/icons/CreateIcon.svg";
import BinIcon from "./assets/icons/BinIcon.svg";
import sAgendaIcon from "./assets/icons/sAgendaIcon.svg";
import sCalendarIcon from "./assets/icons/sCalendarIcon.svg";
import sRecipeIcon from "./assets/icons/sRecipeIcon.svg";

const icons = {
  DashboardIcon,
  DataAnalyticIcon,
  GrowRoomIcon,
  PlantManagementIcon,
  TaskManagementIcon,
  LogoHorizontal,
  bulkIcon,
  logoutIcon,
  settingIcon,
  userIcon,
  AlarmIcon,
  CalendarIcon,
  EnvironmentIcon,
  IrrigationIcon,
  SettingsIcon,
  OverviewIcon,
  DevicesIcon,
  BackIcon,
  sBySensorIcon,
  sCO2Icon,
  sCloudEffectIcon,
  sDLIControlIcon,
  sDevicesIcon,
  sHumidityIcon,
  sLightControlIcon,
  sLightIcon,
  sSettingIcon,
  sSettingsIcon,
  sSpectrumControlIcon,
  sSpectrumGroupIcon,
  sTemperatureIcon,
  BinIcon,
  CreateIcon,
  sAgendaIcon,
  sCalendarIcon,
  sRecipeIcon,
};
export default icons;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
