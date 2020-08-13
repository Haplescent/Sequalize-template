var axios = require("axios");
var qs = require("qs");

const ApiPutUpdate = (newData) => {
  var data = qs.stringify({
    id: newData.id,
    name: newData.name,
    phone: newData.phone,
    address: newData.address,
    title: newData.title,
  });
  var config = {
    method: "put",
    url: "https://secret-castle-21752.herokuapp.com/api/edit/",
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

const useHandleRowUpdate = (setEmployeeList) => {
  const handleOnRowUpdate = (newData, oldData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          setEmployeeList((prevState) => {
            const data = [...prevState.data];
            ApiPutUpdate(newData);
            data[data.indexOf(oldData)] = newData;
            return { ...prevState, data };
          });
        }
      }, 600);
    });
  return handleOnRowUpdate;
};

export default useHandleRowUpdate;
