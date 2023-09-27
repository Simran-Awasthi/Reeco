import { Button } from "@/components/ui/button";
import React from "react";
import tw from "twin.macro";
import { LuPrinter, LuSearch } from "react-icons/lu";
import OrderItemsTable from "./OrderItemsTable";
const Container = tw.div`w-full bg-white flex flex-col justify-center items-center rounded-md border border-gray-300 px-8 py-6`;
const Row = tw.div` flex items-center gap-4`;
const OrderItemsView = () => {
  return (
    <Container>
      <Row tw="w-full  justify-between">
        <Row tw="w-full max-w-md border border-gray-300   justify-between rounded-full px-4 py-2 gap-2">
          <input
            type="text"
            tw="w-full outline-none border-none"
            placeholder="Search..."
          />
          <LuSearch />
        </Row>
        <Row>
          <Button variant={"outline"} tw="">
            Add item
          </Button>
          <Button size={"icon"} variant={"ghost"} tw="text-green-700">
            <LuPrinter tw="text-2xl" />
          </Button>
        </Row>
      </Row>
      <OrderItemsTable />
    </Container>
  );
};

export default OrderItemsView;
