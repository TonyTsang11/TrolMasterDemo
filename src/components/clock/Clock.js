import React, { useState, useEffect } from "react";

const formatDate = (date) => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const day = days[date.getDay()];
  console.log(date.getDay());
  const dayNumber = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}, ${dayNumber} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
};

const Clock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Keep the day and time updated
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{formatDate(currentDateTime)}</p>
    </div>
  );
};

export default Clock;
