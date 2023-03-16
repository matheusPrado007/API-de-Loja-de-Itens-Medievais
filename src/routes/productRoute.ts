import express from 'express';
import { createProducts, getAllProducts } from '../controllers/productsController';

const routeProducts = express.Router();

routeProducts.post('/', createProducts);
routeProducts.get('/', getAllProducts);

export default routeProducts;
