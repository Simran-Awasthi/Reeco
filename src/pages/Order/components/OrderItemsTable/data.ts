import { v4 } from "uuid";
import { OrderItem } from "./types";
import AvocadoImg from "@/assets/Avocado Hass.jpg";
export const data: OrderItem[] = [...Array(10)].map(() => ({
  id: v4(),
  productImg: AvocadoImg,
  name: "Chicken Breast Filltes, Bonless matuuma Marinted 6 ounce Raw, Invivid",
  brand: "Hormel Black Labelmany",
  price: 60.67,
  quantity: 1,
  total: 60.67,
}));
