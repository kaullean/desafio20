export const formatoMensaje = (data) => {
  const { user, mensaje } = data;
  return {
    usuario:user,
    mensaje,
  };
};