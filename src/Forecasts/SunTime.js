import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
export default function SunTime(props) {
  const [localSun, setLocalSun] = useState({});
  //This api works only on lat and lng so they had to be predefined
  const fetchSunset = (city) => {
    if (city === "Poznan") {
      const api =
        "https://api.sunrise-sunset.org/json?lat=52.409538&lng=16.931992";
      axios.get(api).then((response) => {
        const output = response.data;
        setLocalSun(output.results);
      });
    } else if (city === "London") {
      const api =
        "https://api.sunrise-sunset.org/json?lat=51.509865&lng=-0.118092";
      axios.get(api).then((response) => {
        const output = response.data;
        setLocalSun(output.results);
      });
    } else if (city === "Havana") {
      const api =
        "https://api.sunrise-sunset.org/json?lat=23.113592&lng=-82.366592";
      axios.get(api).then((response) => {
        const output = response.data;
        setLocalSun(output.results);
      });
    }
  };
  useEffect(() => {
    fetchSunset(props.cityName);
  }, [props.cityName]);
  return (
    <div>
      <Row>
        <Col>
          <h6>{localSun !== undefined && localSun.sunrise}</h6>
        </Col>
        <Col>
          <h6>{localSun !== undefined && localSun.sunset}</h6>
        </Col>
      </Row>
    </div>
  );
}
