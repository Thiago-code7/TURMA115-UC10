const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.post('/', livroController.criar);
router.get('/', livroController.listar);
router.get('/busca', livroController.buscarPorTitulo);
router.get('/:id', livroController.buscarPorId);
router.put('/:id', livroController.atualizar);
router.delete('/:id', livroController.deletar);


module.exports = router;

