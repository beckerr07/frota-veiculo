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

export default veiculoRouter;