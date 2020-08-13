import React, { useState } from "react";
import MaterialTable from "material-table";

import useGetAllEmployees from "../hooks/useGetAllEmployees.js";
import useHandleRowAdd from "../hooks/useHandleRowAdd.js";
import useHandleRowDelete from "../hooks/useHandleRowDelete.js";
import useHandleRowUpdate from "../hooks/useHandleRowUpdate.js";

export default function MaterialTableDemo() {
  const columns = [
    { title: "Name", field: "name" },
    { title: "Phone", field: "phone" },
    { title: "Address", field: "address" },
    { title: "Title", field: "title" },
  ];
  const [EmployeeList, setEmployeeList] = useState({});

  useGetAllEmployees(setEmployeeList);
  const handleOnRowAdd = useHandleRowAdd(setEmployeeList);
  const handleOnRowUpdate = useHandleRowUpdate(setEmployeeList);
  const handleOnRowDelete = useHandleRowDelete(setEmployeeList);

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
