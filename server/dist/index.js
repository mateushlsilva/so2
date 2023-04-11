"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const routes_1 = require("./routes");
dotenv.config();
// cria o servidor e coloca na variável app
const app = express();
// suporta parâmetros JSON no body da requisição
app.use(express.json());
const PORT = process.env.PORT || 3001;
// inicializa o servidor na porta especificada
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
// define a rota para o pacote /routes
app.use(routes_1.default);
