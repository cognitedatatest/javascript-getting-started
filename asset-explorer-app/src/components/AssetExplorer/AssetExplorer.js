import React from 'react';
import { TenantSelector } from '@cognite/gearbox';
import { ReactAuthProvider } from '@cognite/react-auth';
import AssetExplorerContainer from '../../containers/AssetExplorerContainer/AssetExplorerContainer';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TenantSelectorContainer = styled.div`
  max-width: 600px;
  min-width: 400px;
`;

class AssetExplorer extends React.Component {
  state = {
    tenant: null
  };

  handleTenantSelect = async tenant => {
    this.setState({ tenant });
  };

  render() {
    return (
      <PageContainer>
        <ReactAuthProvider
          project={this.state.tenant}
          redirectUrl={window.location.href}
          errorRedirectUrl={window.location.href}
          usePopup={true}
          loginRenderer={
            <TenantSelectorContainer>
              <TenantSelector
                onTenantSelected={this.handleTenantSelect}
                initialTenant='itera-dev'
                title='TimeseriesConnector'
              />
            </TenantSelectorContainer>
          }
        >
          <AssetExplorerContainer />
        </ReactAuthProvider>
      </PageContainer>
    );
  }
}

export default AssetExplorer;
