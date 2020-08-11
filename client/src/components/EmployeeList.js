import React from "react";

import useGetAllEmployees from "../hooks/useGetAllEmployees.js";

function EmployeeList() {
  const employeeList = useGetAllEmployees();

  return (
    <div>
      <ul>{employeeList.map((employee) => employee.name)}</ul>
    </div>
  );
}

export default EmployeeList;
