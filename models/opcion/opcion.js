import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Esquema de la coleccion Opcion
const opcionSchema = new Schema(
  {
    enunciado: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

// modelo Opcion
const opcionModel = model("Opcion", opcionSchema, "Opcion");
export { opcionModel };
