import { Button, notification } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { AssetSearch, AssetScanner, Model3DViewer } from '@cognite/gearbox';
import { ThreeD } from '@cognite/sdk';
import { THREE } from '@cognite/3d-viewer';

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
    height: 100% !important;
    width: 100% !important;
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
  cache = {};

  constructor() {
    super();

    this.state = {
      asset: null,
      modelID: null,
      revisionID: null,
    };
  }

  async componentDidMount() {
    const { items: models } = await ThreeD.listModels();

    if (!models.length) {
      notification.error({
        description: 'Your Tenant doesn\'t have any models',
        message: 'Fail fetch models list',
      });

      return;
    }

    const { id: modelID } = models[0];
    const { items: revisions } = await ThreeD.listRevisions(modelID);

    if (!revisions.length) {
      notification.error({
        description: 'Model has no revisions',
        message: 'Fail fetch revisions list',
      });

      return;
    }

    const { id: revisionID } = revisions[0];

    this.setState({ modelID, revisionID });
  }

  onReady = async (viewer, model) => {
    const { asset } = this.state;

    if (!asset) return;

    const nodes = await this.findNodes();

    this.highlightNodes(viewer, model, nodes);
  };

  findNodes = async () => {
    const { asset, modelID, revisionID } = this.state;

    if (!asset) {
      return;
    }

    const { items } = await ThreeD.listAssetMappings(modelID, revisionID, {
      assetId: asset.id,
    });

    return items;
  };

  highlightNodes = (viewer, model, nodes) => {
    const { length } = nodes;

    if (!model || !viewer) {
      return;
    }

    model.deselectAllNodes();

    if (length === 1) {
      const { nodeId } = nodes[0];

      model.updateMatrixWorld();

      const reusableBox = new THREE.Box3();

      const bb = model.getBoundingBox(nodeId, reusableBox);

      model.selectNode(nodeId);

      if (!bb.isEmpty()) {
        viewer.fitCameraToBoundingBox(bb);
      }
    } else {
      nodes.forEach((node) =>
        // @ts-ignore
        model.selectNode(node.nodeId)
      );
    }
  };

  onLiveSearchSelect = async asset => {
    this.setState({ asset });
  };

  reset = () => this.setState({ asset: null });

  render() {
    const { asset, modelID, revisionID } = this.state;

    return (
      <Wrapper>
        <Header>
          <SearchWrapper>
            <AssetSearch onLiveSearchSelect={this.onLiveSearchSelect} />
          </SearchWrapper>
          <ActionsWrapper>
            <Button disabled={!asset} onClick={this.reset}>
              Scanner
            </Button>
          </ActionsWrapper>
        </Header>
        <Body>
          {asset && modelID && revisionID ? (
            <Model3DViewer
              modelId={modelID}
              revisionId={revisionID}
              assetId={asset.id}
              cache={this.cache}
              onReady={this.onReady}
            />
          ) : (
            <AssetScanner />
          )}
        </Body>
      </Wrapper>
    );
  }
}
