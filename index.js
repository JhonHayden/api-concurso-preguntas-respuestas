import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import conectarBD from "./db/db.js";
import { tipos } from "./graphql/types.js"; // para usar mis tipos o modelos definidos de mis colecciones en graphql
import { resolvers } from "./graphql/resolvers.js";

//CONFIGURACIONES DEL SERVIDOR DE EXPRESS (app) Y EL SERVIDOR DE GRAPHQL(server)

dotenv.config(); // me permite usar las variables de entorno en toda la aplicaciòn

const server = new ApolloServer({
  // definicion, declaracion e instancia de un servidor de graphQL

  // propiedades del server
  typeDefs: tipos, // tipos ... definiciones de los tipos de nuestros modelos de las colecciones
  // definiciones de nuestros modelos // le paso los typeDfes del archivo types.ts de la carpeta graphql
  resolvers: resolvers, // le paso resolvers del archivo resolver.ts de la carpeta graphql

  // el desarrollo de graphQL se basa en estas dos primera dos  propiedades, en su definicion

  // el req   del context es el request desde el frontend de el extraeremos el token embebido en los headers
  // tiene que llamarse req obligatoriamente no se puede definir con otro nombre sale error no deja
  context: ({ req }) => {
    // propiedad que me permite ejecutar una funcion cada vez que se hace una request desde el frontend
    // al ApolloServer .. es decir si le hacen una peticion esta funcion se ejecuta con esto
    // podemos verificar el token siempre que el frontend haga una request

    const tokenConBearer = req.headers?.authorization ?? null; // expresion de si no hay la palabra authorization en
    // el request ponga null

    if (tokenConBearer) {
      // validacion si existe el token esto para poder conetarme con el explorer de apollo studio dado que
      // apollos studio no me envia token entonces entra en error si no valido esto y solome quedo esperando token si dejar la otra
      // opcion de conectarme en el caso de que no haya token si hay token me conecto igual y si no tambien pues retorno un null en el
      // context

      // console.log('Token mas el Bearer: ',req.headers.authorization);// contiene el token = req.headers.authorization
      // console.log('request.headers.authorization: ', req);

      const userData = getUserData(tokenConBearer); // me permite ejecutar la validacion del token y extraer la informacion del jugador y asignarla
      // a userData para luego retornar.. userData es mi contexto para toda la aplicacion

      if (userData) {
        console.log("jugador que inicio sesion: ", userData);
        return { userData }; // variable que retorna el callback del context de ApolloServer y es la variable que
        // podre usar en toda la aplicacion es como una variable global y esta contiene la informacion del jugador que
        // acaba de iniciar sesion con esta podemos restrigir request dependiento del rol del jugador si le consultamos a esta variable
        // el atributo rol que contiene
        // userData es un objeto y asi tengo que retornar objetos --> return { objeto }

        // para acceder a ella es simple en los resolver, el tercer input de la arrow funcion async, se llama ese input como context
        // y es esta variable global
        // ejemplo :  validateToken: async (parent, args, context) => {  context es la variable global por context entra los datos
        //     de userData que  el payload la informacion del jugador que acaba de iniciar sesion
      } else {
        console.log(
          "no tiene el token permitido,  userData  es igual a: ",
          userData
        );
      }
    }

    return null; // retorno null cuando no hay token eso sucede cuando me conect con un cliente de apollo studio entonces debo
    // retornar null en el context para asi poder conectarme con el cliente de apollo studio
  },
});

const app = express(); // definicione de la aplicacion de express

// uso de Middleware
app.use(express.json()); // permite que los request sean en formato json

app.use(cors()); // me permite hacer request de muchos origenes

// usaremos el servidor de Express para encender el servidor de graphql
app.listen({ port: process.env.PORT || 4000 }, async () => {
  // corre el servidor, prende el servidor de Express (app)
  //process.env.PORT:  me permite usar la varible de entorno del puerto es decir me trae el valor de la variable
  // definida como PORT del archivo .env.  si no encuentra este valor ya pone la otra opcion de la logica or el numero 4000
  await conectarBD(); // conexion a la bases de datos de mongoDB
  await server.start(); // corre, prende, enciende e inicia el servidor de graphQL, este
  // servidor nos permite generar la ruta para todos los request del front
  server.applyMiddleware({ app }); // permite usar al servidor de grahpQL (server), los middlewares mismos
  //  del servidor de express (app), es decir los mismos middlewares que defina para el servidor
  // de express (app) los usa el servidor de graphql (server)
  console.log("Servidor de graphQL listo");
});
