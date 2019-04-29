import React, { Component } from "react";
import { TimeseriesSearch, TimeseriesChart } from "@cognite/gearbox";
import "./Layout.css";

class Layout extends Component {
  
  state = {
    timeserieIds: []
  }

  onTimeserieSelectionChange = timeserieIds => {
    this.setState({ timeserieIds });
  }

  render() {
    const { timeserieIds } = this.state;
    return (
      <React.Fragment>
        <div className="left-side">
          <TimeseriesChart 
            timeseriesIds={timeserieIds} 
            start={Date.now() - 30*24*60*60*1000} 
            end={Date.now()} 
            zoomable={true} 
            contextChart={true} 
            panelHeight={700}
          />
        </div>
        <div className="right-side">
          <TimeseriesSearch 
            onTimeserieSelectionChange={this.onTimeserieSelectionChange} 
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Layout;
