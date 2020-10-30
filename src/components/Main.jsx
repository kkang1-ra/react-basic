import React from "react";
import EventsTrend from "./EventsTrend";
import Gauges from "./Gauges";
import StackedBars from "./StackedBars";
import Timeline from "./Timeline";
import EventsTable from "./EventsTable";

function Main() {
  return (
    <main>
      <div className="left-panel">
        <div className="oee-gauges section-panel">
          <div className="oee-main">
            <Gauges data={65} color={"#58E2C2"} name={"OEE"} />
          </div>
          <div className="oee-apq">
            <Gauges data={65} color={"#58E2C2"} name={"Availability"} />
          </div>
          <div className="oee-apq">
            <Gauges data={65} color={"#58E2C2"} name={"Performance"} />
          </div>
          <div className="oee-apq">
            <Gauges data={65} color={"#58E2C2"} name={"Quality"} />
          </div>
        </div>
        <div className="rate-losses section-panel">
          <StackedBars />
        </div>
        <div className="line-status section-panel">
          <div className="line-status-timeline">
            <Timeline />
          </div>
        </div>
      </div>
      <div className="right-panel">
        <div className="event section-panel">
          <div className="event-trend">
            <EventsTrend />
          </div>
          <div className="event-table">
            <EventsTable />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
