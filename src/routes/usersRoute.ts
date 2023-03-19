import express from 'express';
import { create } from '../controllers/usersController';

const routeUsers = express.Router();

routeUsers.post('/', create);

export default routeUsers;
