import { useState } from "react";
import NavBar from "./Component/NavBar";
import ProductPage from "./Component/ProductPage";
import CartContextProvider from "./Contexts/CartContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartContextProvider>
      <div className="h-screen bg-slate-800">
        <NavBar />
        <ProductPage />
      </div>
    </CartContextProvider>
  );
}

export default App;
