import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";

import { LuX } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentItem, updateOrderItem } from "../reducers/orderReducer";
import { trancatedString } from "@/lib/utils";

interface MissingItemDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MissingItemDialog = (props: MissingItemDialogProps) => {
  const orderState = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  return (
    <AlertDialog open={props.open} onOpenChange={props.onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="w-full  flex justify-between  items-center">
            Missing Product
            <Button
              variant={"ghost"}
              size="icon"
              onClick={() => props.onOpenChange(false)}
            >
              <LuX />
            </Button>
          </AlertDialogTitle>

          <AlertDialogDescription>
            is '{trancatedString(orderState.currentItem?.name || "", 30)}'
            urgent?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className=" border-0 text-neutral-800"
            onClick={() => {
              dispatch(
                updateOrderItem({
                  id: orderState.currentItem?.id || "",
                  data: {
                    status: "missing",
                  },
                })
              );
              dispatch(setCurrentItem(undefined));
            }}
          >
            No
          </AlertDialogCancel>
          <AlertDialogAction
            className=" border-0 text-neutral-800 bg-white hover:bg-neutral-200"
            onClick={() => {
              dispatch(
                updateOrderItem({
                  id: orderState.currentItem?.id || "",
                  data: {
                    status: "missing-urgent",
                  },
                })
              );
              dispatch(setCurrentItem(undefined));
            }}
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MissingItemDialog;
