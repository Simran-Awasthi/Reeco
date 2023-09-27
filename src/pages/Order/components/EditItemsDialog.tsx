import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trancatedString } from "@/lib/utils";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "twin.macro";
import { OrderItem } from "./OrderItemsTable/types";
import {
  setCurrentDailog,
  setCurrentItem,
  updateOrderItem,
} from "../reducers/orderReducer";
import { Underline } from "lucide-react";
interface EditItemDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const EditItemDialog = (props: EditItemDialogProps) => {
  const orderState = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  const [editData, setEditData] = useState<Partial<OrderItem>>({
    price: orderState.currentItem?.price || 0,
    quantity: orderState.currentItem?.quantity || 0,
    total: orderState.currentItem?.total || 0,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData((data) => ({
      ...data,
      [e.target.id]: Number.parseFloat(e.target.value),
    }));
    setEditData((data) => ({
      ...data,
      total: (data.price || 0) * (data.quantity || 0),
    }));
  };

  const handleSubmit = () => {
    if (
      editData.price !== orderState.currentItem?.price &&
      editData.quantity !== orderState.currentItem?.quantity
    ) {
      dispatch(
        updateOrderItem({
          id: orderState.currentItem?.id || "",
          data: {
            status: "price-quantity-updated",
            price: editData.price,
            quantity: editData.quantity,
          },
        })
      );
    } else if (editData.price !== orderState.currentItem?.price) {
      dispatch(
        updateOrderItem({
          id: orderState.currentItem?.id || "",
          data: {
            status: "price-updated",
            price: editData.price,
          },
        })
      );
    } else if (editData.quantity !== orderState.currentItem?.quantity) {
      dispatch(
        updateOrderItem({
          id: orderState.currentItem?.id || "",
          data: {
            status: "quantity-updated",
            quantity: editData.quantity,
          },
        })
      );
    }
    dispatch(setCurrentItem(undefined));
    dispatch(setCurrentDailog(undefined));
  };
  useEffect(() => {
    setEditData({ ...orderState.currentItem });
  }, [orderState.currentItem]);
  if (!orderState.currentItem) {
    return null;
  }
  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent tw="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>
            {trancatedString(orderState.currentItem.name, 60)}
          </DialogTitle>
          <DialogDescription>{orderState.currentItem.brand}</DialogDescription>
        </DialogHeader>
        <div tw="w-full flex flex-row gap-4">
          <img
            src={orderState.currentItem.productImg}
            alt=""
            tw="h-40 w-40 object-contain"
          />
          <div tw=" w-full grid gap-3 py-4">
            <div tw=" w-full  grid grid-cols-2 items-center gap-4">
              <Label htmlFor="name">Price</Label>
              <Input
                id="price"
                value={editData.price}
                type="number"
                onChange={handleInputChange}
                min={0}
              />
            </div>
            <div tw=" w-full grid grid-cols-2 items-center gap-4">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                value={editData.quantity}
                onChange={handleInputChange}
                min={0}
              />
            </div>
            <div tw="w-full  grid grid-cols-2 items-center gap-4">
              <Label htmlFor="total">Total</Label>
              <Input
                id="total"
                type="number"
                min={0}
                value={editData.total}
                disabled
              />
            </div>
          </div>
        </div>
        <div tw="w-full flex flex-col gap-4 ">
          <p>
            Choose reason
            <span tw="text-gray-400">(Optional)</span>
          </p>
          <div tw="w-full flex flex-row justify-start items-center gap-4 ">
            <Badge variant={"outline"}>Missing-Product</Badge>
            <Badge variant={"outline"}>Quantity is not the same</Badge>
            <Badge variant={"outline"}>Price is not the same</Badge>
            <Badge variant={"outline"}>Other</Badge>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant={"ghost"}
            tw="text-green-700"
            onClick={() => dispatch(setCurrentDailog(undefined))}
          >
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default EditItemDialog;
