import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  if (props.message) {
    return (
      <div className="row">
        <div className="col-sm-6">
          <ul>
            <li className="city"> {props.message.name}: </li>
            <li>Feels like: {Math.round(props.message.main.feels_like)}ºC</li>
            <li>Humidity: {props.message.main.humidity}%</li>
            <li>Wind: {Math.round(props.message.wind.speed)}km/h</li>
            <li> Description: {props.message.weather[0].description}</li>
          </ul>
          <div className="col-sm-6">
            <div className="weather-temperature">
              <img
                src={`http://openweathermap.org/img/wn/${props.message.weather[0].icon}@2x.png`}
                alt="weather"
                className="float-left"
              />
              <h1 className="weather-figure">
                {Math.round(props.message.main.temp)}
              </h1>
              <div className="units">
                <span className="float-right">
                  <a href="#" id="celsius" className="active">
                    °C
                  </a>{" "}
                  |
                  <a href="#" id="fahrenheit">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <span>
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="#f4f6ff"
          size="50"
          animate={true}
        />
        App
      </span>
    );
  }
}
