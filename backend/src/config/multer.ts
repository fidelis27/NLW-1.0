import multer from 'multer';
/*  import { resolve } from 'path'; */

export default {
  storage: multer.memoryStorage(),
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
