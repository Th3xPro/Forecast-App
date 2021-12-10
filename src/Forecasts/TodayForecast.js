import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { FaLocationArrow } from "react-icons/fa";

export default function TodayForecast(props) {
  const [todayForecast, setTodayForecast] = useState("");
  //State to use it to rotate icon to display correct wind direction
  const [deg, setDeg] = useState(0);
  const fetchTodayForecast = (city, apiKey) => {
    if (city === "Poznan") {
      const api = `http://api.openweathermap.org/data/2.5/weather?q=Poznan&appid=${apiKey}`;
      axios.get(api).then((response) => {
        const output = response.data;
        setTodayForecast(output);
      });
    } else if (city === "London") {
      const api = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
      axios.get(api).then((response) => {
        const output = response.data;
        setTodayForecast(output);
      });
    } else if (city === "Havana") {
      const api = `http://api.openweathermap.org/data/2.5/weather?q=Havana&appid=${apiKey}`;
      axios.get(api).then((response) => {
        const output = response.data;
        setTodayForecast(output);
      });
    }
  };
  useEffect(() => {
    fetchTodayForecast(props.cityName, props.apiKey);
    if (todayForecast.wind !== undefined) {
      setDeg(-parseInt(todayForecast.wind.deg) + "deg");
    }
  }, [props.cityName, todayForecast.wind, props.apiKey]);
  return (
    <div>
      <Row>
        <Col className="col-12 d-flex text-center justify-content-center">
          {todayForecast.weather !== undefined && (
            <img
              alt={todayForecast.weather[0].icon}
              src={`http://openweathermap.org/img/w/${todayForecast.weather[0].icon}.png`}
              width="50px"
            />
          )}
          <h3 className="pt-2">
            {todayForecast.main !== undefined &&
              parseInt(todayForecast.main.temp - 273.15) + " °C"}
          </h3>
        </Col>
        <Col className="col-12 d-flex text-center justify-content-center">
          <h4 className="pt-2 me-5">
            {/* Displaying icon and rotating it on specific deg from API */}
            {todayForecast.wind !== undefined && (
              <FaLocationArrow style={{ transform: `rotate(${deg})` }} />
            )}
          </h4>
          <h4 className="pt-2">
            {todayForecast.wind !== undefined &&
              todayForecast.wind.speed + "m/s S"}
          </h4>
        </Col>
      </Row>
    </div>
  );
}
