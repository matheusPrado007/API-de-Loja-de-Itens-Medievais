import jwt, { SignOptions } from 'jsonwebtoken';
import { AllUsers } from '../interfaces';

const secret = process.env.JWT_SECRET || 'Strogonoff';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '15min',
};

const createToken = (data: AllUsers) => jwt.sign({ data }, secret, JWT_CONFIG);

// const verifyToken = (token) => jwt.verify(token, secret);

const token = { createToken };

export default token;