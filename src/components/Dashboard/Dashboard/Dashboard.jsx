import { Layout } from "antd";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
const { Header, Sider, Content } = Layout;

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  // student
  const items = [
    {
      key: "1",
      icon: "ri-window-2-fill",
      link: "",
      label: "All Courses",
    },
    {
      key: "2",
      icon: "ri-group-fill",
      link: "classroom",
      label: "Classroom",
    },
    {
      key: "3",
      icon: "ri-user-fill",
      link: "lessons",
      label: "Lessons",
    },
    {
      key: "4",
      icon: "ri-play-list-add-line",
      link: "class-requests",
      label: "Class Request",
    },
    {
      key: "5",
      icon: "ri-grid-fill",
      link: "resources",
      label: "Resources",
    },
    {
      key: "6",
      icon: "ri-money-dollar-box-line",
      link: "payments",
      label: "Payment Info",
    },
  ];

  return (
    <Layout>
      <Sider
        className=""
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className="logo text-2xl text-white text-start p-4">Logo</div>
        <nav>
          {items.map((item) => (
            <div className="my-3 text-white">
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
      <Layout className="site-layout scroll-auto">
        <Header className="site-layout-background mx-4 flex justify-between items-center">
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
            <i class="mx-3 px-1 ri-notification-4-line text-gray-600 "></i>
            {/* <i class="ri-notification-off-line"></i> */}

            <img
              class="profilepic cursor-pointer shadow-lg mx-auto h-8 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
              alt=""
            />
          </div>
        </Header>

        <div className="z-20 bg-[#042645e9] text-white profilebio w-[150px] border text-sm p-4 text-center">
          <img
            class="cursor-pointer mb-2 shadow-lg mx-auto h-14 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
            alt=""
          />
          <p className=" py-1">Shamim islam</p>
          <p className="">Date</p>
          <hr className="my-4" />
          <p className=" py-1">Profile Details</p>
          <p className="">payment info</p>
          <button className="py-1 border">Logout</button>
        </div>

        {/* --------- Nasted Route  used----------*/}
        <Content className="site-layout-background contentSide">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
