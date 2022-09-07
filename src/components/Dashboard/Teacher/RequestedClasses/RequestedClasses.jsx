import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentClassRequest } from "../../../../Store/Actions/StudentClassReqAction";

export default function RequestedClasses() {
  const dispatch = useDispatch();

  const { AllStudentClassRequest, error } = useSelector(
    (state) => state.ClassReqByStudent
  );
  // console.log("frm req classes: ", AllStudentClassRequest);

  useEffect(() => {
    dispatch(getAllStudentClassRequest());
  }, [dispatch, error]);

  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold m-2">Requested Classes </h1>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4">
        {AllStudentClassRequest?.map((item) => (
          <div key={item._id} className="border p-4 m-1 shadow-sm">
            <h1>title : {item.title}</h1>
            <h1>Date : {item.date}</h1>
            <h1>status : {item.status}</h1>
            <h1>category : {item.category}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
