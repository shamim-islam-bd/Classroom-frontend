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


  const profileDestination = (id) => {
    console.log(id);
    navigate(`/dashboard/teachers/${id}`);
  };


  const dummyImg =
    "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=900&t=st=1662704766~exp=1662705366~hmac=b64f930f1148a80edff6183ee6b96f384687cc18d9669183a420a5e85007c47d";

  return (
    <div className="mt-8">
      <div className="mt-8 grid sm:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="card_session mt-6">
          <div className="relative">
            <img
              className="absolute h-20 w-20 inset-x-0 -top-8 block mx-auto rounded-full sm:shrink-0"
              src={teacher?.avader?.url || dummyImg}
              alt={teacher?.name}
            />
          </div>
          <div className="title-total">
            <div className="flex items-center justify-between pb-4">
              <span className="text-green-800 font-bold text-[13px] p-3">
                <p className="flex">
                  <i className="ri-focus-2-line mr-[2px]"></i> Online
                </p>
              </span>
              {/* <Link to={`${filterUser._id}`}> */}
              <button
                onClick={() => profileDestination(teacher._id)}
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
            <p className="font-bold text-sm ">
              Professior Mr. {teacher?.teacher_info?.name}
              {/* <span>{filterteacher[index].name}</span> */}
            </p>
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

              <Link to="" className="link">
                <button
                  className="py-1 text-sm px-3 md:py-2 md:px-2 bg-[#2db7f5] text-white rounded-lg shadow-mdhover:bg-white border border-[#2db7f5] hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring
                "
                >
                  Start Session
                </button>
              </Link>
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
              src={teacher?.teacher_info?.avader?.url || dummyImg}
              alt={teacher?.name}
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
                  src={teacher?.teacher_info?.avader?.url || dummyImg}
                  alt={teacher?.name}
                />
                <div className="shadow-md p-3 rounded-r-lg bg-white">
                  <p className="text-[12px]">hey, how are you?</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="header flex gap-3 text-justify items-center">
                <div className="shadow-md p-3 rounded-r-lg bg-white">
                  <p className="text-[12px]">im Good & you?</p>
                </div>
                <img
                  className="block mx-auto h-10 rounded-full sm:mx-0 sm:shrink-0"
                  src={auth?.avader?.url || dummyImg}
                  alt={teacher?.name}
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
