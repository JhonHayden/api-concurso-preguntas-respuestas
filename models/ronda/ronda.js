import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Esquema de la coleccion Ronda
const rondaSchema = new Schema(
  {
    dificultad: {
      type: String,
      required: true,
    },
    premio: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

// modelo Ronda
const rondaModel = model("Ronda", rondaSchema, "Ronda");
export { rondaModel };
