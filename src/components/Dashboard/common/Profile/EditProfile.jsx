import { Input, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";

export default function EditProfile() {
  let avater = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360";
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      {" "}
      <form class="flex items-center space-x-6">
        <div class="shrink-0">
          <img
            class="h-16 w-16 object-cover rounded-full"
            src={user.avader?.url ? user.avader?.url : avater}
            alt="Current profile photo"
          />
        </div>
        <label class="block">
          <span class="sr-only">Choose profile photo</span>
          <input type="file" class="upload-pic-input" />
        </label>
      </form>
      <Space
        direction="vertical"
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        <label htmlFor="Name">Name*</label>
        <Input status="success" placeholder="Name" />
        <label htmlFor="Name">Email*</label>
        <Input status="success" type="email" placeholder="email" />
        <label htmlFor="Name">Password*</label>
        <Input status="warning" placeholder="Error with prefix" />
        <label htmlFor="Name">Confirm Password*</label>
        <Input status="warning" placeholder="Warning with prefix" />
      </Space>
      <button class="btn-primary text-white">Save Changes</button>
    </div>
  );
}
