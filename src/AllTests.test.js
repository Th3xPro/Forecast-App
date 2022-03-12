import React from "react";
import {
  render,
  screen,
  waitFor,
  queryByAttribute,
} from "@testing-library/react";
import LocalTime from "./Forecasts/LocalTime";
import SunTime from "./Forecasts/SunTime";
import TodayForecast from "./Forecasts/TodayForecast";
import FiveDayForecast from "./Forecasts/FiveDayForecast";

describe("LocalTime test", () => {
  it("should render local time for Poznan", async () => {
    render(<LocalTime cityName="Poznan" />);
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    await waitFor(() => {
      screen.queryByText(time);
    });
  });
});

describe("SunTime test", () => {
  it("should render local suntime for Poznan", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const dom = render(<SunTime cityName="Poznan" />);
    await waitFor(() => {
      screen.queryByText("AM");
      screen.queryByText("PM");
    });
  });
});

describe("TodayForecast test", () => {
  it("should render today forecast for Poznan", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const dom = render(<TodayForecast cityName="Poznan" />);
    await waitFor(() => {
      screen.queryByText(" °C");
      screen.queryByText("m/s S");
    });
  });
});
describe("FiveDayForecast test", () => {
  it("should render today forecast for Poznan", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const dom = render(<FiveDayForecast cityName="Poznan" />);
    await waitFor(() => {
      screen.queryByText(" °C");
    });
  });
});
