import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AllCourses from "./components/Dashboard/AllCourses/AllCourses";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import ClassRequest from "./components/Dashboard/Student/ClassRequest/ClassRequest";
import Classroom from "./components/Dashboard/Student/Classroom/Classroom";
import Lessons from "./components/Dashboard/Student/Lessons/Lessons";
import PaymentInfo from "./components/Dashboard/Student/PaymentInfo/PaymentInfo";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";
import Signup from "./components/pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />
        <ToastContainer />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/*  <Route path="/wishlist" element={<WishList />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Routes>
          <Route path="dashboard" element={<Dashboard />}>

            <Route index element={<AllCourses />} />
            <Route path="classroom" element={<Classroom />} />
            <Route path="lessons" element={<Lessons />} />
            <Route path="class-requests" element={<ClassRequest />} />
            <Route path="payments" element={<PaymentInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
