import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllStudentClassRequest,
  updateStudentClassRequest,
} from "../../../../Store/Actions/StudentClassReqAction";

export default function RequestedClasses() {
  const avader =
    "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360";
  const dispatch = useDispatch();

  const { AllStudentClassRequest, error } = useSelector(
    (state) => state.ClassReqByStudent
  );
  // console.log("frm req classes: ", AllStudentClassRequest);

  const { user, loading } = useSelector((state) => state.user.user);

  // get studentclassRequest id from redux store then teacher can make it update its status approved or rejected

  // useEffect(() => {
  //   dispatch(updateStudentClassRequest(id));
  // }, [dispatch, id]);

  //get All Student Class Request from database and show it in teacher dashboard and store in redux store
  useEffect(() => {
    dispatch(getAllStudentClassRequest());
  }, [dispatch, error]);

  const handleConfirm = (id) => {
    axios
      .put(`/student/classRequest/${id}`)
      .then((res) => {
        dispatch(updateStudentClassRequest(id));
        // console.log("status Update fned : ", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    dispatch(getAllStudentClassRequest());
  }, [dispatch, error]);

  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold m-2">Requested Classes </h1>
      <ul role="list" class="p-6 divide-y divide-slate-200 font-[8px]">
        {AllStudentClassRequest?.map((person) => (
          <div className="flex justify-between flex-col sm:flex-row md-flex-row lg:flex-row  py-2 my-2 items-center">
            <li class="flex sm:py-4 first:pt-0 last:pb-0">
              <img class="h-12 w-12 rounded-full" src={avader} alt="" />
              <div class="ml-3 text-sm">
                <p class="px-2 mb-2 text-sm font-medium text-slate-900">
                  {person.title}
                </p>
                <span class=" text-sm text-sky-900 bg-green-100 px-2 rounded-md">
                  {person.category}
                </span>
                <p class="px-2 my-2 text-sm text-slate-500 truncate">
                  {person.date}
                </p>
                <p className="px-2">
                  Status:
                  <span class="m-1 px-2 rounded-md text-blue-900 text-sm bg-sky-100 text-white truncate">
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
