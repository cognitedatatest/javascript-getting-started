import React, { Component } from 'react';
import { CogniteClient, POPUP, loginPopupHandler, isLoginPopupWindow } from '@cognite/sdk';

const project = 'publicdata';

class App extends Component {
  state = {
    assets: null,
    client: null
  }

  async componentDidMount() {
    if(isLoginPopupWindow()) {
      loginPopupHandler();
      return;
    }

    const client = new CogniteClient({ appId: 'Cognite SDK tutorial' });
    client.loginWithOAuth({
      project,
      onAuthenticate: POPUP
    });
    this.setState({ client });
  }

  fetchAssets = async () => {
    const { client } = this.state;
    const assets = await client.assets.list().autoPagingToArray({ limit: 10 });
    this.setState({ assets });
  }

  renderAssets = () => {
    return (
      <>
        {this.state.assets.map(asset => (
          <p key={asset.id}>
            {asset.name}
          </p>
        ))}
      </>
    )
  }

  render() {
    const { assets } = this.state;
    return (
      <div className="App">  
        {assets ? this.renderAssets() : <button onClick={this.fetchAssets}><h1>Click here to fetch assets from Cognite</h1></button>}
      </div>
    )
  }
}

export default App;
