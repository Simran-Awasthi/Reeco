import React from "react";
import { LuApple, LuAtom, LuBanana, LuBoomBox } from "react-icons/lu";
import tw from "twin.macro";
const Container = tw.div`w-full h-full grid grid-cols-6 px-8 py-6 rounded-md border items-start  bg-white  divide-x-2 gap-0  border-gray-300  `;
const Col = tw.div`w-full h-full flex flex-col items-start justify-start px-2 gap-2 not-first:pl-6 `;
const Title = tw.p` font-semibold text-gray-500 p-0 m-0`;
const Description = tw.p` font-bold text-lg p-0 m-0`;
const OrderInfoTile = () => {
  return (
    <Container>
      <Col>
        <Title tw="text-lg">Supplier</Title>
        <Description>East coast fruits & vegitable</Description>
      </Col>
      <Col>
        <Title>Shipping </Title>
        <Description>Thu, Feb 10</Description>
      </Col>
      <Col>
        <Title>Total</Title>
        <Description> $ 15028.3</Description>
      </Col>
      <Col>
        <Title>Category</Title>
        <div tw=" w-full gap-y-2 grid grid-cols-4">
          <LuBanana />
          <LuAtom />
          <LuApple />

          <LuBoomBox />

          <LuBanana />
          <LuAtom />
          <LuApple />

          <LuBoomBox />
        </div>
      </Col>
      <Col>
        <Title>Department</Title>
        <Description>300-400-678</Description>
      </Col>
      <Col>
        <Title>Status</Title>
        <Description>Awaiting your approval</Description>
      </Col>
    </Container>
  );
};

export default OrderInfoTile;
