import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React, { useState } from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import AllCourses from "../AllCourses/AllCourses";
import Classroom from "../Student/Classroom/Classroom";
import ClassRequest from "../Student/ClassRequest/ClassRequest";
import PaymentInfo from "../Student/PaymentInfo/PaymentInfo";
import Lessons from "../Student/Lessons/Lessons";
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
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ marginLeft: 14 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex space-x-2">
            <i class="ri-notification-4-line"></i>
          </div>
        </Header>

        {/* --------- Nasted Route  used----------*/}
        <Content className="site-layout-background contentSide">    
          <Outlet/>
        </Content>

      </Layout>
    </Layout>
  );
}
