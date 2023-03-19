import { Request, Response } from 'express';
import { getAllOrders } from '../services/ordersService';

const OK = 200;

export const getAll = async (req: Request, res: Response) => {
  const orders = await getAllOrders();
  return res.status(OK).json(orders);
};

export const create = async () => {
    
};
