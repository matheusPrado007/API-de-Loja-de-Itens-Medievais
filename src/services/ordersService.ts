import { getAll } from '../models/ordersModel';
import { AllOrder } from '../interfaces';

export const getAllOrders = async (): Promise<AllOrder[]> => {
  const orders = await getAll();
  return orders;
};

export const createProduct = async () => {

};