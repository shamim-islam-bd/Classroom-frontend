import { Col, DatePicker, Form, Input, Row, Select, TimePicker } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors } from "../../../../Store/Actions/authActions";
import {
  createStudentclassRequest,
  deleteStudentclassRequest,
} from "../../../../Store/Actions/StudentclassReqAction";
import { getAllTeachers } from "../../../../Store/Actions/TeachersAction";
import {
  hideLoading,
  showLoading,
} from "../../../../Store/reducers/alertSlice";

export default function ClassRequest() {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [classRequest, setclassRequest] = useState([]);

  const { auth, error } = useSelector((state) => state.auth.login);
  const userId = auth._id;

  dispatch(showLoading());
  const onFinish = async (values) => {
    if (values) {
      dispatch(showLoading());
      dispatch(createStudentclassRequest(values));
      alert.success("Class created Successfully");
    } else {
      dispatch(hideLoading());
      alert.error("Please fill up all the fields");
    }
  };

  // delete className request useing id from database
  const deleteclassRequest = async (id) => {
    await axios
      .delete(`/student/deleteclassRequest/${id}`)
      .then((res) => {
        // console.log(res.data);
        dispatch(deleteStudentclassRequest(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // view teacher profile
  const ViewTeacher = async (id) => {
    console.log("view Teacher: ", id);

    navigate(`/dashboard/private-session/${id}`);
  };

  // geting All className requsest htmlFor loggin student
  useEffect(() => {
    axios.get("/students-class-Request").then((res) => {
      const result = res.data.studentClassRequest.filter(
        (item) => item.student === userId
      );
      setclassRequest(result);
    });
  }, [userId]);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  // useing dispatch htmlFor getting all teachers eve if reload the page.
  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch, deleteclassRequest]);

  //  const status = "pending";

  return (
    <div className="mt-10">
      {/* <h1 className="text-center font-semibold">classRequest</h1> */}
      <Row>
        <Col span={24} sm={24} xm={24} md={24} lg={12}>
          <div className="items-center">
            <div className="flex flex-col w-full transition duration-500 ease-in-out transhtmlForm bg-white">
              <div className="px-3">
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-extrabold text-neutral-600 mb-8">
                    Make class requst htmlForm
                  </h2>
                </div>
                <Form className="space-y-6" onFinish={onFinish}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Title
                    </label>
                    <Form.Item className="mt-1" name="title">
                      <Input
                        type="title"
                        placeholder="Your title"
                        className="classNameReq-input"
                      />
                    </Form.Item>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Post Description{" "}
                    </label>
                    <Form.Item className="mt-1" name="description">
                      <Input.TextArea
                        type="description"
                        placeholder="Your description"
                        className="classNameReq-input"
                      />
                      {/* {errors.email && <span role="alert">{errors.email.message}</span>} */}
                    </Form.Item>
                  </div>

                  <div>
                    <label
                      htmlFor="level"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Select Categories
                    </label>
                    <Form.Item className="mt-1" name="category">
                      <Select className="classNameReq-input">
                        <Select.Option value="">Select...</Select.Option>
                        <Select.Option value="Web Development">
                          Web Development
                        </Select.Option>
                        <Select.Option value="Mobile Development">
                          Mobile Development
                        </Select.Option>
                        <Select.Option value="Data Science">
                          Data Science
                        </Select.Option>
                        <Select.Option value="Artificial Intelligence">
                          Artificial Intelligence
                        </Select.Option>
                        <Select.Option value="Blockchain">
                          Blockchain
                        </Select.Option>
                        <Select.Option value="Machine Learning">
                          Machine Learning
                        </Select.Option>
                        <Select.Option value="Cryptocurrency">
                          Cryptocurrency
                        </Select.Option>
                        <Select.Option value="DevOps">DevOps</Select.Option>
                        <Select.Option value="Programming">
                          Programming
                        </Select.Option>
                        <Select.Option value="Software">Software</Select.Option>
                        <Select.Option value="Virtualization">
                          Virtualization
                        </Select.Option>
                        <Select.Option value="Web Design">
                          Web Design
                        </Select.Option>
                        <Select.Option value="UI/UX Design">
                          UI/UX Design
                        </Select.Option>
                        <Select.Option value="Other">Other</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Price{" "}
                    </label>
                    <Form.Item className="mt-1" name="price">
                      <Input
                        type="number"
                        placeholder="Your price"
                        className="classNameReq-input"
                      />
                      {/* {errors.password && <span role="alert">{errors.password.message}</span>} */}
                    </Form.Item>
                  </div>

                  <div>
                    <label
                      htmlFor="studentSlot"
                      className="block py-2 text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      StudentSlot{" "}
                    </label>
                    <Form.Item
                      className="mt-1"
                      name="studentSlot"
                      rules={[
                        {
                          required: true,
                          message: "Please select Student Slot!",
                        },
                      ]}
                    >
                      <Select className="classNameReq-input">
                        <Select.Option value="">Select...</Select.Option>
                        <Select.Option value="1">1</Select.Option>
                        <Select.Option value="5">5</Select.Option>
                        <Select.Option value="10">10</Select.Option>
                        <Select.Option value="unlimited">
                          unlimited
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <div>
                    <label
                      htmlFor="level"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Level
                    </label>
                    <Form.Item className="mt-1" name="level">
                      <Select className="classNameReq-input">
                        <Select.Option value="">Select...</Select.Option>
                        <Select.Option value="Beginner">Beginner</Select.Option>
                        <Select.Option value="Upper Beginner">
                          Upper Beginner
                        </Select.Option>
                        <Select.Option value="Intermediate">
                          Intermediate
                        </Select.Option>
                        <Select.Option value="Advanced">Advanced</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="flex items-center gap-5">
                    <div>
                      <label
                        htmlFor="level"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Select Date
                      </label>
                      <Form.Item
                        required
                        name="date"
                        // rules={[{ message: "Pick a date" }]}
                        size={12}
                      >
                        <DatePicker status="warning" />
                      </Form.Item>
                    </div>
                    <div>
                      <label
                        htmlFor="level"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Select Time
                      </label>
                      <Form.Item
                        required
                        name="time"
                        // rules={[{ message: "Pick a time" }]}
                        size={12}
                      >
                        <TimePicker.RangePicker status="warning" />
                      </Form.Item>
                    </div>
                  </div>

                  <Form.Item>
                    <button
                      htmltype="submit"
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Create Request
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Col>
        <Col className="sm:mt-10" span={24} sm={24} xm={24} md={24} lg={12}>
          <h2 className="text-2xl text-center font-extrabold text-neutral-600 mb-8">
            My Requsted classes
          </h2>
          <div className="overflow-scroll">
            <div className="relative">
              {classRequest.map((item) => (
                <div
                  className="p-4 border m-2 text-sm flex justify-between"
                  key={item._id}
                >
                  {/* {console.log(item._id)} */}
                  <div>
                    <p className="font-semibold">Title: {item.title}</p>
                    <p className="">Price: {item.price} $</p>
                    <p className="my-2">
                      category:{" "}
                      <span className="bg-green-200 px-1 rounded">
                        {item.category}
                      </span>
                    </p>
                    <p>Created At: {item.date}</p>
                  </div>
                  <div className="text-end">
                    <i
                      onClick={() => {
                        deleteclassRequest(item._id);
                      }}
                      className="ri-delete-bin-6-line text-2xl cursor-pointer text-red-600"
                    ></i>
                    <div className="flex text-sm">
                      {item.status === "pending" ? (
                        <p className="text-yellow-500 rounded-sm mt-5 p-2">
                          Pending
                        </p>
                      ) : (
                        <>
                          {/* <Link to="/dashboard/session-room"> */}
                          <button
                            onClick={() => ViewTeacher(item.Accptedteacher[0])}
                            className="btn-profile mt-5"
                          >
                            View Teacher
                          </button>
                          {/* </Link> */}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
