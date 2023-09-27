import { Button } from "@/components/ui/button";
import React from "react";
import tw from "twin.macro";
const Wrapper = tw.div`w-full flex justify-center items-center  bg-white  shadow-lg drop-shadow-sm`;
const Container = tw.div`w-full max-w-screen-xl flex flex-col gap-4  p-2 md:px-12 md:py-4 `;
const OrderHeader = () => {
  return (
    <Wrapper>
      <Container>
        <p tw="text-neutral-600">
          Orders &gt; <span tw="underline">Order 32457ABC</span>
        </p>
        <div tw="flex justify-between items-center">
          <h3 tw="font-bold text-xl ">Order 32457ABC</h3>
          <div tw=" flex items-center justify-center gap-4">
            <Button variant={"outline"}>Back</Button>
            <Button>Approve Order</Button>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default OrderHeader;
