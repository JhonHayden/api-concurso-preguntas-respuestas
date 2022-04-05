import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Esquema de la coleccion Jugador
const jugadorSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

// modelo Jugador
const jugadorModel = model("Jugador", jugadorSchema, "Jugador");
export { jugadorModel };
