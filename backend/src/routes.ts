import express from 'express';

import multer from 'multer';
import itemsController from './controllers/itemsController';
import pointsController from './controllers/pointsController';

import multerConfig from './config/multer';
import ValidatePoint from './ValidadePoint';

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/items', itemsController.index);
routes.get('/items/:point_id', itemsController.show);
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points',
 upload.single('image'),ValidatePoint,
 pointsController.create)
 ;

export default routes;
