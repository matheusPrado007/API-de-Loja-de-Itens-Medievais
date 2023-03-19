import express from 'express';
import { getAll } from '../controllers/ordersController';

const routeOrders = express.Router();

routeOrders.get('/', getAll);

export default routeOrders;
