import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/react";
import React from "react";

import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

import { Col, Layout, Row } from "antd";
// import { events } from "./data";

export default function classNamecheduling() {
  const events = [
    {
      id: 1,
      title: "event One",
      date: "2022-09-04",
      time: "8:00AM",
      trainers: [],
    },
    {
      id: 2,
      title: "event2",
      date: "2022-09-06",
      time: "11:00AM",
      trainers: [],
    },
    {
      id: 3,
      title: "events9",
      date: "2022-09-07",
      time: "12:00AM",
      trainers: [],
    },
    {
      id: 4,
      title: "events9",
      date: "2022-09-09",
      time: "12:00AM",
      trainers: [],
    },
    {
      id: 5,
      title: "Today2",
      date: "2022-09-15",
      time: "1:00AM",
      trainers: [],
    },
  ];

  // calendarRef = React.useRef();

  return (
    <div className="mt-5 p-1">
      <h2 className="text-2xl text-center font-extrabold text-neutral-600 my-3 py-3">
        className Time Date Scheduling
      </h2>
      <Layout>
        <Row>
          <Col className="p-3" span={24} sm={24} xm={24} md={24} lg={14}>
            <FullCalendar
              plugins={[dayGridPlugin, listPlugin]}
              // headerToolbar={{
              //   left: "today prev, next prevYear, nextYear",
              //   center: "title",
              //   right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              // }}
              initialView="listWeek"
              events={events}
            />
          </Col>
          <Col>
            <div className="p-3">
              <h1 className="text-center font-bold py-5">
                Dragable Manage task
              </h1>
              <li className="py-1">dragable bulet point for manageing task</li>
              <li className="py-1">dragable bulet point for manageing task</li>
              <li className="py-1">dragable bulet point for manageing task</li>
              <li className="py-1">dragable bulet point for manageing task</li>
              <li className="py-1">dragable bulet point for manageing task</li>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}
