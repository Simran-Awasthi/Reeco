import React from "react";
import { LuShoppingCart, LuChevronDown } from "react-icons/lu";
import tw from "twin.macro";

const Nav = tw.nav`w-full  bg-green-700 text-white  flex justify-between items-center px-4  py-2 md:px-12`;
const Row = tw.div`flex justify-center items-center  `;
const Navbar = () => {
  return (
    <Nav>
      <Row tw=" gap-8">
        <span tw="font-pacifico  text-2xl">Reeco</span>
        <ul tw="flex  justify-center items-center gap-6">
          <li>Store</li>
          <li>Orders</li>
          <li>Analytics</li>
        </ul>
      </Row>
      <Row tw="gap-10">
        <span>
          <LuShoppingCart />
        </span>
        <p tw="flex items-center gap-2">
          Hello, James
          <span>
            <LuChevronDown />
          </span>
        </p>
      </Row>
    </Nav>
  );
};

export default Navbar;
