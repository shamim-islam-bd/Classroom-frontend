import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleTeacher } from "../../../../Store/Actions/TeachersAction";

export default function SingleTeacher() {
  const { id } = useParams();
  const dispatch = useDispatch();
  //   console.log(id);

  // useing dispatch for storeing single teachers refreesh korleu data jave nah.
  useEffect(() => {
    // dispatch(getAllTeachers());
    dispatch(getSingleTeacher(id));
  }, [id]);

    const { teacher } = useSelector((state) => state.teachers);
    console.log("teachers: ", teacher);

  return (
    <div className="mt-10">
      <h1>Single Teacher</h1>
    </div>
  );
}
