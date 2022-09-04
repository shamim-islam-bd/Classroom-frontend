import FullCalendar from "@fullcalendar/react";
import { Col, Layout, Row } from "antd";
import React from "react";
import { events } from "./data";

import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

export default function ClassScheduling() {
  return (
    <div className="mt-5 p-1">
      <h1>Hello Time Date</h1>
      <Layout>
        <Row>
          <Col className="p-3" span={24} sm={24} xm={24} md={24} lg={12}>
            <FullCalendar
              plugins={[dayGridPlugin, listPlugin]}
              initialView ='listWeek' 
              events={events}
            />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}
