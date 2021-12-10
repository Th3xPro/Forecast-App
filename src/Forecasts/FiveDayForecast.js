import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

export default function FiveDayForecast(props) {
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  //Filtering data on fetching to get only 5 days
  const fetchFiveDayForecast = (city, apiKey) => {
    if (city === "Poznan") {
      const api = `http://api.openweathermap.org/data/2.5/forecast?q=Poznan&appid=${apiKey}`;
      axios.get(api).then((response) => {
        const output = response.data;
        setFiveDayForecast(
          output.list.filter((day, id) => {
            return id % 8 === 0 && day;
          })
        );
      });
    } else if (city === "London") {
      const api = `http://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKey}`;
      axios.get(api).then((response) => {
        const output = response.data;
        setFiveDayForecast(
          output.list.filter((day, id) => {
            return id % 8 === 0 && day;
          })
        );
      });
    } else if (city === "Havana") {
      const api = `http://api.openweathermap.org/data/2.5/forecast?q=Havana&appid=${apiKey}`;
      axios.get(api).then((response) => {
        const output = response.data;

        setFiveDayForecast(
          output.list.filter((day, id) => {
            return id % 8 === 0 && day;
          })
        );
      });
    }
  };
  useEffect(() => {
    fetchFiveDayForecast(props.cityName, props.apiKey);
  }, [props.cityName, props.apiKey]);
  return (
    <div>
      {fiveDayForecast.length !== 0 &&
        fiveDayForecast.map((day, id) => (
          <Row>
            <Col
              className="col-6 text-center justify-content-center mb-3"
              key={id}
            >
              <h6 className="mt-2 pt-1 float-left">
                {/* Using "new Date" to display in correct format acutal date */}
                {new Date(day.dt_txt).toLocaleDateString()}
              </h6>
            </Col>
            <Col className="col-6  text-center justify-content-center mb-3">
              <h6 className="text-muted">
                <img
                  alt={day.weather[0].icon}
                  src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                  width="50px"
                />
                {parseInt(day.main.temp_max - 273.15) + " °C "} /{" "}
                {parseInt(day.main.temp_min - 273.15) + " °C"}
              </h6>
            </Col>
          </Row>
        ))}
    </div>
  );
}
