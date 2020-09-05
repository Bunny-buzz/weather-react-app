import React from "react";
import "./App.css";
import Find from "./Find";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="weather-body">
        <div>
          <Find />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
