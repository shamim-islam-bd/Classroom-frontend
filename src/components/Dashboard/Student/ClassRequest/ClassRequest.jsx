import { Col, DatePicker, Form, Input, Row, Select, TimePicker } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  createStudentClassRequest,
  deleteStudentClassRequest,
} from "../../../../Store/Actions/StudentClassReqAction";
import { clearErrors } from "../../../../Store/Actions/userActions";
import {
  hideLoading,
  showLoading,
} from "../../../../Store/reducers/alertSlice";

// const { RangePicker } = DatePicker;

export default function ClassRequest() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const { user, error, isAuthenticated } = useSelector((state) => state.user);

  const { AllStudentClassRequest } = useSelector(
    (state) => state.ClassReqByStudent
  );
  // console.log("frm classreq student: ", createClassRequest);

  dispatch(showLoading());

  const onFinish = async (values) => {
    // const onFinish = (values) => { values}
    await axios
      .post("/student/makeclassRequest", values)
      .then((res) => {
        dispatch(hideLoading());
        alert.success("You are successfully logged in");
        dispatch(createStudentClassRequest(values));
      })
      .catch((err) => {
        console.log(err);
        dispatch(hideLoading());
        setErrorMessage(err.res?.data.message);
      });
  };

  // delete class request useing id from database
  const deleteClassRequest = async (id) => {
    await axios
      .delete(`/student/deleteClassRequest/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(deleteStudentClassRequest(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error, AllStudentClassRequest]);

  return (
    <div className="mt-10">
      {/* <h1 className="text-center font-semibold">ClassRequest</h1> */}
      <Row>
        <Col span={24} sm={24} xm={24} md={24} lg={12}>
          <div class="items-center">
            <div class="flex flex-col w-full transition duration-500 ease-in-out transform bg-white">
              <div class="px-3">
                {errorMessage && (
                  <p class="text-red-500 text-sm">{errorMessage}</p>
                )}
                <div className="flex justify-between items-center">
                  <h2 class="text-2xl font-extrabold text-neutral-600 mb-8">
                    Make class requst form
                  </h2>
                </div>
                <Form class="space-y-6" onFinish={onFinish}>
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      Title
                    </label>
                    <Form.Item class="mt-1" name="title">
                      <Input
                        type="title"
                        placeholder="Your title"
                        class="classReq-input"
                      />
                    </Form.Item>
                  </div>

                  <div>
                    <label
                      for="description"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Post Description{" "}
                    </label>
                    <Form.Item class="mt-1" name="description">
                      <Input.TextArea
                        type="description"
                        placeholder="Your description"
                        class="classReq-input"
                      />
                      {/* {errors.email && <span role="alert">{errors.email.message}</span>} */}
                    </Form.Item>
                  </div>

                  <div>
                    <label
                      for="level"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      Select Categories
                    </label>
                    <Form.Item class="mt-1" name="category">
                      <Select className="classReq-input">
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
                      for="price"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Price{" "}
                    </label>
                    <Form.Item class="mt-1" name="price">
                      <Input
                        type="number"
                        placeholder="Your price"
                        class="classReq-input"
                      />
                      {/* {errors.password && <span role="alert">{errors.password.message}</span>} */}
                    </Form.Item>
                  </div>

                  <div>
                    <label
                      for="studentSlot"
                      class="block py-2 text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      StudentSlot{" "}
                    </label>
                    <Form.Item
                      class="mt-1"
                      name="studentSlot"
                      rules={[
                        {
                          required: true,
                          message: "Please select Student Slot!",
                        },
                      ]}
                    >
                      <Select className="classReq-input">
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
                      for="level"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      Level
                    </label>
                    <Form.Item class="mt-1" name="level">
                      <Select className="classReq-input">
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
                        for="level"
                        class="block text-sm font-medium text-neutral-600"
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
                        for="level"
                        class="block text-sm font-medium text-neutral-600"
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
                      class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Create Request
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} sm={24} xm={24} md={24} lg={12}>
          <h2 class="text-2xl text-center font-extrabold text-neutral-600 mb-8">
            My Requsted Classes
          </h2>
          <div className="overflow-scroll">
            <div className="relative">
              {AllStudentClassRequest.filter(
                (item) => item.student === user._id
              ).map((item) => (
                <div
                  className="p-4 border m-2 text-sm flex justify-between"
                  key={item._id}
                >
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
                        deleteClassRequest(item._id);
                      }}
                      class="ri-delete-bin-6-line text-2xl cursor-pointer text-red-600"
                    ></i>
                    <p className="p-2 bg-sky-100 text-[12px] rounded-sm mt-5">
                      {item.status}
                    </p>
                  </div>
                </div>
              ))}
              <img src="" alt="" srcset="" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
