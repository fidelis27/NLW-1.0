import { Request, Response } from 'express';
import knex from '../database/connection';

export default {
  async index(req: Request, res: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `https://server-ecoleta-nodejs.herokuapp.com/uploads/${item.image}`,
      };
    });

    return res.json(serializedItems);
  },
  async show(req: Request, res: Response) {
    const { point_id } = req.params;

    const point = await knex('points').where('id', point_id).first();

    if (!point) {
      return res.status(400).json({ message: 'Point not found' });
    }

    const items = await knex('items')
      .join('points_items', 'items.id', '=', 'points_items.item_id')
      .where('points_items.point_id', point_id)
      .select('items.*');

      const serializedItems = items.map(item => {
        return {
          id: item.id,
          title: item.title,
          image_url: `https://server-ecoleta-nodejs.herokuapp.com/uploads/${item.image}`,
        };
      });

    return res.json(serializedItems);
  }
};
