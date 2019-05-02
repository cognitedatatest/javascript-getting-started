import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { AssetSearch, AssetScanner } from "@cognite/gearbox";

const Wrapper = styled('div')`
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;

const Header = styled('div')`
    display: flex;
    padding: 10px;
    background-color: blue;
    position: relative;
    z-index: 1;
`;

const Body = styled('div')`
    padding: 10px;
    position: relative;
    flex: 1;
    display: flex;
    z-index: 0;
    
    > div {
        height: 100%!important;
        width: 100%!important;
    }
`;

const SearchWrapper = styled('div')`
	display: flex;
	flex: 1;
`;

const ActionsWrapper = styled('div')`
	flex: 0;
	margin-left: 5px;
`;

export class Layout extends React.Component {
	constructor() {
		super();

		this.state = {
			asset: null,
		}
	}

	onLiveSearchSelect = (asset) => {
		console.log(asset);

		this.setState({asset});
	};

	reset = () => this.setState({asset: null});

	render() {
		const { asset } = this.state;

		return (
			<Wrapper>
				<Header>
					<SearchWrapper>
						<AssetSearch onLiveSearchSelect={this.onLiveSearchSelect} />
					</SearchWrapper>
					<ActionsWrapper>
						<Button disabled={!asset} onClick={this.reset}>Scanner</Button>
					</ActionsWrapper>
				</Header>
				<Body>
					{
						asset
							? <p>Success</p>
							: <AssetScanner />
					}
				</Body>
			</Wrapper>
		);
	}
}
