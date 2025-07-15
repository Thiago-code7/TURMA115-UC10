const produtoModel = require('../models/produtoModel');

class ProdutoController {

    static async criar(req, res) {
        try {
            const { nome, preco, estoque } = req.body;
            
            // Garante que a criação espera o resultado
            const produto = await produtoModel.create({ nome, preco, estoque });

            // Retorna status 201 com o produto criado
            return res.status(201).json(produto);
        } catch (error) {
            // Lida com erro, útil em produção/testes
            return res.status(500).json({ erro: 'Erro ao criar produto.' });
        }
    }
}

module.exports = ProdutoController;
