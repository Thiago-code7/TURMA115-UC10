const Produto = require('../models/produtoModel');
const ProdutoControler = require('../controllers/produtoController');
const { sequelize } = require('../../../config/configDB');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Testes do Produto Controller', () => {
  test('Deve criar um produto no banco de dados', async () => {
    // Mock do req e res
    const req = {
      body: {
        nome: 'Feijão',
        preco: 4.90,
        estoque: 500
      }
    };

    // Mock do res
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await ProdutoControler.criar(req, res);

    // Verifica se status 201 foi enviado
    expect(res.status).toHaveBeenCalledWith(201);

    // Verifica se json foi chamado com o produto
    const produtoRetornado = res.json.mock.calls[0][0];
    expect(produtoRetornado).toHaveProperty('cod_prod');
    expect(produtoRetornado.nome).toBe('Feijão');
    expect(produtoRetornado.preco).toBe(4.90);
  });
});

