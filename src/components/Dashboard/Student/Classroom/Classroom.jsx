import { Col, Row } from "antd";
import React from "react";

export default function classNameroom() {
  return (
    <div>
      <Row>
        <Col xm={24} sm={24} md={12} lg={12}>
          <section>
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
              <div className="grid grid-cols-1">
                <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                  <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-8 rounded-full shadow-xl aboslute"
                    src="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_DUFTlhOdmSdoT9F4r1Woo40pyML2.webp"
                  />

                  <div className="p-6 lg:text-center">
                    <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                      {" "}
                      Info
                    </span>
                    <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                      Michael Andreuzza
                    </h4>
                    <p className="mt-3 text-base leading-relaxed text-gray-500">
                      Free and Premium themes, UI Kit's, templates and landing
                      pages built with Tailwind CSS, HTML &amp; Next.js.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        View profile{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Col>
        <Col xm={24} sm={24} md={12} lg={12}>
          <section>
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
              <div className="grid grid-cols-1">
                <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                  <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-8 rounded-full shadow-xl aboslute"
                    src="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_DUFTlhOdmSdoT9F4r1Woo40pyML2.webp"
                  />

                  <div className="p-6 lg:text-center">
                    <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                      {" "}
                      Info
                    </span>
                    <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                      Michael Andreuzza
                    </h4>
                    <p className="mt-3 text-base leading-relaxed text-gray-500">
                      Free and Premium themes, UI Kit's, templates and landing
                      pages built with Tailwind CSS, HTML &amp; Next.js.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        View profile{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
}
