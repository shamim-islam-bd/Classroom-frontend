import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllStudentClassRequest } from "../../../../Store/Actions/StudentClassReqAction";

export default function RequestedClasses() {
  const navigate = useNavigate();
  const  dispatch = useDispatch();
  useSelector((state) => console.log("From RqstClass Component: ", state));


//   axios.get('')


  useEffect(() => {
     dispatch(getAllStudentClassRequest())
  }, []);

  return <div className="mt-10">RequestedClasses</div>;
}
