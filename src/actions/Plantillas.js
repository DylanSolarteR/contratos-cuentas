import Swal from "sweetalert2";

export async function addPlantillas(axiosInstance, data, token) {
  try {
    const response = await axiosInstance.post("/plantilla", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de creacion de plantilla",
      text: error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

export async function getPlantillas(axiosInstance, token) {
  try {
    const response = await axiosInstance.get("/plantilla", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de obtencion de plantillas",
      text: error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

export async function getPlantillaById(axiosInstance, id, token) {
  try {
    const response = await axiosInstance.get(`/plantilla/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // return "error";
    Swal.fire({
      title: "Error de obtencion de plantillas",
      text: error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

export async function deletePlantilla(axiosInstance, id, token) {
  try {
    const response = await axiosInstance.delete(`/plantilla/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de eliminacion de plantilla",
      text: error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

export async function updatePlantilla(axiosInstance, id, data, token) {
  try {
    const response = await axiosInstance.put(`/plantilla/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de actualizacion de plantilla",
      text: error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}
