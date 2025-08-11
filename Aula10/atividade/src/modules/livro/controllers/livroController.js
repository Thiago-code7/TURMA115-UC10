const LivroModel = require('../models/livroModel');
const generosLivros = [
    "Romance",
    "Ficção Científica",
    "Fantasia",
    "Mistério",
    "Suspense",
    "Terror",
    "Aventura",
    "Drama",
    "Histórico",
    "Biografia",
    "Autobiografia",
    "Poesia",
    "Humor",
    "Literatura Clássica",
    "Literatura Contemporânea",
    "Infantojuvenil",
    "Young Adult (YA)",
    "Distopia",
    "Realismo Mágico",
    "Crônicas",
    "Ensaios",
    "Autoajuda",
    "Espiritualidade",
    "Religião",
    "Filosofia",
    "Psicologia",
    "Ciências Sociais",
    "Política",
    "Economia",
    "Educação",
    "Tecnologia",
    "Negócios",
    "Direito",
    "Medicina",
    "Ecologia",
    "Viagens",
    "Gastronomia",
    "Arte",
    "Fotografia"
];
const sqlInjectionPattern = /^[a-zA-Z0-9À-ÿ.,:!?()\- \s]+$/i;

class LivroController {

    static async criar(req, res) {


        try {
            const { titulo, autor, ano_publicacao, genero, preco } = req.body

            if (!titulo || !autor || !ano_publicacao || !genero || !preco) {
                return res.status(400).json({ msg: "Todos os campos são obrigatórios" })
            }
            if (!Number.isInteger(ano_publicacao) || ano_publicacao < 1000 || ano_publicacao > new Date().getFullYear()) {
                return res.status(400).json({ msg: "Ano de publicação deve ser um número" })
            }
            if (preco <= 0) {
                return res.status(400).json({ msg: "Preço deve ser maior que zero" })
            }
            if (titulo.length < 2) {
                return res.status(400).json({ msg: "Título deve ter pelo menos 2 caracteres" })
            }
            if (!generosLivros.includes(genero)) {
                return res.status(400).json({ msg: "Gênero inválido" })
            }
            if (typeof preco !== 'number') {
                return res.status(400).json({ msg: "Preço deve ser um número" })
            }
            if (!sqlInjectionPattern.test(titulo)) {
                return res.status(400).json({ msg: "Título inválido" })
            }
            if (!sqlInjectionPattern.test(autor)) {
                return res.status(400).json({ msg: "Autor inválido" })
            }
            if (!sqlInjectionPattern.test(ano_publicacao)) {
                return res.status(400).json({ msg: "Ano de publicação deve ser um número" })
            }
            if (!sqlInjectionPattern.test(preco)) {
                return res.status(400).json({ msg: "Preço deve ser um número" })
            }
            const livro = await LivroModel.create({ titulo, autor, ano_publicacao, genero, preco })
            res.status(201).json({ msg: "Livro criado com sucesso", livro })
        } catch (error) {
            res.status(500).json({ msg: "Erro interno", error })
        }
    }

    static async listar(req, res) {
        try {
            const livros = await LivroModel.findAll();
            res.status(200).json(livros)

        } catch (error) {
            res.status(500).json({ msg: "Erro interno", error })
        }

    }
    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { titulo, autor, ano_publicacao, genero, preco } = req.body;
            if (
                !titulo || titulo.length < 2 ||
                !autor ||
                !Number.isInteger(ano_publicacao) || ano_publicacao < 1000 || ano_publicacao > new Date().getFullYear() ||
                !genero || !generosLivros.includes(genero) ||
                typeof preco !== 'number' || preco <= 0
            ) {
                return res.status(400).json({ msg: 'Dados inválidos para atualização' });
            }


            let livro = await LivroModel.findByPk(id);
            if (!livro) {
                return res.status(404).json({ msg: "Livro não encontrado" });
            }

            await LivroModel.update({ titulo, autor, ano_publicacao, genero, preco }, { where: { id } });
            livro = await LivroModel.findByPk(id);
            res.status(200).json({ msg: "Livro atualizado com sucesso", livro });
        } catch (error) {
            res.status(500).json({ msg: "Erro interno", error });
        }
    }
    static async deletar(req, res) {
        try {
            const { id } = req.params;
            const livro = await LivroModel.findByPk(id);

            if (!livro) {
                return res.status(404).json({ msg: "Livro não encontrado" });
            }

            await LivroModel.destroy({ where: { id } });
            res.status(200).json({ msg: "Livro deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ msg: "Erro interno", error });
        }
    }
    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const livro = await LivroModel.findByPk(id);

            if (!livro) {
                return res.status(404).json({ msg: "Livro não encontrado" });
            }

            return res.status(200).json({ msg: 'Livro encontrado', livro });
        } catch (error) {
            res.status(500).json({ msg: "Erro interno", error });
        }
    }
    static async buscarPorTitulo(req, res) {
        try {
            const { titulo } = req.query;

            if (!titulo) {
                return res.status(400).json({ mensagem: 'Parâmetro "titulo" é obrigatório' });
            }

            const livros = await LivroModel.findAll({
                where: {
                    titulo: {
                        [require('sequelize').Op.iLike]: `%${titulo}%`
                    }
                }
            });
            if (livros.length === 0) {
                return res.status(404).json({ msg: 'Livro não encontrado' });
            }
            return res.status(200).json({ msg: 'Livro encontrado', livros });
        } catch (erro) {
            return res.status(500).json({ msg: 'Erro na busca por título', erro: erro.message });
        }
    }





}

module.exports = LivroController;