import React from "react";

import useGetAllEmployees from "../hooks/useGetAllEmployees.js";

function EmployeeList() {
  const employeeList = useGetAllEmployees();

  return (
    <div>
      <ul>{employeeList.map((employee) => employee.text)}</ul>
    </div>
  );
}

export default EmployeeList;
