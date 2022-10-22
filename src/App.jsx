import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Dashboard/common/Profile/Profile";
// import Loader from "./common/Loader/loader";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import ClassRequest from "./components/Dashboard/Student/ClassRequest/ClassRequest";
import Classroom from "./components/Dashboard/Student/Classroom/Classroom";
import Lessons from "./components/Dashboard/Student/Lessons/Lessons";
import PaymentInfo from "./components/Dashboard/Student/PaymentInfo/PaymentInfo";
import SavedCourses from "./components/Dashboard/Student/SavedCourses/SavedCourses";
import SessionRoom from "./components/Dashboard/Student/SessionRoom/SessionRoom";
import AllCourses from "./components/Dashboard/Teacher/AllCourses/AllCourses";
import AllTeacher from "./components/Dashboard/Teacher/AllTeacher/AllTeacher";
import ClassScheduling from "./components/Dashboard/Teacher/ClassScheduling/ClassScheduling";
import CourseDetails from "./components/Dashboard/Teacher/CourseDetails/CourseDetails";
import CreateCourse from "./components/Dashboard/Teacher/CreateCourse/CreateCourse";
import LiveClass from "./components/Dashboard/Teacher/LiveClass/LiveClass";
import LiveStream from "./components/Dashboard/Teacher/LiveStream/LiveStream";
import RequestedClasses from "./components/Dashboard/Teacher/RequestedClasses/RequestedClasses";
// import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";
import Signup from "./components/pages/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  // const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.alerts);

  // const { user } = useSelector((state) => state.user);
  // const teacher = user.role === "teacher";
  // const student = user.role === "student";
  // const admin = user.role === "admin";

  // console.log(admin);

  return (
    <div className="App">
      <BrowserRouter>
        {/* {loading ? <Loader /> : null} */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="live-stream" element={<LiveStream />} />
            <Route index path="session-room" element={<SessionRoom />} />
            <Route path="reqclassfeed" element={<RequestedClasses />} />
            <Route path="lessons" element={<Lessons />} />
            <Route path="teachers" element={<AllTeacher />} />
            <Route path="classScheduling" element={<ClassScheduling />} />
            <Route path="classroom" element={<Classroom />} />
            <Route path="create-course" element={<CreateCourse />} />
            <Route path="liveclass" element={<LiveClass />} />
            <Route path="class-requests" element={<ClassRequest />} />
            <Route path="saved-courses" element={<SavedCourses />} />
            <Route path="payment-info" element={<PaymentInfo />} />
            <Route path="courses" element={<AllCourses />}>
              <Route path=":id" element={<CourseDetails />} />
            </Route>
            <Route path="savedCourses" element={<SavedCourses />} />
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
