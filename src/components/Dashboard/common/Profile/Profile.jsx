import { Tabs } from "antd";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import Activity from "./Activity";
import BookmarkCourses from "./BookmarkCourses";
import Deatils from "./Deatils";
import EditProfile from "./EditProfile";
import Favorites from "./Favorites";
import Notifications from "./Notifications";
import PassedLesson from "./PassedLesson";
const { TabPane } = Tabs;

export default function Profile() {
  const { user } = useSelector((state) => state.user);
  const role = user.role;

  axios
    .post("/user/profile")
    .then((res) => {
      console.log("From Profile: ", res.data.user);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <Tabs defaultActiveKey="1">
        {role === "student" ? (
          <>
            <TabPane tab="About Me" key="1">
              <Deatils />
            </TabPane>
            <TabPane tab="Edit Profile" key="2">
              <EditProfile />
            </TabPane>
            <TabPane tab="Activity" key="3">
              <Activity />
            </TabPane>
            <TabPane tab="Bookmark" key="4">
              <BookmarkCourses />
            </TabPane>
            <TabPane tab="Favorites" key="6">
              <Favorites />
            </TabPane>
            <TabPane tab="Notifications" key="7">
              <Notifications />
            </TabPane>
          </>
        ) : (
          <>
            <TabPane tab="Passed Lessons" key="5">
              <PassedLesson />
            </TabPane>
            <TabPane tab="Notifications" key="7">
              <Notifications />
            </TabPane>
          </>
        )}
      </Tabs>
    </div>
  );
}
