import React, { Component } from 'react';
import { ReactAuthProvider } from "@cognite/react-auth";
import { TenantSelector } from "@cognite/gearbox";
import 'antd/dist/antd.css';
import Layout from "./Layout";


class App extends Component {
  constructor() {
    super();
    const route = window.location.pathname.replace("/", "");
    this.state = {
      tenant: route || null
    };
  }

  async componentDidMount() {
    window.onpopstate = event => {
      this.setState({ tenant: (event.state && event.state.tenant) || null });
    }
  }

  onTenantSelected = tenant => {
    this.setState({ tenant });
    window.history.pushState({ tenant }, "", `/${tenant}`);
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
