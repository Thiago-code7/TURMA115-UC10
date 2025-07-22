const express = require('express');
const produtoControllerApi = require('../controllers/produtoControllerApi');
const router = express.Router();

router.post('/', produtoControllerApi.criarProduto);






module.exports = router;