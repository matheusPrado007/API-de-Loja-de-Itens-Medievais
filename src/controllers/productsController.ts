import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import { createProduct, getAll } from '../services/productService';

const CREATED = 201;
const OK = 200;

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getAll();
  return res.status(OK).json(products);
};

export const createProducts = async (
  req: Request<object, object, IProduct>, 
  res: Response,
) => {
  const { body } = req;
  const newProduct = await createProduct(body);
  return res.status(CREATED).json(newProduct);
};
