import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import { createProduct } from '../services/productService';

const CREATED = 201;

export const getAllProducts = () => {
  
};

export const createProducts = async (
  req: Request<object, object, IProduct>, 
  res: Response,
) => {
  const { body } = req;
  const newProduct = await createProduct(body);
  return res.status(CREATED).json(newProduct);
};
