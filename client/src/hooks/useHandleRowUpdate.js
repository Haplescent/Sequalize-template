const useHandleRowUpdate = (setEmployeeList) => {
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
  return handleOnRowUpdate;
};

export default useHandleRowUpdate;
