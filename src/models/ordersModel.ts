import { RowDataPacket } from 'mysql2';
import { AllOrder } from '../interfaces';
import connection from './connection';

export const getAll = async (): Promise<AllOrder[]> => {
  const [rows] = await connection.execute<AllOrder[] & RowDataPacket[]>(
    `
    SELECT orders.id AS id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds 
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS products
    ON orders.id = products.order_id
    GROUP BY orders.id;
    `,
  );
  return rows;
};

export const createProduct = async () => {

};
