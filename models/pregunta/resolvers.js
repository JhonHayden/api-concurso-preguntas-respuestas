import { preguntaModel } from "./pregunta.js";
const resolversPregunta = {
  Query: {
    // QUERYS PREGUNTA
    Preguntas: async (parent, args, context) => {
      const preguntas = await preguntaModel.find();
      return preguntas;
    },
    Pregunta: async (parent, args, context) => {
      const pregunta = await preguntaModel.find({ _id: args._id });
      return pregunta[0];
    },
  },

  Mutation: {
    // MUTATIONS DE PREGUNTA
    crearPregunta: async (parent, args, context) => {
      const preguntaCreada = await preguntaModel.create({
        enunciado: args.enunciado,
        respuesta: args.respuesta,
      });
      return preguntaCreada;
    },

    eliminarPregunta: async (parent, args) => {
      const preguntaEliminada = await preguntaModel.findOneAndDelete({
        _id: args._id,
      });
      return preguntaEliminada;
    },

    editarPregunta: async (parent, args, context) => {
      const preguntaEditada = await preguntaModel.findByIdAndUpdate(
        args._id,
        {
          enunciado: args.enunciado,
          respuesta: args.respuesta,
        },
        { new: true }
      );
      return preguntaEditada;
    },
  },
};
export { resolversPregunta };
