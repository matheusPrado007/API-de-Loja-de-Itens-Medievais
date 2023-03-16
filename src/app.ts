import express from 'express';
import routeProducts from './routes/productRoute';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);

export default app;
