import { useState, useEffect } from "react";
import axios from "axios";

const useGetAllEmployees = () => {
  const [employeeList, setEmployeeList] = useState({});

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

          let jsonObject = JSON.parse(jsonString);

          const employeeListMapped = jsonObject.map((employee) => {
            return {
              name: employee.name,
              phone: employee.phone,
              address: employee.address,
              title: employee.title,
            };
          });
          let EmployeeData = { data: employeeListMapped };

          setEmployeeList(EmployeeData);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    apiCall();
  }, []);

  return employeeList;
};

export default useGetAllEmployees;
