import React, { Component } from 'react';
import { TenantSelector } from '@cognite/gearbox';
import * as sdk from '@cognite/sdk';
import 'antd/dist/antd.css';
import Layout from "./Layout";


class App extends Component {
  constructor() {
    super();
    this.state = {
      tenant: null
    };
  }

  componentDidMount() {
    if(sdk.Login.isPopupWindow()) {
      sdk.Login.popupHandler();
      return;
    }
  }

  onTenantSelected = async tenant => {
    await sdk.Login.authorize({
      popup: true,
      project: tenant,
      redirectUrl: window.location.href,
      errorRedirectUrl: window.location.href,
    });

    this.setState({ tenant });
  };

  render() {
    return (
      <div>
        {this.state.tenant ? (
              <Layout />
        ) : (
          <TenantSelector
            title="Charting App"
            initialTenant="publicdata"
            onTenantSelected={this.onTenantSelected}
          />
        )}
      </div>
    );
  }
}

export default App;
