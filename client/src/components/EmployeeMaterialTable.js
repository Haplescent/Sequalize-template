import React, { useEffect } from "react";
import MaterialTable from "material-table";
import useGetAllEmployees from "../hooks/useGetAllEmployees.js";

export default function MaterialTableDemo() {
  const columns = [
    { title: "Name", field: "name" },
    { title: "Phone", field: "phone" },
    { title: "Address", field: "address" },
    { title: "Title", field: "title" },
  ];

  //   const [state, setState] = React.useState({});

  //   setState({
  //     data: [
  //       {
  //         name: "John 8",
  //         phone: "6508677015 8",
  //         address: "766 Harrison St, Unit 209, San Francisco, CA, 94401 8",
  //         title: "Scientist 8",
  //       },
  //     ],
  //   });

  const state = useGetAllEmployees();

  //   const employeeList = useGetAllEmployees();
  //   const employeeListMapped = employeeList.map((employee) => {
  //     return {
  //       name: employee.name,
  //       phone: employee.phone,
  //       address: employee.address,
  //       title: employee.title,
  //     };
  //   });
  //   console.log(employeeListMapped);

  return (
    <MaterialTable
      title="Employees"
      columns={columns}
      data={state.data}
      //   editable={{
      //     onRowAdd: (newData) =>
      //       new Promise((resolve) => {
      //         setTimeout(() => {
      //           resolve();
      //           setState((prevState) => {
      //             const data = [...prevState.data];
      //             data.push(newData);
      //             return { ...prevState, data };
      //           });
      //         }, 600);
      //       }),
      //     onRowUpdate: (newData, oldData) =>
      //       new Promise((resolve) => {
      //         setTimeout(() => {
      //           resolve();
      //           if (oldData) {
      //             setState((prevState) => {
      //               const data = [...prevState.data];
      //               data[data.indexOf(oldData)] = newData;
      //               return { ...prevState, data };
      //             });
      //           }
      //         }, 600);
      //       }),
      //     onRowDelete: (oldData) =>
      //       new Promise((resolve) => {
      //         setTimeout(() => {
      //           resolve();
      //           setState((prevState) => {
      //             const data = [...prevState.data];
      //             data.splice(data.indexOf(oldData), 1);
      //             return { ...prevState, data };
      //           });
      //         }, 600);
      //       }),
      //   }}
    />
  );
}
