import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  let [time, setTime] = useState(now);

  function updateTime() {
    let hours = new Date().getHours().toLocaleString();
    let minutes = new Date().getMinutes().toLocaleString();
    let fullTime = `${hours}:${minutes}`;
    setTime(fullTime);
  }

  // function sayHi() {
  //   console.log("Hey");
  // }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
