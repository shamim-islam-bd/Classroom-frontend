import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleTeacher } from "../../../../Store/Actions/TeachersAction";
import "./SingleTeacher.css";

export default function SingleTeacher() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { teacher } = useSelector((state) => state.teachers);
  console.log("teacher: ", teacher);
  // console.log("SingleTeacher Id", id);

  useEffect(() => {
    dispatch(getSingleTeacher(id));
  }, [dispatch]);

  const dummyImg =
    "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=900&t=st=1662704766~exp=1662705366~hmac=b64f930f1148a80edff6183ee6b96f384687cc18d9669183a420a5e85007c47d";

  return (
    <div className="mt-10">
      <div className="">
        <div className="topCoverImg">
          <img
            className=""
            src="https://cdn.wallpapersafari.com/12/28/0objwK.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="ml-6 ">
          <div className="relative -mt-12 block w-24 h-24 bg-white rounded-full sm:mx-0 sm:shrink-0">
            <img
              className="absolute md:m-2 lg:m-2 m-2 block w-20 h-20 rounded-full sm:mx-0 sm:shrink-0"
              src={teacher?.teacher_info?.avader?.url || dummyImg}
              alt={teacher?.teacher_info?.name}
            />
          </div>
        </div>
        <div className="p-3">
          <div className="flex pb-2 gap-3 items-center">
            <p className=" font-bold"> Mr. {teacher?.teacher_info?.name}</p>
            <button className="py-1 text-sm px-2  bg-[#2db7f5] text-white rounded-lg shadow-mdhover:bg-white border border-[#2db7f5] hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring">
              Follow
            </button>
          </div>
          <p className="text-sm text-slate-500 py-1">
            {teacher?.teacher_info?.email}
          </p>

          <p>
            <span className="text-sm text-slate-500 py-1">
             Speacialist:
             <span className="text-blue-800">  {teacher?.specialist}</span>
            </span>
          </p>
        </div>

        <article className="p-2">
          <h1 className="font-bold">About me</h1>
          <p className="text-sm text-slate-500 py-1">
            I have a Business Management degree from Bangalore University and a
            long time Excel expert. I create professional Excel
            reports/dashboards for clients and conduct Excel workshops for
            business professionals. Currently am a freelance motion graphics
            artist and a Music producer. I like to be productive and creative at
            work. I like to continuously increase my skills and stay in tuned
            with the technology industry.
          </p>
        </article>

        <div className="p-2">
          <h1 className="font-bold text-[18px]">My Courses</h1>
          <p> [     ...        ...                ....        ] </p>
        </div>
      </div>
    </div>
  );
}
