import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import MegaProfile from "./MegaProfile";
import Message from "./Message";
const { Header, Sider, Content } = Layout;

export default function Dashboard() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [profileShow, setProfileShow] = useState();

  const ToggleProfile = () => {
    setProfileShow(!profileShow);
  };

  const { user } = useSelector((state) => state.user);
  // console.log("From Dashboard", user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // student
  const items = [
    {
      key: "1",
      icon: "ri-profile-line",
      link: "studentProfile",
      role: ["student"],
      label: "My Profile",
    },
    {
      key: "10",
      icon: "ri-profile-line",
      link: "teacherProfile",
      role: ["teacher"],
      label: "My Profile",
    },
    {
      key: "2",
      icon: "ri-window-2-fill",
      link: "courses",
      role: ["student", "teacher"],
      label: "All Courses",
    },
    {
      key: "3",
      icon: "ri-group-fill",
      link: "classroom",
      role: ["student"],
      label: "Classroom",
    },
    {
      key: "4",
      icon: "ri-user-fill",
      link: "lessons",
      role: ["student"],
      label: "Lessons",
    },
    {
      key: "5",
      icon: "ri-play-list-add-line",
      link: "class-requests",
      role: ["student", "teacher"],
      label: "Class Request",
    },
    {
      key: "6",
      icon: "ri-grid-fill",
      link: "resources",
      role: ["student"],
      label: "Resources",
    },
    {
      key: "7",
      icon: "ri-grid-fill",
      link: "live-stream",
      role: ["teacher"],
      label: "Live Stream",
    },
    {
      key: "8",
      icon: "ri-grid-fill",
      link: "savedCourses",
      role: ["student"],
      label: "Saved Courses",
    },
    {
      key: "9",
      icon: "ri-money-dollar-box-line",
      link: "payments",
      role: ["student"],
      label: "Payment Info",
    },
    {
      key: "11",
      icon: "ri-money-dollar-box-line",
      link: "classScheduling",
      role: ["teacher"],
      label: "Class Schedule",
    },
    {
      key: "12",
      icon: "ri-money-dollar-box-line",
      link: "reqclassfeed",
      role: ["teacher"],
      label: "Requested Class",
    },
  ];

  const role = "teacher";
  const navElements = items.filter((item) =>
    item.role.find((info) => info == role)
  );

  let avater = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360";

  // console.log(navElements);

  return (
    <Layout>
      <Sider
        className=""
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className="logo text-white text-start p-6">
          <img
            src="https://elearni.wpengine.com/wp-content/uploads/2018/12/logo.png"
            alt=""
            srcset=""
          />
        </div>
        <nav className="">
          {navElements.map((item) => (
            <div className="my-3 text-white" key={item.key}>
              <NavLink
                to={item.link}
                className={`${(state) =>
                  state.isActive ? "active" : ""} my-1 py-2 block`}
              >
                <i className={`${item.icon} m-4 text-[18px]`} />
                {!collapsed ? <span className="">{item.label}</span> : ""}
                {item.route}
              </NavLink>
            </div>
          ))}
        </nav>
      </Sider>

      <Layout className="site-layout overflow-scroll">
        <div className="relative">
          <Header className="fixed top-0 left-[200px] right-[17px] z-30 site-layout-background mx-4 flex justify-between items-center">
            <div className="">
              {collapsed ? (
                <i
                  onClick={() => setCollapsed(!collapsed)}
                  class="ri-menu-unfold-fill text-2xl text-gray-600 "
                ></i>
              ) : (
                <i
                  onClick={() => setCollapsed(!collapsed)}
                  class="ri-menu-fold-fill text-2xl text-gray-600"
                ></i>
              )}
            </div>
            <div className="flex text-gray-600 items-center justify-around">
              <Message />
              <i class="mx-3 px-1 ri-notification-4-line text-gray-600 "></i>
              {/* <i class="ri-notification-off-line"></i> */}

              {/*----------- MegaMenu------ */}
              <div>
                <img
                  onClick={ToggleProfile}
                  class="profilepic cursor-pointer shadow-lg mx-auto h-8 rounded-full"
                  src={user.avader?.url ? user.avader?.url : avater}
                  alt=""
                />
                {profileShow ? <MegaProfile /> : ""}
              </div>
            </div>
          </Header>
        </div>

        {/* --------- Nasted Route  used----------*/}
        <Content className="site-layout-background contentSide">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
