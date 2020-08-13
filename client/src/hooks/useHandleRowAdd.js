import axios from "axios";
import qs from "qs";

const ApiPostNewUser = (newUser) => {
  var data = qs.stringify({
    name: newUser.name,
    phone: newUser.phone,
    address: newUser.address,
    title: newUser.title,
  });
  var config = {
    method: "post",
    url: "https://secret-castle-21752.herokuapp.com/api/new",
    headers: {},
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const useHandleRowAdd = (setEmployeeList) => {
  const handleOnRowAdd = (newData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        setEmployeeList((prevState) => {
          const data = [...prevState.data];
          ApiPostNewUser(newData);
          data.push(newData);
          return { ...prevState, data };
        });
      }, 600);
    });
  return handleOnRowAdd;
};

export default useHandleRowAdd;
