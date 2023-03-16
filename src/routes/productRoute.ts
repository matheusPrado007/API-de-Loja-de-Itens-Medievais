import express from 'express';
import { createProducts } from '../controllers/productsController';

const routeProducts = express.Router();

routeProducts.post('/', createProducts);

export default routeProducts;
