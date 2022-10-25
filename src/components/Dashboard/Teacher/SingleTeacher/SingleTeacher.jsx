import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function SingleTeacher() {
  const { id } = useParams();
  console.log(id);

  const { teachers } = useSelector((state) => state.teachers);
  console.log("teachers: ", teachers);

  return (  
    <div className="mt-10">
      <h1>Single Teacher</h1>
    </div>
  );
}
