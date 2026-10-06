import express from "express";
import veiculoRouter from "./routes/veiculos.route.js";

const app = express();

app.use(express.json());

app.use("/veiculos", veiculoRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});