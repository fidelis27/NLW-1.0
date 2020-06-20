"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
/*  import { resolve } from 'path'; */
exports.default = {
    storage: multer_1.default.memoryStorage(),
};
// função que armazena imagem no diretório raiz da aplicação
/* export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'temp'),
    filename(req, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');

      const fileName = `${hash}-${file.originalname}`;
      callback(null, fileName);
    },
  }),
}; */
