import { useState, useEffect } from "react";
import axios from "axios";

export default function LocalTime(props) {
  const [localTimeCity, setLocalTimeCity] = useState("");

  //It could be done in list of counteries of specific region |CET|UTC|EST
  const fetchLocalTime = (city) => {
    const savedTime = JSON.parse(localStorage.getItem(city + "-Time"));
    if (savedTime === null || savedTime === [] || savedTime === "") {
      if (city === "Poznan") {
        const api = "http://worldclockapi.com/api/json/cet/now";
        axios.get(api).then((response) => {
          const output = response.data;
          setLocalTimeCity(output);
          localStorage.setItem(city + "-Time", JSON.stringify(output));
        });
      } else if (city === "London") {
        const api = "http://worldclockapi.com/api/json/utc/now";
        axios.get(api).then((response) => {
          const output = response.data;
          setLocalTimeCity(output);
          localStorage.setItem(city + "-Time", JSON.stringify(output));
        });
      } else if (city === "Havana") {
        const api = "http://worldclockapi.com/api/json/est/now";
        axios.get(api).then((response) => {
          const output = response.data;
          setLocalTimeCity(output);
          localStorage.setItem(city + "-Time", JSON.stringify(output));
        });
      }
    } else {
      const todayTime = new Date().getTime();
      const difference = Date.parse(savedTime.currentDateTime) - todayTime;
      if (difference <= -400000) {
        localStorage.removeItem(city + "-Time");
        localStorage.removeItem(city + "-SunTime");
        localStorage.removeItem(city + "-TodayForecast");
        localStorage.removeItem(city + "-5day");
        fetchLocalTime(city);
      } else {
        setLocalTimeCity(savedTime);
      }
    }
  };

  useEffect(() => {
    fetchLocalTime(props.cityName);
  }, [props.cityName]);

  return (
    <div>
      <h6 id="local-time">
        {/* Cutting string rather than "new Date" because of automatic conv to Local Time */}
        {localTimeCity.currentDateTime !== undefined &&
          localTimeCity.currentDateTime.toString().substring(11, 16)}
      </h6>
    </div>
  );
}
