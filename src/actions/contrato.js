import Swal from "sweetalert2";

export async function getContratos(axiosInstance, token) {
  try {
    const response = await axiosInstance.get("/contrato", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de obtencion de clientes",
      text: "Error: " + error.response.data.error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

export async function generateContrato(
  axiosInstance,
  token,
  idPlantilla,
  idCliente
) {
  try {
    const response = await axiosInstance.post(
      `/contrato/generate`,
      {
        plantillaId: idPlantilla,
        clienteId: idCliente,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    // Swal.fire({
    //   title: "Error de generacion de contrato",
    //   text: "Error: " + error.response.data.error,
    //   icon: "error",
    //   confirmButtonText: "OK",
    // });
  }
}

export async function descargarContrato(axiosInstance, token, id) {
  try {
    const response = await axiosInstance.get(`/contrato/download/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de descarga de contrato",
      text: "Error: " + error.response.data.error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}
