import express from 'express';
import routeUsers from './routes/usersRoute';
import routeProducts from './routes/productRoute';
import routeOrders from './routes/ordersRoute';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);
app.use('/users', routeUsers);
app.use('/orders', routeOrders);

export default app;
