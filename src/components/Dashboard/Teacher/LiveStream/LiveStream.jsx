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
            <div className="p-2 flex justify-between mt-2">
              <Link to="" className="link">
                <i className="ri-heart-line"></i>
              </Link>
              <Link to="" className="link">
                <i className="ri-chat-2-line"></i>
              </Link>
              <button className="py-1 px-2 text-sm bg-[##FBFCFE] text-white rounded-lg shadow-md">
                <span className="text-slate-500 font-bold">44.22</span>
              </button>
            </div>
          </div>
          <div className="p-2 text-[11px] font-bold description">
            <p className="font-bold text-[19px] text-slate-800">
              Microsoft Access Development, Design and Advanced Methods Workshop
              Advance Tutorial
            </p>
            <div className="flex justify-around gap-5 items-center py-4">
              <span>Casssioac Vanni</span>
              <span className="mx-1 text-slate-400">
                Developer Designer HTML5
              </span>
              <button className="text-blue-700">Follow Author</button>
            </div>
          </div>
          <div className="p-2 contributors">
            <div class="flex items-center space-x-2 text-base">
              <h4 class="font-semibold text-slate-900">Contributors</h4>
              <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                204
              </span>
            </div>
            <div class="mt-3 flex -space-x-2 overflow-hidden">
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="mt-3 text-sm font-medium">
              <a href="#" class="text-blue-500">
                + 198 others done classed
              </a>
            </div>
          </div>
         </div>
        <div className="shadow-md mt-6 scroll-smooth">
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
