import React, { Component } from 'react';
import { CogniteClient } from '@cognite/sdk';

const project = 'publicdata';

class App extends Component {
  state = { assets: null }

  async componentDidMount() {
    const client = new CogniteClient({ appId: 'Cognite SDK tutorial' });
    client.loginWithOAuth({ project });
    const assets = await client.assets.list().autoPagingToArray({ limit: 10 });
    this.setState({ assets });
  }

  render() {
    const { assets } = this.state;
    return (
      <div className="App">  
        {assets && assets.map(asset => (
          <p key={asset.id}>
            {asset.name}
          </p>
        ))}
      </div>
    )
  }
}

export default App;
