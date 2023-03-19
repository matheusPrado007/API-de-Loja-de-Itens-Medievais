import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { AllUsers, AllProducts } from '../interfaces';
import connection from './connection';

const getAllUsers = async (): Promise<AllProducts[]> => {
  const [rows] = await connection.execute<AllProducts[] & RowDataPacket[]>(
    `
      SELECT * FROM Trybesmith.users;
        `,
  );
  return rows;
};

const createUsers = async (user: AllUsers): Promise<AllUsers> => {
  const { username, vocation, level, password } = user;
  
  await connection.execute<ResultSetHeader>(
    `
      INSERT INTO Trybesmith.users (username, vocation, level, password)
      VALUES (?, ?, ?, ?);
    `,
    [username, vocation, level, password],
  );
  return { username, vocation, level, password };
};

const userModel = { createUsers, getAllUsers };

export default userModel;