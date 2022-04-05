import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Esquema de la coleccion Categoria
const categoriaSchema = new Schema(
  {
    dificultad: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

// modelo Categoria
const categoriaModel = model("Categoria", categoriaSchema, "Categoria");
export { categoriaModel };
