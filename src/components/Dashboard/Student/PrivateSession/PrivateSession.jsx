import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleTeacher } from "../../../../Store/Actions/TeachersAction";
import "./PrivateSession.css";

export default function PrivateSession() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { teacher } = useSelector((state) => state.teachers);
  const { auth } = useSelector((state) => state.auth.login);
  // console.log("auth", auth);

  useEffect(() => {
    dispatch(getSingleTeacher(id));
  }, [dispatch]);

  return (
    <div className="mt-8">
      <div className="mt-8 grid sm:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="card_session mt-6">
          <div className="title-total">
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center">
                <img
                  className="h-20 w-20 inset-x-0 -top-8 block rounded-full sm:shrink-0"
                  src={teacher?.teacher_info?.avader?.url}
                  alt={teacher?.name}
                />
                <div className="font-bold text-[13px] p-3">
                  <p className="font-bold text-sm ">
                    Mr. {teacher?.teacher_info?.name}
                  </p>
                  <p className="flex items-center py-1 text-green-900 ">
                    <i className="ri-focus-2-line mr-[2px]"></i> Online
                  </p>
                </div>
              </div>
              {/* <Link to={`${filterUser._id}`}> */}
              <button
                onClick={() => navigate(`/dashboard/teachers/${teacher._id}`)}
                color="#2db7f5"
                className="inline-block text-white bg-[#2db7f5] border border-[#2db7f5] rounded-full hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring"
              >
                <span className="flex text-sm px-1">
                  <i className="ri-eye-line px-1"></i>
                  Profile
                </span>
              </button>
              {/* </Link> */}
            </div>

            <p className="text-[12px] py-3">
              <span className="text-cyan-700">Specialist: </span>
              {teacher?.specialist}
              <br />
              <span className="text-cyan-700">
                email: {/* {filterteacher[index].email} */}
              </span>
              {teacher?.teacher_info?.email}
            </p>
            {/* <span className="text-[10px] px-4">{user.email}</span> */}
            <div className="text-sm pb-2">
              I have a contagious Can-Do attitude, determined to leverage my
              knowledge and passion.
            </div>
            <p className="text-[12px] text-cyan-700">
              Avg fee: ${teacher?.classFee}
            </p>
            <p className="text-[12px] text-cyan-700">
              Total Class: {teacher?.numOfCourses}
            </p>
            <div className="actions mt-2">
              <Link to="" className="link">
                <i className="ri-heart-line"></i>
              </Link>
              <Link to="" className="link">
                {" "}
                <i className="ri-chat-2-line"></i>
              </Link>

              <p className="link">
                <button
                  onClick={() =>
                    navigate(`/dashboard/payment-info/${teacher._id}`)
                  }
                  className="py-1 text-sm px-3 md:py-2 md:px-2 bg-[#2db7f5] text-white rounded-lg shadow-mdhover:bg-white border border-[#2db7f5] hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring"
                >
                  Start Session
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-md mt-6">
          <div className="header flex gap-3 text-justify items-center pb-3 shadow-md p-2">
            <Link to="">
              <i className="ri-arrow-left-line"></i>
            </Link>
            <img
              className="block mx-auto w-14 h-14 rounded-full sm:mx-0 sm:shrink-0"
              src={teacher?.teacher_info?.avader?.url}
              alt={teacher?.teacher_info?.name}
            />
            <div>
              <h4 className="text-[14px] font-bold">Andrew Neil</h4>
              <p className="text-[11px]">Active now</p>
            </div>
          </div>
          <div className="body bg-slate-100 mt-1 py-7 px-2">
            <div className="flex gap-3 mb-5 justify-start">
              <div className="header flex gap-3 text-justify items-center">
                <img
                  className="block mx-auto h-10 w-10 rounded-full sm:mx-0 sm:shrink-0"
                  src={teacher?.teacher_info?.avader?.url}
                  alt={teacher?.teacher_info?.name}
                />
                <div className="shadow-md p-3 rounded-r-lg bg-white">
                  <p className="text-[12px]">hey, how are you?</p>
                </div>
                <span className="text-[10px] text-slate-400">3.30 pm</span>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="header flex gap-3 text-justify items-center">
                <span className="text-[10px] text-slate-400">3.30 pm</span>
                <div className="shadow-md p-3 rounded-r-lg bg-white">
                  <p className="text-[12px]">im Good & you?</p>
                </div>
                <img
                  className="block mx-auto h-10 rounded-full sm:mx-0 sm:shrink-0"
                  src={auth?.avader?.url}
                  alt={auth?.name}
                />
              </div>
            </div>
          </div>
          <div className="footer flex gap-3 text-justify items-center pb-3 shadow-md p-2">
            <textarea
              type="text"
              placeholder="Type a message"
              className="w-full text-[12px] rounded-md p-2 focus:outline-none focus:border-sky-500"
            />
            <button className="py-1 text-sm px-3 md:py-2 md:px-2 bg-[#2db7f5] text-white rounded-lg shadow-mdhover:bg-white border border-[#2db7f5] hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
