import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Headers from "./common/Header/Headers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="dashMain/*" element={<DashMain />} /> 
         <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
