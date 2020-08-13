import axios from "axios";

const ApiDeleteNewUser = (oldData) => {
  var config = {
    method: "delete",
    url: `https://secret-castle-21752.herokuapp.com/api/delete/${oldData.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const useHandleRowDelete = (setEmployeeList) => {
  const handleOnRowDelete = (oldData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        setEmployeeList((prevState) => {
          const data = [...prevState.data];
          console.log(oldData);
          ApiDeleteNewUser(oldData);
          data.splice(data.indexOf(oldData), 1);
          return { ...prevState, data };
        });
      }, 600);
    });
  return handleOnRowDelete;
};

export default useHandleRowDelete;
