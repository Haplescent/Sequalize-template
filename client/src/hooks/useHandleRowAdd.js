import React from "react";

const useHandleRowAdd = (setEmployeeList) => {
  const handleOnRowAdd = (newData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        // resolve();
        setEmployeeList((prevState) => {
          const data = [...prevState.data];
          data.push(newData);
          return { ...prevState, data };
        });
      }, 600);
    });
  return handleOnRowAdd;
};

export default useHandleRowAdd;
