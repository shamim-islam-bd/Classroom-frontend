import React from "react";
import { useSelector } from "react-redux";

export default function Deatils() {
  let avater = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360";
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      {/* <h1 className="text-bold text-xl mt-4">About Me</h1> */}
      <div>
        <div class="py-8 px-8 max-w-sm bg-white rounded-xl shadow-sm space-y-2">
          <img
            class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={user.avader?.url ? user.avader?.url : avater}
            alt="Woman's Face"
          />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5 mb-10">
              <p class="text-lg text-black font-semibold">Shamim Islam</p>
              <p class="text-slate-500 font-medium">
                Studying Bsc Engineering in CSE
              </p>
            </div>
            {/* <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Message
            </button> */}

            <hr className="my-5" />
            <h1 className="font-bold">About {user.name}</h1>
            <p>Comming Sooon..........</p>
            <p>Comming Sooon..........</p>
            <p>Comming Sooon..........</p>
            <br />

            <h1 className="font-bold">Education</h1>
            <p>Comming Sooon..........</p>
            <p>Comming Sooon..........</p>
            <p>Comming Sooon..........</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
