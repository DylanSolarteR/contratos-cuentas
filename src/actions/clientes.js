import Swal from "sweetalert2";

export async function getClientes(axiosInstance, token) {
  try {
    const response = await axiosInstance.get("/cliente", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de obtencion de clientes",
      text: "Error: " + error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}
