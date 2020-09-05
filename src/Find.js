import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function Search(props) {
  const [city, setCity] = useState(" ");
  const [message, setMessage] = useState("");

  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];

    return `${day} ${hours}:${minutes}`;
  }

  function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
  function displayTemperature(response) {
    console.log(response);
    setMessage(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d431d2ed9ff419b2288a607b5abcf652";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayTemperature);
    return <p> Loading page for {city} </p>;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type in a City" onChange={updateCity} />
      <button type="submit">Search</button>
      <h2>
        <Weather message={message} />
      </h2>
    </form>
  );
}
