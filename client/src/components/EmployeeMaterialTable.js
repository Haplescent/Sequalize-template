import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import useGetAllEmployees from "../hooks/useGetAllEmployees.js";

export default function MaterialTableDemo() {
  console.log("start of cycle");
  const columns = [
    { title: "Name", field: "name" },
    { title: "Phone", field: "phone" },
    { title: "Address", field: "address" },
    { title: "Title", field: "title" },
  ];

  // const employeeList = useGetAllEmployees();
  // console.log(employeeList);

  const [EmployeeList, setEmployeeList] = useState({});

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
  // const [loading, setLoading] = React.useState(true);

  // if (loading) {
  //   console.log(employeeList);
  //   setLoading(false);
  //   setState(employeeList);
  //   return <p>...Loading</p>;
  // }

  // const handleOnRowAdd = (newData) =>
  //   new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //       setState((prevState) => {
  //         const data = [...prevState.data];
  //         data.push(newData);
  //         return { ...prevState, data };
  //       });
  //     }, 600);
  //   });

  // const handleOnRowUpdate = (newData, oldData) =>
  //   new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //       if (oldData) {
  //         setState((prevState) => {
  //           const data = [...prevState.data];
  //           data[data.indexOf(oldData)] = newData;
  //           return { ...prevState, data };
  //         });
  //       }
  //     }, 600);
  //   });

  // const handleOnRowDelete = (oldData) =>
  //   new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //       setState((prevState) => {
  //         const data = [...prevState.data];
  //         data.splice(data.indexOf(oldData), 1);
  //         return { ...prevState, data };
  //       });
  //     }, 600);
  //   });
  console.log("end of cycle");
  return (
    <MaterialTable
      title="Employees"
      columns={columns}
      data={EmployeeList.data}
      //   editable={{
      //     onRowAdd: handleOnRowAdd,
      //     onRowUpdate: handleOnRowUpdate,
      //     onRowDelete: handleOnRowDelete,
      //   }}
    />
  );
}
