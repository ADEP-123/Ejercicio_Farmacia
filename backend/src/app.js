import express from "express";
import categoriaRoutes from './routes/categorias.routes.js'
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/merCitas",categoriaRoutes)

export default appExpress