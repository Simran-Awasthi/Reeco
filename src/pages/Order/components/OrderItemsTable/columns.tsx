import { ColumnDef } from "@tanstack/react-table";
import { OrderItem, OrderItemStatus } from "./types";
import tw from "twin.macro";
import { Button } from "@/components/ui/button";
import { LuCheck, LuX } from "react-icons/lu";
import { useDispatch } from "react-redux";
import {
  setCurrentItem,
  setCurrentDailog,
  updateOrderItem,
} from "../../reducers/orderReducer";
import { Badge } from "@/components/ui/badge";

const Action = tw.div`w-full min-w-max flex items-center justify-center`;
export const columns: ColumnDef<OrderItem>[] = [
  {
    accessorKey: "name",
    header: () => {
      return <span tw="pl-12">Product Name</span>;
    },
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div tw="flex gap-2 items-center">
          <img src={item.productImg} alt="" tw="w-10 h-10 object-contain" />
          <p>{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("brand")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <div tw="min-w-max"> ${row.getValue("price")} / 6 * 1LB</div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div tw="min-w-max text-neutral-400">
        <span tw="font-bold text-black">{row.getValue("quantity")} </span> x 6 *
        1LB
      </div>
    ),
  },

  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => <div>${row.getValue("total")} </div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div tw="w-[140px]">
          <StatusBadge status={row.original.status}></StatusBadge>
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const orderItem = row.original;
      const dispatch = useDispatch();
      return (
        <Action>
          <Button
            variant={"ghost"}
            size={"icon"}
            tw="text-lg"
            onClick={() =>
              dispatch(
                updateOrderItem({
                  id: orderItem.id,
                  data: { status: "approved" },
                })
              )
            }
          >
            <LuCheck />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            tw=" text-lg "
            onClick={() => {
              dispatch(setCurrentItem(orderItem));
              dispatch(setCurrentDailog("missing-item"));
            }}
          >
            <LuX />
          </Button>

          <Button
            variant={"ghost"}
            size={"sm"}
            tw="w-max py-0 "
            onClick={() => {
              dispatch(setCurrentItem(orderItem));
              setTimeout(() => dispatch(setCurrentDailog("edit-item")), 300);
            }}
          >
            <span> Edit</span>
          </Button>
        </Action>
      );
    },
  },
];
const StatusBadge = ({ status }: { status: OrderItemStatus | undefined }) => {
  switch (status) {
    case "approved":
      return <Badge tw=" bg-green-700">Approved</Badge>;
    case "missing":
      return <Badge tw="   bg-orange-500">Missing</Badge>;
    case "missing-urgent":
      return <Badge tw="  bg-red-700">Missing-Urgent</Badge>;
    case "price-updated":
      return <Badge tw="  bg-green-700">Price Updated</Badge>;
    case "quantity-updated":
      return <Badge tw="  bg-green-700">Quantity Updated</Badge>;
    case "price-quantity-updated":
      return <Badge tw="  bg-green-700">Price and Quantity updated</Badge>;
    default:
      return null;
  }
};
