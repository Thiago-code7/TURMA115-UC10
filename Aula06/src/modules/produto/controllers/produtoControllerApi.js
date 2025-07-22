const produtoModel = require('../models/produtoModel');

class ProdutoControlerApi{
    static async criarProduto(req, res){     
        try {
            const {nome, preco, estoque} = req.body; 
            const produto = await produtoModel.create({nome, preco, estoque});
            res.status(201).json({msg:'produto criado com sucesso!', produto});
            
             
        } catch (error) {
            res.status(500).json({msg: 'Erro interno',error: error.message});
        }

    }

}

module.exports = ProdutoControlerApi;