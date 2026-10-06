import { pool } from "../config/db.js";

class VeiculoService {

    async listarVeiculos() {
        const result = await pool.query(
            "SELECT * FROM veiculos"
        );

        return result.rows;
    }

    async cadastrarVeiculo(modelo, marca, ano, placa) {
        const result = await pool.query(
            `INSERT INTO veiculos (modelo, marca, ano, placa)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [modelo, marca, ano, placa]
        );

        return result.rows[0];
    }
}

export const veiculoService = new VeiculoService();