import React from "react";
import reactDom from "react-dom";

//Getting time
var currentHour = new Date().getHours();
var currentMin = new Date().getMinutes();
var currentTime = currentHour + ":" + currentMin;

//Dynamically Changing Message and color
if (currentHour > 0 && currentHour <= 12) {
  var message = "Good Morning";
  var customColor = { color: "red" };
} else if (currentHour > 12 && currentHour <= 18) {
  var message = "Good Afternoon!";
  var customColor = { color: "green" };
} else {
  var message = "Good Evening!";
  var customColor = { color: "blue" };
}

// React Code to show
reactDom.render(
  <div>
    <h1 className="heading" style={customColor}>
      {message}
    </h1>
  </div>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
