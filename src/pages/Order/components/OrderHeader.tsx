import { Button } from "@/components/ui/button";
import React from "react";
import tw from "twin.macro";
const Container = tw.div`w-full flex flex-col bg-white gap-4  p-2 md:px-10 md:py-4 shadow-lg drop-shadow-sm`;
const OrderHeader = () => {
  return (
    <Container>
      <p tw="text-neutral-600">
        Orders &gt; <span tw="underline">Order 32457ABC</span>
      </p>
      <div tw="flex justify-between items-center">
        <h3 tw="font-bold text-xl ">Order 32457ABC</h3>
        <div tw=" flex items-center justify-center gap-4">
          <Button
            variant={"outline"}
            size={"sm"}
            tw="rounded-full border-green-700  text-green-700 px-4 "
          >
            Back
          </Button>
          <Button size={"sm"} tw="rounded-full bg-green-700 px-4 ">
            Approve Order
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default OrderHeader;
