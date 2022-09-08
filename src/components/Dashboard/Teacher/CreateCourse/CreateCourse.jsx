import { Col, Form, Input, Row, Select } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { createStudentClassRequest } from "../../../../Store/Actions/StudentClassReqAction";
import {
  hideLoading,
  showLoading,
} from "../../../../Store/reducers/alertSlice";

export default function CreateCourse() {
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



  const coursePic = "https://i.pinimg.com/474x/83/34/24/833424244cbf585cc789776110471d74.jpg"


  return (
    <div className="mt-6">
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
                    Create Class For Student
                  </h2>
                </div>
                <Form class="space-y-6" onFinish={onFinish}>
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-neutral-600"
                    >
                    Class  Title
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
                      Create Class Description{" "}
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

                  <form class="flex items-center space-x-6 mb-5">
                    <div class="shrink-0">
                      <img
                        class="h-16 w-16 object-cover rounded-md"
                        src={coursePic}
                        alt="Current dammy photo"
                      />
                    </div>
                    <label class="block">
                      <span class="sr-only">Choose Course photo</span>
                      <input type="file" class="upload-pic-input" />
                    </label>
                  </form>

                  <Form.Item>
                    <button
                      htmltype="submit"
                      type="submit"
                      class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Create Class
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
