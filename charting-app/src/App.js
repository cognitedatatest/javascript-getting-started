import React, { Component } from 'react';
import { TenantSelector } from '@cognite/gearbox';
import { ReactAuthProvider } from '@cognite/react-auth';
import 'antd/dist/antd.css';
import './App.css';
import Layout from "./Layout";


class App extends Component {
  
  state = {
    tenant: null
  };

  render() {
    return (
      <div className="main-layout">
        <ReactAuthProvider 
          project={this.state.tenant}
          redirectUrl={window.location.href}
          errorRedirectUrl={window.location.href}
          usePopup
          loginRenderer={
            <div className="tenant-selector-container">
              <TenantSelector
                title="Charting App"
                initialTenant="publicdata"
                onTenantSelected={tenant => this.setState({ tenant })}
              />
            </div>
          }>
          <Layout />
        </ReactAuthProvider>
      </div>
    );
  }
}

export default App;
