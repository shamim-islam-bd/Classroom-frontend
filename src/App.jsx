import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import ClassRequest from "./components/Dashboard/Student/ClassRequest/ClassRequest";
import Classroom from "./components/Dashboard/Student/Classroom/Classroom";
import Lessons from "./components/Dashboard/Student/Lessons/Lessons";
import PaymentInfo from "./components/Dashboard/Student/PaymentInfo/PaymentInfo";
import AllCourses from "./components/Dashboard/Teacher/AllCourses/AllCourses";
import CourseDetails from "./components/Dashboard/Teacher/CourseDetails/CourseDetails";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";
import Signup from "./components/pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

        <Routes>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<AllCourses />}></Route>
            <Route path=":id" element={<CourseDetails />} />
            <Route path="classroom" element={<Classroom />} />
            <Route path="lessons" element={<Lessons />} />
            <Route path="class-requests" element={<ClassRequest />} />
            <Route path="payments" element={<PaymentInfo />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
