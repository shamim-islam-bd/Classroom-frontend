import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTeacher } from "../../../../Store/Actions/TeachersAction";
// import dummy from "../../../../assets/dummy.jpg";

export default function LiveStream() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { teacher } = useSelector((state) => state.teachers);
  const { auth } = useSelector((state) => state.auth.login);

  useEffect(() => {
    dispatch(getSingleTeacher(id));
  }, [dispatch]);

  return (
    <div className="mt-5">
      <div className="mt-8 grid sm:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="card_session mt-6">
          <div className="border-0 mb-0 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-3 p-2">
                <img
                  className="h-10 w-10 inset-x-0 block mx-auto rounded-full sm:shrink-0"
                  src={auth?.avader?.url}
                  alt={auth?.name}
                />
                <div className="text-[12px]">
                  <p className="font-bold">{auth?.name}</p>
                  <p>2 hour</p>
                </div>
              </div>
              <span className="flex mr-2 text-sm px-2 text-white bg-red-600 border border-red-600 rounded-full active:text-red-500 focus:outline-none focus:ring">
                <i className="ri-eye-line pr-1"></i>
                Live
              </span>
            </div>
            <img
              src="https://img.freepik.com/premium-photo/smiling-indian-man-having-video-call-waving-hand-freelancer-communication-online-working-from-home_219285-699.jpg?w=2000"
              alt=""
              srcSet=""
            />
            <div className="flex justify-between mt-2">
              <Link to="" className="link">
                <i className="ri-heart-line"></i>
              </Link>
              <Link to="" className="link">
                {" "}
                <i className="ri-chat-2-line"></i>
              </Link>

              <button className="py-1 px-2 text-sm bg-[##FBFCFE] text-white rounded-lg shadow-md">
                <span className="text-slate-500 font-bold">44.22</span>
              </button>
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
              <h4 className="text-[14px] font-bold">
                {teacher?.teacher_info?.name}
              </h4>
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
                <span className="text-[10px] text-slate-400">2.30 pm</span>
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
