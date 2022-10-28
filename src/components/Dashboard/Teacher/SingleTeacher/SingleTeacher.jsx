import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleTeacher } from "../../../../Store/Actions/TeachersAction";
// import { getAllTeachers } from "../../../../Store/Actions/TeachersAction";
// import { getAllUsers } from "../../../../Store/Actions/usersAction";
import "./SingleTeacher.css";

export default function SingleTeacher() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { teacher } = useSelector((state) => state.teachers);
  // console.log("teacher: ", teacher);
  console.log("SingleTeacher Id", id);

  useEffect(() => {
    dispatch(getSingleTeacher(id));
  }, [dispatch]);

  // useing dispatch for storeing single teachers refreesh korleu data jave nah.
  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, [dispatch]);

  return (
    <div className="mt-10">
      {/* <h1>Single Teacher</h1> */}
      <div className="">
        <div className="topCoverImg">
          <img
            className=""
            src="https://cdn.wallpapersafari.com/12/28/0objwK.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="">
          <img
            className="cursor-pointer mb-2 shadow-lg mx-auto h-14 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
            alt=""
          />
          <div>
            <p className=" py-1">{teacher?.teacher_info?.name}</p>
            <p className=" py-1">{teacher?.teacher_info?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
