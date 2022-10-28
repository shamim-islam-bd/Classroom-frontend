import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleTeacher } from "../../../../Store/Actions/TeachersAction";

export default function PaymentInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { teacher } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(getSingleTeacher(id));
  }, [dispatch]);

  const LiveStreamRoute = (id) => {
    navigate(`/dashboard/live-stream/${id}`);
  };

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center">
        <div className="card p-4">
          <div className="card-header">
            <h3 className="card-title">Payment Info</h3>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, veniam.
              </p>
            </div>
          </div>
        </div>
        <div className="card p-3">
          <h1 className="py-2">Payment Done</h1>
          <button
            onClick={() => LiveStreamRoute(teacher._id)}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            LiveStream
          </button>
        </div>
      </div>
    </div>
  );
}
