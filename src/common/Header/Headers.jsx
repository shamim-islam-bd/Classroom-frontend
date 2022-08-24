import {
  InsertRowBelowOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PicLeftOutlined,
  UploadOutlined,
  UsergroupDeleteOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./Headers.css";
const { Header, Sider, Content } = Layout;

export default function Headers() {
  const [collapsed, setCollapsed] = useState(false);

  // student
  const items = [
    {
      key: "1",
      icon: <UsergroupDeleteOutlined />,
      path: "/allcourses",
      label: "All Courses",
    },
    {
      key: "2",
      icon: <PicLeftOutlined />,
      path: "/classroom",
      label: "Classroom",
    },
    {
      key: "3",
      icon: <InsertRowBelowOutlined />,
      path: "/lessons",
      label: "Lessons",
    },
    {
      key: "4",
      icon: <VideoCameraOutlined />,
      path: "/class-requests",
      label: "My Class Request",
    },
    {
      key: "5",
      icon: <VideoCameraOutlined />,
      path: "/resources",
      label: "Resources",
    },
    {
      key: "6",
      icon: <UploadOutlined />,
      path: "/payments",
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
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          {...{ items }}
        />
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
        </Header>

        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}
