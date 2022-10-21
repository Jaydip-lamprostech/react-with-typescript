// import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Jaydip",
    last: "Patel",
  };
  const nameList = [
    {
      first: "Dinesh",
      last: "Patel",
    },
    {
      first: "Aruna",
      last: "Patel",
    },
    {
      first: "Jaydip",
      last: "Patel",
    },
    {
      first: "Raj",
      last: "Patel",
    },
  ];
  return (
    <div className="App">
      <Greet name={"Jaydip"} msgcount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList name={nameList} />
      <Status status="loading" />
      <Heading>Pass string as a children</Heading>
      <Oscar>
        <Heading>Passing react component as a children</Heading>
      </Oscar>
      <Greet name="Jaydip" isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
          width: "50%",
          margin: "1rem auto",
        }}
      />
      <LoggedIn />
      <User />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
