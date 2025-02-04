export const formatearFecha = (fecha) => {
  const nuevaFecha = new Date(fecha);
  const opciones = {
    year: "numeric",
    day: "2-digit",
    month: "short",
  };

  return nuevaFecha.toLocaleDateString("en-US", opciones);
};