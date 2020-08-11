import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "1st todo",
      createdAt: "2020-08-10T23:31:43.000Z",
      updatedAt: "2020-08-10T23:31:43.000Z",
    },
  ]);

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:8080/api/all",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <p>{todos[0].text}</p>
    </div>
  );
}

export default App;
