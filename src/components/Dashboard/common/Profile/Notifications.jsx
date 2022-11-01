import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../../../Store/Actions/TeachersAction";

export default function Notifications() {
  const dispatch = useDispatch();
  const { teachers } = useSelector((state) => state.teachers);
  const { auth } = useSelector((state) => state.auth.login);
  // console.log("teachers : ", teachers);
  // console.log("auth : ", auth._id);

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  // const filterTeacher = teachers?.find((te) => {
  //   if (te.teacher_info._id === auth._id) {
  //     return te;
  //   }
  //   return te;
  // });
  // console.log(filterTeacher?.unseenNotifications);

  return (
    <div>
      <div className="flex justify-between">
        <h1>All Notification</h1>
        <div className="flex gap-6">
          <a href=""> Read All</a>
          <a href=""> Delete All</a>
        </div>
      </div>
      {
        filterTeacher?.unseenNotifications?.map((notification, inx)=>{
          <Link to="" className="flex gap-3 mt-5 text-black bg-slate-100" key={inx}>
          <div className="left">
            {console.log(notification)}
            <div className="flex items-center justify-between">
              <div className="sm:flex">
                <img
                  className="h-20 w-20 inset-x-0 -top-8 block rounded-full sm:shrink-0"
                  src="{teacher?.teacher_info?.avader?.url}"
                  // alt="{teacher?.teacher_info?.name}"
                />
                <div className="p-3">
                  <span className="font-bold mr-2">
                    Shamim Islam
                    {/* {teacher?.teacher_info?.name} */}
                  </span>
                  <span className="flex items-center text-[12px] text-green-900 ">
                    Blockchain, Softer
                  </span>
                  <span className="flex items-center text-[12px] text-green-900 ">
                    created At: 12.30 PM
                  </span>
                </div>
              </div>
              {/* <button
                // onClick={() =>
                //   navigate(`/dashboard/teachers/${teacher._id}`)
                // }
                color="#2db7f5"
                className="inline-block text-white bg-[#2db7f5] border border-[#2db7f5] rounded-full hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring"
              >
                <span className="flex text-sm px-1">
                  <i className="ri-eye-line px-1"></i>
                  Profile
                </span>
              </button> */}
            </div>
          </div>
        </Link>
        })
      }
    </div>
  );
}
