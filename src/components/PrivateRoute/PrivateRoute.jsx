import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log("From Private Route: ", user, isAuthenticated);

  //   const getCookie = cookie.get("token");
  //   console.log(getCookie);

  // const navigate = useNavigate();
  // geting browser cookies and spilit them by 'token=' and getting the token
  //   const token = document.cookie.split("token=")[1];
  const token = document.cookie;
  console.log(token);

  if (token && isAuthenticated === true) {
    return children;
  }
  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }
}

export default PrivateRoute;
