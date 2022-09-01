// import jwtDecode from "jwt-decode";
import axios from "axios";
import React from "react";
// import { useDispatch } from "react-redux";
// import { loadUserAction } from "../../../Store/Actions/userActions";
// import { store } from "../../../Store/store";

export default function Profile() {
  axios
    .get("/user/profile")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  //   const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.alerts);

  //   useEffect(() => {
  //     dispatch(loadUserAction());
  //   }, []);

  return (
    <div>
      <h1 className="text-2xl text-blue-800 text-center">Profile</h1>
    </div>
  );
}
