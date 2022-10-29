import React from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-rows-1 md:grid-cols-2 grid-cols-1">
        <div className="card_session mt-6">
          <div className="title-total">
            <div className="flex items-center justify-between">
              <div className="sm:flex items-center">
                <img
                  className="h-20 w-20 inset-x-0 -top-8 block rounded-full sm:shrink-0"
                  src="https://livedgs.com/assets/images/team-2.jpg"
                  alt="{teacher?.name}"
                />
                <div className="font-bold text-[13px] p-3">
                  <p className="font-bold text-sm ">
                    Mr. teacher
                    {/* {teacher?.teacher_info?.name} */}
                  </p>
                  <p className="flex items-center py-1 text-green-900 ">
                    Online
                  </p>
                </div>
              </div>
              <button
                // onClick={() => profileDestination(teacher._id)}
                color="#2db7f5"
                className="inline-block text-white bg-[#2db7f5] border border-[#2db7f5] rounded-full hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring"
              >
                <span className="flex text-sm px-1">
                  <i className="ri-eye-line px-1"></i>
                  Profile
                </span>
              </button>
            </div>

            <p className="text-[12px] py-3">
              <span className="">Softer developer </span>
              {/* {teacher?.specialist} */}
              <br />
              <span className="">
               support@gmail.com
                {/* {filterteacher[index].email} */}
              </span>
            </p>
            <div className="flex justify-between">
              <Link to="" className="link">
                <i className="ri-heart-line"></i>
              </Link>
              <Link to="" className="link">
                {" "}
                <i className="ri-chat-2-line"></i>
              </Link>

              <p className="link">
                <button
                  // onClick={() => LiveStreamRoute(teacher._id)}
                  className="py-1 text-sm px-3 md:py-2 md:px-2 bg-[#2db7f5] text-white rounded-lg shadow-mdhover:bg-white border border-[#2db7f5] hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring"
                >
                  Class
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
