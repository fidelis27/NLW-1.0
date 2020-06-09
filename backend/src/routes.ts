import express from 'express';
import multer from 'multer';
import itemsController from './controllers/itemsController';
import pointsController from './controllers/pointsController';

import multerConfig from './config/multer';

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/items', itemsController.index);
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image') ,pointsController.create);

export default routes;
