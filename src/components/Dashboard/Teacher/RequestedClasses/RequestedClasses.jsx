import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RequestedClasses() {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  useSelector((state) => console.log("From RqstClass Component: ", state));
//   const 

  // geting requested classes data from redux store useing axios
  axios
    .get("/students-Class-Request")
    .then((res) => {
      console.log("students-Class-Request: ", res.data);
      // dispatch(res.data);
      // setStudentClassRequest(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return <div className="mt-10">RequestedClasses</div>;
}
