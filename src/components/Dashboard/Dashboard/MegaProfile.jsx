import React from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutAction } from "../../../Store/Actions/authActions";

export default function MegaProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  let avater = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360";

  const { auth } = useSelector((state) => state.auth.login);
  console.log("From Dashboard", auth);

  const logoutHandler = () => {
    dispatch(logoutAction());
    localStorage.removeItem("token");
    alert.success("logged out successfully");
    navigate("/login");
  };

  const items = [
    {
      key: "2",
      link: "/dashboard/profile/past-Lessons",
      label: "Past Lessons",
      icon: <i className="ri-file-text-line mr-1"></i>,
    },
    {
      key: "3",
      link: "/dashboard/profile/favorites",
      label: "Favorites",
      icon: <i className="ri-heart-add-line"></i>,
    },
    {
      key: "4",
      link: "/dashboard/profile/bookmarks",
      label: "Bookmark",
      icon: <i className="ri-bookmark-3-line"></i>,
    },
    {
      key: "5",
      link: "/dashboard/profile/become-tuitor",
      label: "Become a Tuitor",
      icon: <i className="ri-user-voice-line"></i>,
    },
  ];

  return (
    <div>
      <div className="z-20 bg-[#0b1120] text-white profilebio rounded-md w-[190px] border text-sm p-4 text-center">
        <img
          className="cursor-pointer mb-2 shadow-lg mx-auto h-14 rounded-full"
          src={auth.avader?.url ? auth.avader?.url : avater}
          alt=""
        />
        <div>
          <p className=" py-1">{auth.name}</p>
          <p className="text-sm font-thin text-[13px]">{auth.role}</p>
          <NavLink to="/dashboard/profile">
            <button className="btn-primary">View Profile</button>
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
          {/* <NavLink to="/logout"> */}
          <button onClick={() => logoutHandler()} className="btn-primary">
            <i className="ri-logout-circle-r-line"></i> Logout
          </button>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
}
