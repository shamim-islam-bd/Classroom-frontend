import React from "react";
import { useSelector } from "react-redux";

export default function Deatils() {
  let avater = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360";
  const { auth } = useSelector((state) => state.auth.login);

  return (
    <div>
      {/* <h1 className="text-bold text-xl mt-4">About Me</h1> */}
      {/* <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
      </button> */}
      <div>
        <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-sm space-y-2">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={auth.avader?.url ? auth.avader?.url : avater}
            alt="Woman's Face"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5 mb-5">
              <p className="text-lg text-black font-semibold">{auth.name}</p>
              <p className="text-slate-500 font-medium">
                Studying Bsc Engineering in CSE
              </p>
            </div>

            <div className="py-1 text-start text-sm">
              <h1 className="font-bold text-[16px]">About Me</h1>
              <p className="text-slate-500 text-[13px] py-1">
                I have a Business Management degree from Bangalore University
                and a long time Excel expert. I create professional Excel
                reports/dashboards for clients and conduct Excel workshops for
                business professionals.
              </p>
            </div>
            <div className="py-1 text-start text-sm">
              <h1 className="font-bold text-[16px]">Education</h1>
              <p className="text-slate-500 text-[13px] pt-1">Bsc in CSE.</p>
              <p className="text-slate-500 text-[13px]">
                Pundra university of Science & technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
