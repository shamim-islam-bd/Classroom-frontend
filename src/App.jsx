import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./common/Loader/loader";
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
import Profile from "./components/pages/Profile/Profile";
import Signup from "./components/pages/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// import store and currently login user.

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alerts);

  useSelector((state) => console.log("From App: ", state.user));

  // useEffect(() => {
  // store.dispatch(loadUserAction());
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {loading ? <Loader /> : null}

        {/* <Route path="/profile" element={<Profile />} /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="lessons" element={<Lessons />} />
            <Route path="courses" element={<AllCourses />} />
            <Route path=":id" element={<CourseDetails />} />
            <Route path="classroom" element={<Classroom />} />
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
