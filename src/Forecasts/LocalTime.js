import { useState, useEffect } from "react";
import axios from "axios";

export default function LocalTime(props) {
  const [localTimeCity, setLocalTimeCity] = useState("");
  //It could be done in list of counteries of specific region |CET|UTC|EST
  const fetchLocalTime = (city) => {
    if (city === "Poznan") {
      const api = "http://worldclockapi.com/api/json/cet/now";
      axios.get(api).then((response) => {
        const output = response.data;
        setLocalTimeCity(output);
      });
    } else if (city === "London") {
      const api = "http://worldclockapi.com/api/json/utc/now";
      axios.get(api).then((response) => {
        const output = response.data;
        setLocalTimeCity(output);
      });
    } else if (city === "Havana") {
      const api = "http://worldclockapi.com/api/json/est/now";
      axios.get(api).then((response) => {
        const output = response.data;
        setLocalTimeCity(output);
      });
    }
  };

  useEffect(() => {
    fetchLocalTime(props.cityName);
  }, [props.cityName]);
  //gethours and getminuts maybe
  return (
    <div>
      <h6>
        {/* Cutting string rather than "new Date" because of automatic conv to Local Time */}
        {localTimeCity.currentDateTime !== undefined &&
          localTimeCity.currentDateTime.toString().substring(11, 16)}
      </h6>
    </div>
  );
}
