import React, { Component } from "react";
import { TimeseriesSearchAndSelect, SensorOverlay } from "@cognite/gearbox";
import "./Layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeserieIds: [],
      isImageLoaded: false
    };
    this.imageRef = React.createRef();
  }

  onTimeserieSelectionChange = timeserieIds => {
    this.setState({ timeserieIds });
  };

  onFileSelected = event => {
    if (event.target && event.target.files && event.target.files.length) {
      const selectedFile = event.target.files[0];
      if (this.imageRef && this.imageRef.current) {
        this.imageRef.current.src = URL.createObjectURL(selectedFile);
        this.setState({ isImageLoaded: true });
      }
    }
  };

  render() {
    return (
      <div className="main-layout">
        <div className="left-side">
          <input type="file" onChange={this.onFileSelected} />
          <SensorOverlay timeserieIds={this.state.timeserieIds}>
            <img
              alt=""
              ref={this.imageRef}
              style={{
                width: "100%",
                display: this.state.isImageLoaded ? "block" : "none"
              }}
            />
          </SensorOverlay>
        </div>
        <div className="right-side">
          <TimeseriesSearchAndSelect
            onTimeserieSelectionChange={this.onTimeserieSelectionChange}
          />
        </div>
      </div>
    );
  }
}

export default Layout;
