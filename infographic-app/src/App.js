import React, { Component } from "react";
import { ReactAuthProvider } from "@cognite/react-auth";
import { TenantSelector } from "@cognite/gearbox";
import Layout from "./Layout";

class App extends Component {
  state = {
    tenant: null
  };

  onTenantSelected = tenant => {
    console.log("tenant", tenant);
    this.setState({ tenant });
  };

  render() {
    return (
      <div>
        {this.state.tenant ? (
          <ReactAuthProvider
            project={this.state.tenant}
            redirectUrl={window.location.href}
            errorRedirectUrl={window.location.href}
            enableTokenCaching
          >
            <Layout />
          </ReactAuthProvider>
        ) : (
          <TenantSelector
            title="Info App"
            initialTenant="publicdata"
            onTenantSelected={this.onTenantSelected}
          />
        )}
      </div>
    );
  }
}

export default App;
