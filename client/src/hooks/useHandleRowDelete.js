import React from "react";

const useHandleRowDelete = (setEmployeeList) => {
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
  return handleOnRowDelete;
};

export default useHandleRowDelete;
