import { Request, Response } from 'express';
import stream from 'stream';
import knex from '../database/connection';
import 'dotenv/config';

export default {
  async index(req: Request, res: Response) {
    await knex('files')
      .where({ name: req.params.point_image })
      .first()
      .then(file => {
        const { data } = file;

        const fileContents = Buffer.from(data, 'base64');
        const readStream = new stream.PassThrough();
        readStream.end(fileContents);

        // função que disponbiliza a imagem como donwload
        /* res.set('Content-disposition', `attachment; filename=${file.name}`);
        res.set('Content-Type', file.type); */

        readStream.pipe(res);
      })
      .catch(err => {
        console.log(err);
        res.json({ msg: 'Error', detail: err });
      });
  },
};
