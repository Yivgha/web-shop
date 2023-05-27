import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home  from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import SelectedShop from "./components/Shop/SelectedShop";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="/" element={<Shop />}>
            <Route path="/:id" element={<SelectedShop />} />
            </Route>
        <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
