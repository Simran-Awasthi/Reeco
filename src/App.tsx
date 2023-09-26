import Navbar from "@/components/Navbar";
import Order from "@/pages/Order";
import tw from "twin.macro";

function App() {
  return (
    <div tw="w-full h-full bg-gray-50 min-h-screen">
      <Navbar />
      <Order />
    </div>
  );
}

export default App;
