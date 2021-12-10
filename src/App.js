import { useState } from "react";
import "./App.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import LocalTime from "./Forecasts/LocalTime";
import SunTime from "./Forecasts/SunTime";
import TodayForecast from "./Forecasts/TodayForecast";
import FiveDayForecast from "./Forecasts/FiveDayForecast";
function App() {
  const [selectedCity, setSelectedCity] = useState("");
  //State to pass custom apiKey to fetch data from API
  const [apiKey, setApiKey] = useState("b7fe3118feac2d015b410298e29ef86a");
  const [tempKey, setTempKey] = useState("");

  function setKey(key) {
    setApiKey(key);
  }
  return (
    <Container className="col-8 text-center justify-content-center">
      <Row className="text-center justify-content-center">
        <Col className="col-12 mb-3">
          <h6 className="display-4">
            Wybierz miasto dla którego wyświetlić pogodę.
          </h6>
        </Col>
        <Col className="d-block col-6 text-center mb-5">
          <Form.Select
            aria-label="Select city"
            defaultValue=""
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" disabled>
              Wybierz Miasto
            </option>
            <option aria-label="city-input" value="Poznan">
              Poznań
            </option>
            <option aria-label="city-input" value="London">
              Londyn
            </option>
            <option aria-label="city-input" value="Havana">
              Havana
            </option>
          </Form.Select>
        </Col>
        <Col className="col-12 mb-3">
          <h4 className="text-muted">
            Pogoda dla <i>{selectedCity}</i>
          </h4>
        </Col>
        <hr />
      </Row>
      {/* Displaying all components on selected city */}
      {selectedCity !== "" && (
        <Row>
          <Col className="col-12 mb-1">
            <h6 className="text-muted">Aktualny czas</h6>
            <LocalTime cityName={selectedCity} />
          </Col>
          <Col className="col-12 mb-1">
            <h6 className="text-muted">Czas wschódu i zachodu</h6>
            <SunTime cityName={selectedCity} />
          </Col>
          <Col className="col-12 mb-1">
            <h6 className="text-muted">Dzisiejsza pogoda</h6>
            <TodayForecast cityName={selectedCity} apiKey={apiKey} />
          </Col>
          <Col className="col-12 mb-1">
            <h6 className="text-muted">5-dniowa prognoza pogody</h6>
            <FiveDayForecast cityName={selectedCity} apiKey={apiKey} />
          </Col>
        </Row>
      )}
      {selectedCity !== "" && <hr />}
      <p className="text-muted">
        Jeśli nie wyświetlają się dane pogody to trzeba zmienić klucz
      </p>
      {/* Setting a custom apiKey */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          placeholder="Klucz API"
          defaultValue={apiKey}
          onChange={(e) => {
            setTempKey(e.target.value);
          }}
        />
      </Form.Group>
      <Button
        className="btn btn-dark"
        onClick={() => {
          setKey(tempKey);
        }}
      >
        Zmień
      </Button>
    </Container>
  );
}

export default App;
