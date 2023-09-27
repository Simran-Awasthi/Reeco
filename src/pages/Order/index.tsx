import tw from "twin.macro";
import OrderHeader from "./components/OrderHeader";
import OrderInfoTile from "./components/OrderInfoTile";
import OrderItemsView from "./components/OrderItemsView";
import Navbar from "@/components/Navbar";

const Order = () => {
  return (
    <div tw="w-full h-full flex flex-col items-center justify-start">
      <Navbar />
      <OrderHeader />
      <div tw="w-full  flex  flex-col justify-start items-center px-8 overflow-y-auto ">
        <div tw="w-full h-full max-w-screen-xl flex flex-col  justify-start items-center px-4 md:px-10 py-8 gap-4 ">
          <OrderInfoTile />
          <OrderItemsView />
        </div>
      </div>
    </div>
  );
};

export default Order;
