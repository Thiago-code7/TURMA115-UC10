const produtoModel = require('../models/produtoModel');

class ProdutoController {

    static async criarProduto(dados) {
        const { nome, preco, estoque } = dados.body;
     
        if (!nome || !preco || preco===0 || !estoque || estoque===0) {
            throw new Error('Todos os campos devem ser preenchidos');
        }
        if (typeof nome !== 'string') {
            throw new Error('Nome inválido');
        }
        if (typeof preco !== 'number' || preco<0) {
            throw new Error('Preço inválido');
        }
        if (typeof estoque !== 'number' || estoque<0) {
            throw new Error('Estoque inválido');
        }
        return await produtoModel.create({ nome, preco, estoque });
    }


}

module.exports = ProdutoController;




/*class ProdutoController {

    static async criar(req, res) {
        try {
            const { nome, preco, estoque } = req.body;

            if (nome && preco && estoque) {
                const produto = produtoModel.create({ nome, preco, estoque });
                res.status(201).json({ mensagem: 'Aluno cadastrado com sucesso', aluno })
            } else {
                res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos' })
            }
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }



        return produto
    }
    static async criarProduto(dados) {
        const { nome, preco, estoque } = dados.body;
        if (!nome || !preco || !estoque) {
            throw new Error('Todos os campos devem ser preenchidos');
        }
        return await produtoModel.create({ nome, preco, estoque });
    }


}*/
