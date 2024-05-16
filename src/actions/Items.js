import Swal from "sweetalert2";
export function addItem(axiosInstance, data, token) {
  const response = axiosInstance
    .post("/item", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
        
    });
  if (response.status === 200) {
    return response.data;
  }
}
