import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct, Id, AllProducts } from '../interfaces';
import connection from './connection';

const getAllProducts = async (): Promise<AllProducts[]> => {
  const [rows] = await connection.execute<AllProducts[] & RowDataPacket[]>(
    `
      SELECT * FROM Trybesmith.products;
        `,
  );
  return rows;
};

const createProduct = async (product: IProduct): Promise<IProduct & Id> => {
  const { name, amount } = product;
  
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    `
      INSERT INTO Trybesmith.products (name, amount)
      VALUES (?, ?);
    `,
    [name, amount],
  );
  return { id, name, amount };
};

const productModel = { createProduct, getAllProducts };

export default productModel;