import React from 'react';
import styled from 'styled-components';
import { TenantSelector } from '@cognite/gearbox';
import { ReactAuthProvider } from '@cognite/react-auth';
import { Layout } from './Layout';

const LoginWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0 0;

  > * {
    width: 400px;
  }
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tenant: '',
    };
  }

  onTenantSelected = async tenant => {
    this.setState({ tenant });
  };

  render() {
    const { tenant } = this.state;

    return (
      <ReactAuthProvider
        project={tenant}
        redirectUrl={window.location.href}
        errorRedirectUrl={window.location.href}
        usePopup={true}
        loginRenderer={
          <LoginWrapper>
            <TenantSelector
              header={'Type tenant name'}
              title="3D Localizator"
              initialTenant="publicdata"
              onTenantSelected={this.onTenantSelected}
            />
          </LoginWrapper>
        }
      >
        <Layout />
      </ReactAuthProvider>
    );
  }
}

export default App;
