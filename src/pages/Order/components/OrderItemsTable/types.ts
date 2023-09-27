
export type OrderItem = {
    id: string;
    productImg: string;
    name: string;
    brand: string;
    price: number;
    quantity: number;
    total: number; 
    status?: OrderItemStatus;
  };
  export type OrderItemStatus =  "approved"
  | "missing"
  | "missing-urgent"
  | "price-updated"
  | "quantity-updated"
  | "price-quantity-updated";