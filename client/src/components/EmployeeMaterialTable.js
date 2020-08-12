import React, { useState } from "react";
import MaterialTable from "material-table";

import useGetAllEmployees from "../hooks/useGetAllEmployees.js";
import useHandleRowAdd from "../hooks/useHandleRowAdd.js";

export default function MaterialTableDemo() {
  const columns = [
    { title: "Name", field: "name" },
    { title: "Phone", field: "phone" },
    { title: "Address", field: "address" },
    { title: "Title", field: "title" },
  ];
  const [EmployeeList, setEmployeeList] = useState({});

  useGetAllEmployees(setEmployeeList);

  const handleOnRowAdd = useHandleRowAdd();

  const handleOnRowUpdate = (newData, oldData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          setEmployeeList((prevState) => {
            const data = [...prevState.data];
            data[data.indexOf(oldData)] = newData;
            return { ...prevState, data };
          });
        }
      }, 600);
    });

  const handleOnRowDelete = (oldData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        setEmployeeList((prevState) => {
          const data = [...prevState.data];
          data.splice(data.indexOf(oldData), 1);
          return { ...prevState, data };
        });
      }, 600);
    });

  return (
    <MaterialTable
      title="Employees"
      columns={columns}
      data={EmployeeList.data}
      editable={{
        onRowAdd: handleOnRowAdd,
        onRowUpdate: handleOnRowUpdate,
        onRowDelete: handleOnRowDelete,
      }}
    />
  );
}
