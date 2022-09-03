import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userReducer } from "../../Store/reducers/userReducer";

function PrivateRoute({ children }) {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // console.log("From Private Route: ", user, isAuthenticated);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const getUserProfile = async () => {
    try {
      const res = await axios.post("/user/profile", {
        // token: token,
        haeder: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        dispatch(userReducer(res.data.user));
      } else {
        return <Navigate to="/login" />;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // token from local storage and check if it is expired or not if expired then redirect to login page

  if (token) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default PrivateRoute;

// const token = document.cookie;
// console.log(token);
