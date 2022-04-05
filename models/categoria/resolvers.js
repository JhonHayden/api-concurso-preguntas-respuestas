import { categoriaModel } from "./categoria.js";
const resolversCategoria = {
  Query: {
    // QUERYS CATEGORIA
    Categorias: async (parent, args, context) => {
      const categorias = await categoriaModel.find();
      return categorias;
    },
    Categoria: async (parent, args, context) => {
      const categoria = await categoriaModel.find({ _id: args._id });
      return categoria[0];
    },
  },

  Mutation: {
    // MUTATIONS DE CATEGORIA
    crearCategoria: async (parent, args, context) => {
      const categoriaCreada = await categoriaModel.create({
        dificultad: args.dificultad,
      });
      return categoriaCreada;
    },

    eliminarCategoria: async (parent, args) => {
      const categoriaEliminada = await categoriaModel.findOneAndDelete({
        _id: args._id,
      });
      return categoriaEliminada;
    },

    editarCategoria: async (parent, args, context) => {
      const categoriaEditada = await categoriaModel.findByIdAndUpdate(
        args._id,
        {
          dificultad: args.dificultad,
        },
        { new: true }
      );
      return categoriaEditada;
    },
  },
};
export { resolversCategoria };
