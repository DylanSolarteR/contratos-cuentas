import Swal from "sweetalert2";
export async function addItems(axiosInstance, data, token) {
  try {
    const response = await axiosInstance.post("/item", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de creacion de item",
      text: error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

export async function getItems(axiosInstance, token) {
  try {
    const response = await axiosInstance.get("/item", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de obtencion de item",
      text: "Error: " + error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}
