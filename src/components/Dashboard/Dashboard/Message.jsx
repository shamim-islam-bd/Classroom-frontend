import { Badge, Dropdown, Menu, Space } from "antd";
import React from "react";
const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">Message</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);

export default function Message() {
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Badge count={5}>
            <i className="ri-message-2-line m-1"></i>
          </Badge>
        </Space>
      </a>
    </Dropdown>
  );
}
