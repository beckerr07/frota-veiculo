import { Router } from "express";
import { veiculoService } from "../service/veiculo.service.js";

const veiculoRouter = Router();

veiculoRouter.get("/", async (req, res) => {
    try {
        const veiculos = await veiculoService.listarVeiculos();

        res.json(veiculos);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            erro: "Erro ao buscar veículos"
        });
    }
});

veiculoRouter.post("/", async (req, res) => {
    try {
        const { modelo, marca, ano, placa } = req.body;

        const veiculo = await veiculoService.cadastrarVeiculo(
            modelo,
            marca,
            ano,
            placa
        );

        res.status(201).json(veiculo);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            erro: "Erro ao cadastrar veículo"
        });
    }
});

export default veiculoRouter;