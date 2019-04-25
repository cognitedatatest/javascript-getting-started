import React from "react";
import { TenantSelector } from "@cognite/gearbox";
import * as sdk from "@cognite/sdk";
import AssetExplorerContainer from "../../containers/AssetExplorerContainer/AssetExplorerContainer";
import styled from "styled-components";
import "antd/dist/antd.css";

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
    if (sdk.Login.isPopupWindow()) {
      sdk.Login.popupHandler();
      return;
    }
    await sdk.Login.authorize({
      popup: true,
      project: tenant,
      redirectUrl: window.location.href,
      errorRedirectUrl: window.location.href
    });

    this.setState({ tenant });
  };

  render() {
    return (
      <PageContainer>
        {this.state.tenant ? (
          <AssetExplorerContainer />
        ) : (
          <TenantSelectorContainer>
            <TenantSelector
              onTenantSelected={this.handleTenantSelect}
              initialTenant="publicdata"
              title="Asset Explorer"
            />
          </TenantSelectorContainer>
        )}
      </PageContainer>
    );
  }
}

export default AssetExplorer;
