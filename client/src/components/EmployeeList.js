import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function EmployeeList() {
  const [employeeList, setEmployeeList] = useState([
    {
      id: 4,
      text: "example test todo",
      createdAt: "2020-08-11T18:17:18.000Z",
      updatedAt: "2020-08-11T18:17:18.000Z",
    },
  ]);

  useEffect(() => {
    const apiCall = async () => {
      let config = {
        method: "get",
        url: "https://secret-castle-21752.herokuapp.com/api/all",
        headers: {},
      };

      await axios(config)
        .then(function (response) {
          let jsonString = JSON.stringify(response.data);
          setEmployeeList(JSON.parse(jsonString));
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    console.log("doing use Effect");
    apiCall();
  }, []);

  return (
    <div>
      <ul>{employeeList.map((employee) => employee.text)}</ul>
    </div>
  );
}

export default EmployeeList;
