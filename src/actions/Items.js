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
      text: "Error: " + error.response.data.error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

export async function getItems(axiosInstance, token) {
  try {
    const response = await axiosInstance.get("/item?tipo=clausula", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de obtencion de items",
      text: "Error: " + error.response.data.error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}
export async function getItemsEncabezados(axiosInstance, token) {
  try {
    const response = await axiosInstance.get("/item?tipo=encabezado", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de obtencion de encabezados",
      text: "Error: " + error.response.data.error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

export async function deleteItem(axiosInstance, itemId, token) {
  try {
    const response = await axiosInstance.delete(`/item/${itemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de eliminacion de item",
      text: "Error: " + error.response.data.error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}
