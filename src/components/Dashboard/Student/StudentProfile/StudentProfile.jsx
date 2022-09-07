// // import jwtDecode from "jwt-decode";
// import { Col, Row, Tabs } from "antd";
// import axios from "axios";
// import React from "react";
// import { useSelector } from "react-redux";
// import Activity from "../../common/Profile/Activity";
// import Deatils from "../../common/Profile/Deatils";
// import EditProfile from "../../common/Profile/EditProfile";
// import PassedLesson from "../../common/Profile/PassedLesson";
// const { TabPane } = Tabs;

// export default function StudentProfile() {
//   const { user } = useSelector((state) => state.user);

//   axios
//     .post("/user/profile")
//     .then((res) => {
//       console.log("From Profile: ", res.data.user);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   return (
//     <div>
//       {/* <h1 className="text-2xl text-blue-800 text-center">Profile</h1> */}
//       <Row>
//         <Col span={24}>
//           <div>
//             <Tabs defaultActiveKey="1">
//               <TabPane tab="About Me" key="1">
//                 <Deatils />
//               </TabPane>
//               <TabPane tab="Edit Profile" key="2">
//                 <EditProfile />
//               </TabPane>
//               <TabPane tab="Activity" key="3">
//                 <Activity />
//               </TabPane>
//               <TabPane tab="Passed Lessons" key="4">
//                 <PassedLesson />
//               </TabPane>
//             </Tabs>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// }
