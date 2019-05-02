import React from 'react';
import { TenantSelector } from '@cognite/gearbox';
import * as sdk from '@cognite/sdk';
import { Layout } from './Layout';


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			isAuthorized: false,
		}
	}

	onTenantSelected = async tenant => {
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

		this.setState({ isAuthorized: true });
	};

	render() {
		const { isAuthorized } = this.state;

		return isAuthorized
			? (<Layout />)
			: (
				<TenantSelector
					title="3D Localizator"
					initialTenant="publicdata"
					onTenantSelected={this.onTenantSelected}
				/>
			)
	}

}

export default App;
