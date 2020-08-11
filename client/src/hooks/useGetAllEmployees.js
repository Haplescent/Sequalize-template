import axios from "axios";
import { useState, useEffect } from "react";

const useGetAllEmployees = () => {
  const [employeeList, setEmployeeList] = useState([]);
  useEffect(() => {
    let config = {
      method: "get",
      url: "https://secret-castle-21752.herokuapp.com/api/all",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        let jsonString = JSON.stringify(response.data);
        let jsonObject = JSON.parse(jsonString);
        setEmployeeList(jsonObject);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return employeeList;
};

export default useGetAllEmployees;
