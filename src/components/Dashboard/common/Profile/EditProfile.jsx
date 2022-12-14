import { Input, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
const { TextArea } = Input;

export default function EditProfile() {
  let avater = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360";
  const { auth } = useSelector((state) => state.auth.login);

  return (
    <div>
      <form className="flex items-center space-x-6">
        <div className="shrink-0">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src={auth.avader?.url ? auth.avader?.url : avater}
            alt="Current profile photo"
          />
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input type="file" className="upload-pic-input" />
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
        <Input status="success" placeholder="Enter your password" />
        <label htmlFor="Name">Confirm Password*</label>
        <Input status="success" placeholder="Confirm your password" />
        <label htmlFor="Name">About me</label>
        <TextArea status="success" type="text" placeholder="About yourself" />
        <label htmlFor="Name">Institutions/Education</label>
        <TextArea status="success" type="text" placeholder="Name of your current educational institude." />
      </Space>
      <button className="btn-primary text-white">Save Changes</button>
    </div>
  );
}