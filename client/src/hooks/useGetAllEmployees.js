import { useState, useEffect } from "react";
import axios from "axios";

const useGetAllEmployees = () => {
  const [employeeList, setEmployeeList] = useState([]);

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
    apiCall();
  }, []);
  return { data: employeeList };
};

export default useGetAllEmployees;
