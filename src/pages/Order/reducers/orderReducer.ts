import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  OrderItem,
  OrderItemStatus,
} from "../components/OrderItemsTable/types";
export type OrderDialogType = "edit-item" | "missing-item";
export interface OrderState {
  orderItems: OrderItem[];
  currentDailog?: OrderDialogType;
  currentItem?: OrderItem;
}

const initialState: OrderState = {
  orderItems: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCurrentDailog: (
      state,
      action: PayloadAction<OrderDialogType | undefined>
    ) => {
      state.currentDailog = action.payload;
    },
    setOrderItems: (state, action: PayloadAction<OrderItem[]>) => {
      state.orderItems = action.payload;
    },
    setCurrentItem: (state, action: PayloadAction<OrderItem | undefined>) => {
      state.currentItem = action.payload;
    },
    updateOrderItem: (
      state,
      action: PayloadAction<{ id: string; data: Partial<OrderItem> }>
    ) => {
      state.orderItems = state.orderItems.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            ...action.payload.data,
          };
        }
        return item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentDailog,
  setOrderItems,
  updateOrderItem,
  setCurrentItem,
} = orderSlice.actions;

export default orderSlice.reducer;
