import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  AllFavoriteTeacher,
  removeFavoriteTeacher,
} from "../../../../Store/Actions/StudentAction";
import { getAllTeachers } from "../../../../Store/Actions/TeachersAction";

export default function Favorites() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth.login);
  const { favoriteTeachers } = useSelector((state) => state.students);
  // console.log("favoriteTeachers: ", favoriteTeachers);
  // console.log("user id:", auth._id);

  useEffect(() => {
    dispatch(AllFavoriteTeacher(auth._id));
    dispatch(getAllTeachers());
  }, [dispatch, auth._id, favoriteTeachers]);

  const disLinked = (teacherId) => {
    dispatch(removeFavoriteTeacher(teacherId));
  };

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-3 sm:grid-rows-1 md:grid-cols-2 grid-cols-1">
        {favoriteTeachers?.map((teacher, index) => {
          return (
            <div className="card_session mt-6" key={index}>
              {/* {console.log(teacher)} */}
              <div className="title-total">
                <div className="flex items-center justify-between">
                  <div className="sm:flex items-center">
                    <img
                      className="h-20 w-20 inset-x-0 -top-8 block rounded-full sm:shrink-0"
                      src={teacher?.teacher_info?.avader?.url}
                      alt={teacher?.teacher_info?.name}
                    />
                    <div className="font-bold text-[13px] p-3">
                      <p className="font-bold text-sm ">
                        {teacher?.teacher_info?.name}
                      </p>
                      <p className="flex items-center py-1 text-green-900 ">
                        Online
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      navigate(`/dashboard/teachers/${teacher._id}`)
                    }
                    color="#2db7f5"
                    className="inline-block text-white bg-[#2db7f5] border border-[#2db7f5] rounded-full hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring"
                  >
                    <span className="flex text-sm px-1">
                      <i className="ri-eye-line px-1"></i>
                      Profile
                    </span>
                  </button>
                </div>

                <p className="text-[12px] py-3">
                  <span className="">{teacher?.specialist}</span>
                  <br />
                  <span className="">{teacher?.teacher_info?.email}</span>
                </p>
                <div className="flex justify-between">
                  <span
                    onClick={() =>
                      navigate(`/dashboard/private-session/${teacher._id}`)
                    }
                    className="link"
                  >
                    {" "}
                    <i className="ri-chat-2-line"></i>
                  </span>
                  <Link to="" className="link">
                    {teacher ? (
                      <i
                        onClick={() => disLinked(teacher._id)}
                        class="ri-dislike-fill"
                      ></i>
                    ) : (
                      <i className="ri-heart-line"></i>
                    )}
                  </Link>

                  {/* <p className="link">
                    <button
                      onClick={() => LiveStreamRoute(teacher._id)}
                      className="py-1 text-sm px-3 md:py-2 md:px-2 bg-[#2db7f5] text-white rounded-lg shadow-mdhover:bg-white border border-[#2db7f5] hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring"
                    >
                      Class
                    </button>
                  </p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
