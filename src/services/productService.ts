import { IProduct } from '../interfaces';
import productModel from '../models/productModel';

export const getAll = async () => {
  const products = await productModel.getAllProducts();
  return products;
};

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
};