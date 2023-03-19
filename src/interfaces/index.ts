export interface IProduct {
  name: string;
  amount: string;
}

export interface Id {
  id: number,
}

export interface AllProducts {
  id?: number,
  name: string;
  amount: string;
  orderId?: number
}

export interface AllUsers {
  username: string;
  vocation: string;
  level: number;
  password: string;
}
