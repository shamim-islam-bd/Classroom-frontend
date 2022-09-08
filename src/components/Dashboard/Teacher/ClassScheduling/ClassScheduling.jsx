import "@fullcalendar/core/vdom"; // solves problem with Vite
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";

import React from "react";

import { Col, Layout, Row } from "antd";
import { events } from "./data";

// import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

export default function ClassScheduling() {
  return (
    <div className="mt-5 p-1">
      <h2 class="text-2xl text-center font-extrabold text-neutral-600 my-3 py-3">
        Class Time Date Scheduling
      </h2>
      <Layout>
        <Row>
          <Col className="p-3" span={24} sm={24} xm={24} md={24} lg={14}>
            <FullCalendar
              plugins={[dayGridPlugin, listPlugin]}
              headerToolbar={{
                left: "today prev,next prevYear,nextYear",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
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
