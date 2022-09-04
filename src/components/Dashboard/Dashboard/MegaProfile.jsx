import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export default function MegaProfile() {
  const navigate = useNavigate();

  let avater = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360";

  const { user } = useSelector((state) => state.user);
  console.log("User from Profile: ", user.avader?.url);

  const items = [
    {
      key: "2",
      link: "Past-Lessons",
      label: "Past Lessons",
      icon: <i class="ri-file-text-line mr-1"></i>,
    },
    {
      key: "3",
      link: "favorites",
      label: "Favorites",
      icon: <i class="ri-heart-add-line"></i>,
    },
    {
      key: "4",
      link: "bookmark",
      label: "Bookmark",
      icon: <i class="ri-bookmark-3-line"></i>,
    },
    {
      key: "5",
      link: "become-Tuitor",
      label: "Become a Tuitor",
      icon: <i class="ri-user-voice-line"></i>,
    },
  ];

  return (
    <div>
      <div className="z-20 bg-[#0b1120] text-white profilebio rounded-md w-[190px] border text-sm p-4 text-center">
        <img
          class="cursor-pointer mb-2 shadow-lg mx-auto h-14 rounded-full"
          src={user.avader?.url ? user.avader?.url : avater}
          alt=""
        />
        <div>
          <p className=" py-1">{user.name}</p>
          <NavLink to="/profile">
            <button class="btn-primary">View Profile</button>
          </NavLink>
          <hr className="my-4" />
          {items.map((item) => (
            <div key={item.key}>
              <ul className="text-start m-1 p-1">
                <NavLink to={item.link} className="cursor-pointer">
                  {item.icon} {item.label}
                </NavLink>
              </ul>
            </div>
          ))}
          <NavLink to="/logout">
            <button class="btn-primary">
              <i class="ri-logout-circle-r-line"></i> Logout
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
