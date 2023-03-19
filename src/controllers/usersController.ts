import { Request, Response } from 'express';
import { AllUsers } from '../interfaces';
import { createUser } from '../services/usersService';

const CREATED = 201;
// const OK = 200;

export const getAllProducts = async () => {

};

export const create = async (
  req: Request<object, object, AllUsers>, 
  res: Response,
) => {
  const { body } = req;
  const token = await createUser(body);

  return res.status(CREATED).json({ token });
};