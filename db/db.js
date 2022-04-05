import mongoose from "mongoose";
const conectarBD = async () => {
  return await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Conexion exitosa a la base de datos de mongoDB");
    })
    .catch((error) => {
      console.error("Error conectado a la BD", error);
    });
};
export default conectarBD;
