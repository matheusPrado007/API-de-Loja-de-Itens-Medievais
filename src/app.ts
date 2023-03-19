import express from 'express';
import routeUsers from './routes/usersRoute';
import routeProducts from './routes/productRoute';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);
app.use('/users', routeUsers);

export default app;
