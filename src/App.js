/**
 * Project: Peronal Greeter
 * Author : Wathsala Bandara
 * Date   : 03/20/2022
 */
import React from "react";
import GreetingMessage from "./components/GreetingMessage";
import CurrentDayMood from "./components/CurrentDayMood";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <fieldset>
        <p className="heading">Personal Greeter</p>
        <GreetingMessage />
        <CurrentDayMood />
      </fieldset>
    )
  }
}

export default App;
