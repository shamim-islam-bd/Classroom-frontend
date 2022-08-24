import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/" element={<Login />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/*  <Route path="/wishlist" element={<WishList />} /> */}
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
