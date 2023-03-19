import { AllUsers } from '../interfaces';
import userModel from '../models/usersModel';
import token from '../auth/authFuctions';

export const getAll = async () => {

};

export const createUser = async (user: AllUsers) => {
  await userModel.createUsers(user);
  const tokenUser = token.createToken(user);
  return tokenUser;
};