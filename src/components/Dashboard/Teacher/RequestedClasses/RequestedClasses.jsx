import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllStudentclassRequest,
  updateStudentclassRequest,
} from "../../../../Store/Actions/StudentclassReqAction";

export default function Requestedclass() {
  const avader =
    "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360";
  const dispatch = useDispatch();

  // const { AllStudentclassRequest } = useSelector(
  //   (state) => state.classReqByStudent
  // );


  const [data, setData ] = useState([])
  useEffect(()=>{
    axios.get('/AllStudent-classrequest')
    .then((res)=>{
      console.log(res.data.studentClassRequest);
      setData(res.data.studentClassRequest)
    }).catch((err)=>{
      err.message
    })
  },[])



  const handleConfirm = (id) => {
    dispatch(updateStudentclassRequest(id));
  };

  // get studentclassNameRequest id from redux store then teacher can make it update its status approved or rejected
  useEffect(() => {
    dispatch(getAllStudentclassRequest());
  }, [handleConfirm]);

  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold m-2">Requested class </h1>
      {
        // console.log(AllStudentclassRequest.length)
        // AllStudentclassRequest?.length === 0 ?

        // <h1 className="grid h-56 place-items-center">No Class Request Available.</h1>
        //  ) : (
        <ul role="list" className="p-6 divide-y divide-slate-200 font-[8px]">
          {data?.map((person, inx) => (
            <div
              key={person._id}
              className="bg-gray-100 p-3 rounded-md flex justify-between flex-col sm:flex-row md-flex-row lg:flex-row  py-2 my-2 items-center"
            >
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
                  {person.status === "pending" ? (
                    <p className="px-2">
                      Status:
                      <span className="m-1 px-2 rounded-md text-sm bg-yellow-600 text-white truncate">
                        {person.status}
                      </span>
                    </p>
                  ) : (
                    <p className="px-2">
                      Status:
                      <span className="m-1 px-2 rounded-md text-sm bg-cyan-900 text-white truncate">
                        {person.status}
                      </span>
                    </p>
                  )}
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
                    Accepted
                  </button>
                ) : (
                  <button
                    onClick={() => handleConfirm(person._id)}
                    className="btn-confirm hover:text-white text-white"
                  >
                    Accepted
                  </button>
                )}
                <button className="btn-reject hover:text-red-700 ">Hide</button>
              </div>
            </div>
          ))}
        </ul>
      }
    </div>
  );
}
