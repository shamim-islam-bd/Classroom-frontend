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
      <div className="grid grid-cols-2">
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
          <div className="">
            <h1 className="py-2">Payment Done</h1>
            <button
              onClick={() => LiveStreamRoute(teacher._id)}
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              LiveStream
            </button>
          </div>
        </div>
        <div>
          <div className="">
            <div class="max-w-lg mx-auto p-8">
              <details
                class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
                open
              >
                <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                  Why do they call it Ovaltine?
                </summary>
                <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <p>
                    The mug is round. The jar is round. They should call it
                    Roundtine.
                  </p>
                </div>
              </details>
            </div>
          </div>
          <div className="">
            <div class="max-w-lg mx-auto p-8">
              <details
                class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
                open
              >
                <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                  Why do they call it Ovaltine?
                </summary>
                <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <p>
                    The mug is round. The jar is round. They should call it
                    Roundtine.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
