import React, { Component } from "react";
import { TimeseriesSearch, TimeseriesChart } from "@cognite/gearbox";
import "./Layout.css";

class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
      timeserieIds: []
    }
  }

  onTimeserieSelectionChange = timeserieIds => {
    this.setState({ timeserieIds });
  }

  render() {
    const { timeserieIds } = this.state;
    return (
      <div className="main-layout">
        <div className="left-side">
          <TimeseriesChart timeseriesIds={timeserieIds} start={+Date.now() - 30*24*60*60*1000} end={+Date.now()} zoomable={true} contextChart={true} panelHeight={700}/>
        </div>
        <div className="right-side">
          <TimeseriesSearch onTimeserieSelectionChange={this.onTimeserieSelectionChange} />
        </div>
      </div>
    )
  }
}

export default Layout;