import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllStudentclassRequest,
  updateStudentclassRequest,
} from "../../../../Store/Actions/StudentclassReqAction";

export default function Requestedclass() {
  const avader =
    "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360";
  const dispatch = useDispatch();

  const { AllStudentclassRequest, error } = useSelector(
    (state) => state.classReqByStudent
  );
  // console.log("frm req classNamees: ", AllStudentclassNameRequest);

  const { user, loading } = useSelector((state) => state.user.user);

  // get studentclassNameRequest id from redux store then teacher can make it update its status approved or rejected

  // useEffect(() => {
  //   dispatch(updateStudentclassNameRequest(id));
  // }, [dispatch, id]);

  //get All Student className Request from database and show it in teacher dashboard and store in redux store
  useEffect(() => {
    dispatch(getAllStudentclassRequest());
  }, [dispatch, error]);

  const handleConfirm = (id) => {
    axios
      .put(`/student/classRequest/${id}`)
      .then((res) => {
        dispatch(updateStudentclassRequest(id));
        // console.log("status Update fned : ", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    dispatch(getAllStudentclassRequest());
  }, [dispatch, error]);

  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold m-2">Requested class </h1>
      <ul role="list" className="p-6 divide-y divide-slate-200 font-[8px]">
        {AllStudentclassRequest?.map((person) => (
          <div className="flex justify-between flex-col sm:flex-row md-flex-row lg:flex-row  py-2 my-2 items-center">
            <li className="flex sm:py-4 first:pt-0 last:pb-0">
              <img className="h-12 w-12 rounded-full" src={avader} alt="" />
              <div className="ml-3 text-sm">
                <p className="px-2 mb-2 text-sm font-medium text-slate-900">
                  {person.title}
                </p>
                <span className=" text-sm text-sky-900 bg-green-100 px-2 rounded-md">
                  {person.category}
                </span>
                <p className="px-2 my-2 text-sm text-slate-500 truncate">
                  {person.date}
                </p>
                <p className="px-2">
                  Status:
                  <span className="m-1 px-2 rounded-md text-sm bg-sky-100 text-white truncate">
                    {person.status}
                  </span>
                </p>
                <p className="px-2">
                  Price: <strong>${person.price}</strong>
                </p>
              </div>
            </li>
            <div className="flex gap-4">
              {person.status === "accepted" ? (
                <button
                  // onClick={() => handleConfirm(person._id)}
                  className="btn-disabled text-white"
                >
                  Confirm
                </button>
              ) : (
                <button
                  onClick={() => handleConfirm(person._id)}
                  className="btn-confirm hover:text-white text-white"
                >
                  Confirm
                </button>
              )}
              <button className="btn-reject hover:text-red-700 ">Hide</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
