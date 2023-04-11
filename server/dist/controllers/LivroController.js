"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Livros_1 = require("../entities/Livros");
class LivroController {
    getHistoricLivro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const LivroRepository = data_source_1.default.getRepository(Livros_1.Livros);
            const allLivro = yield LivroRepository.find();
            console.log(allLivro);
            return res.json(allLivro);
        });
    }
    getLivro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idLivro = req.params.uuid;
            const LivroRepository = data_source_1.default.getRepository(Livros_1.Livros);
            const allLivro = yield LivroRepository.findOneBy({ id: idLivro });
            return res.json(allLivro);
        });
    }
    postLivro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const createLivro = req.body;
            const LivroRepository = data_source_1.default.getRepository(Livros_1.Livros);
            const insertLivro = new Livros_1.Livros();
            insertLivro.nome = createLivro.nome;
            const allLivro = yield LivroRepository.save(insertLivro);
            return res.json(allLivro);
        });
    }
    putLivro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const createLivro = req.body;
            const idLivro = req.params.uuid;
            const LivroRepository = data_source_1.default.getRepository(Livros_1.Livros);
            const findLivro = yield LivroRepository.findOneBy({ id: idLivro });
            findLivro.nome = createLivro.nome;
            const allLivro = yield LivroRepository.save(findLivro);
            return res.json(allLivro);
        });
    }
    deleteLivro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idLivro = req.params.uuid;
            const LivroRepository = data_source_1.default.getRepository(Livros_1.Livros);
            const findLivro = yield LivroRepository.findOneBy({ id: idLivro });
            const allLivro = yield LivroRepository.remove(findLivro);
            return res.json(allLivro);
        });
    }
}
exports.default = new LivroController();
