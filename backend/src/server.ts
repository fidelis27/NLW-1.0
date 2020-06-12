import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')));
app.use('/temp', express.static(resolve(__dirname, '..', 'temp')));


app.use(errors())

app.listen(3333);
