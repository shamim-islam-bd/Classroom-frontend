import { Tooltip } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SessionRoom() {
  const { teachers } = useSelector((state) => state.teachers);
  console.log(teachers);

  return (
    <div className="mt-20">
      <h1 className="text-xl font-bold m-2">Session Room </h1>
      {/* <div>
        {teachers?.map((teacher) => {
          return (
            <div key={teacher._id}>
              <h1>{teacher.name}</h1>
            </div>
          );
        })}
      </div> */}
      <div className="grid sm:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="shadow-md mt-6">
          <div className="header flex gap-3 text-justify items-center pb-3 shadow-md p-2">
            <Link to="">
              <i class="ri-arrow-left-line"></i>
            </Link>
            <img
              class="block mx-auto h-14 rounded-full sm:mx-0 sm:shrink-0"
              src="https://i.ibb.co/xzzM5L4/shamim-islam-3.png"
              alt="Woman's Face"
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
                  class="block mx-auto h-10 rounded-full sm:mx-0 sm:shrink-0"
                  src="https://i.ibb.co/xzzM5L4/shamim-islam-3.png"
                  alt="Woman's Face"
                />
                <div className="shadow-md p-3 rounded-r-lg bg-white">
                  <p className="text-[12px]">hey how are you?</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="header flex gap-3 text-justify items-center">
                <div className="shadow-md p-3 rounded-r-lg bg-white">
                  <p className="text-[12px]">hey how are you?</p>
                </div>
                <img
                  class="block mx-auto h-10 rounded-full sm:mx-0 sm:shrink-0"
                  src="https://i.ibb.co/xzzM5L4/shamim-islam-3.png"
                  alt="Woman's Face"
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
            <button className="bg-blue-500 text-white rounded-md p-2">
              Send
            </button>
          </div>
        </div>
        {/* <div className="flex items-center justify-center">
          <div className="max-w-md md:max-w-2xl px-2">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
              <div className="bg-cover bg-bottom h-56 md:h-auto md:w-56">
                <img
                  src="https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"
                  alt=""
                  srcSet=""
                />
              </div>
              <div>
                <div className="p-4 md:p-5">
                  <p className="font-bold text-xl ">Amsterdam Walking Tour</p>
                  <p className="text-gray-700 ">
                    Explore popular tourist destinations as well as hidden local
                    favourites.
                  </p>
                </div>
                <div className="p-4 md:p-5 bg-gray-100 text-sm">
                  <div className="sm:flex sm:justify-between sm:items-center">
                    <div>
                      <div className="text-gray-700">
                        <span className="text-gray-900 font-bold">17</span> per
                        person*
                      </div>
                      <div className="flex items-center">
                        <div className="text-gray-600 ml-2 text-sm mt-1">
                          28 reviews
                        </div>
                      </div>
                    </div>
                    <button className="mt-3 sm:mt-0 py-1 px-3 md:py-2 md:px-4 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg shadow-md">
                      Start Session
                    </button>
                  </div>
                  <div className="mt-3 text-gray-600 text-sm md:text-base">
                    *Prices may vary depending on selected date.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="card mt-6">
          <div className="img-avatar"></div>
          <div className="title-total">
            <div className="flex items-center justify-between pb-4">
              <span className="text-green-800 font-bold text-[13px] p-3">
                <p className="flex">
                  <i className="ri-focus-2-line mr-[2px]"></i> Online
                </p>
              </span>
              <Link to="">
                <Tooltip
                  title="View Profile"
                  color="#2db7f5"
                  className="inline-block text-white bg-[#2db7f5] border border-[#2db7f5] rounded-full hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                  {/* <span className="flex text-sm px-1">
                        <i class="ri-eye-line px-1"></i>
                         Profile
                      </span> */}
                </Tooltip>
              </Link>
            </div>
            <p className="title text-cyan-800">
              Professior Mr. Shamim Islam
              {/* <span>{filterteacher[index].name}</span> */}
            </p>
            <p className="px-4 text-[12px]">
              specialist:
              {/* {teacher.specialist} */}
              Blockchain
              <br />
              email:{" "}
              <span className="text-cyan-700">
                email@gmail.com
                {/* {filterteacher[index].email} */}
              </span>
            </p>
            {/* <span className="text-[10px] px-4">{user.email}</span> */}
            <div className="desc">
              I have a contagious Can-Do attitude, determined to leverage my
              knowledge and passion.
            </div>
            <div className="actions mt-2">
              <Link to="" className="link">
                <i className="ri-heart-line"></i>
              </Link>
              <Link to="" className="link">
                {" "}
                <i className="ri-chat-2-line"></i>
              </Link>

              <Link to="" className="link">
                <button className="py-1 text-sm px-3 md:py-2 md:px-2 bg-[#2db7f5] hover:bg-[#2db7f5] text-white rounded-lg shadow-md">
                  Start Session
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
