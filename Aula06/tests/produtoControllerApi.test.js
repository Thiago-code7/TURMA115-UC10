const Produto = require('../src/modules/produto/models/produtoModel');
const { sequelize } = require('../src/config/configDB');
const app = require('../index');
const request = require('supertest');

beforeAll(async () => {
    await sequelize.sync({ force: true })
})
afterAll(async () => {
    await sequelize.close();
})

// afterEach(async ()=>{
//    // Truncate the table
//     await Produto.truncate();
// })

describe('Testes de integração - Produto', ()=>{
    test('POST /produtos', async ()=>{
        const res = await request(app).post('/produtos').send({nome: 'Feijão', preco: 3.70, estoque: 30})
        expect(res.status).toBe(201);
        expect(res.body.produto).toHaveProperty('cod_prod');
        expect(res.body.produto.nome).toBe('Feijão');
    })
})