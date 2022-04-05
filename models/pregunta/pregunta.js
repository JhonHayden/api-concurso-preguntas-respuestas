import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Esquema de la coleccion Ronda
const preguntaSchema = new Schema(
  {
    enunciado: {
      type: String,
      required: true,
    },
    respuesta: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

// modelo Pregunta
const preguntaModel = model("Pregunta", preguntaSchema, "Pregunta");
export { preguntaModel };
