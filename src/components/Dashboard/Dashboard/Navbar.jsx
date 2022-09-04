// import React, { useState } from "react";
// import Message from "./Message";
// // const { Header, Sider, Content } = Layout;

// export default function Navbar() {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <>
//       <div className="">
//         {collapsed ? (
//           <i
//             onClick={() => setCollapsed(!collapsed)}
//             class="ri-menu-unfold-fill text-2xl text-gray-600 "
//           ></i>
//         ) : (
//           <i
//             onClick={() => setCollapsed(!collapsed)}
//             class="ri-menu-fold-fill text-2xl text-gray-600"
//           ></i>
//         )}
//       </div>
//       <div className="flex text-gray-600 items-center justify-around">
//         <Message />
//         <i class="mx-3 px-1 ri-notification-4-line text-gray-600 "></i>
//         {/* <i class="ri-notification-off-line"></i> */}

//         {/* <MegaProfile /> */}
//         <img
//           class="profilepic cursor-pointer shadow-lg mx-auto h-8 rounded-full"
//           src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
//           alt=""
//         />
//       </div>
//     </>
//   );
// }
