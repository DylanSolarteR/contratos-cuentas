import Swal from "sweetalert2";

export async function changePassword(
  axiosInstance,
  token,
  oldPassword,
  newPassword
) {
  try {
    const response = await axiosInstance.post(
      "/auth/change-password",
      {
        oldPassword: oldPassword,
        newPassword: newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de cambio de contraseña",
      text: "Error: " + error.response.data.error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

export async function getProfile(axiosInstance, token) {
  try {
    const response = await axiosInstance.get("/auth/my", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de obtencion de perfil",
      text: "Error: " + error.response.data.error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

export async function updateProfile(axiosInstance, token, data) {
  try {
    const response = await axiosInstance.put(
      "/auth/my",
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error de actualizacion de perfil",
      text: error.response.data.error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}
