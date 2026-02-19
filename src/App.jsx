import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<div className="text-center mt-20 text-2xl">Page Not Found</div>} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
