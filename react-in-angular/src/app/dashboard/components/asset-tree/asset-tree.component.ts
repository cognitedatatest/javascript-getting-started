import * as React from 'react';
import ReactDOM  from 'react-dom';
import * as sdk from '@cognite/sdk';
import { AssetTree } from '@cognite/gearbox/dist/components/AssetTree';
import { OnSelectAssetTreeParams } from '@cognite/gearbox/dist/interfaces';
import { Component, OnInit, ElementRef } from '@angular/core';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-asset-tree',
  templateUrl: './asset-tree.component.html',
  styleUrls: ['./asset-tree.component.scss']
})
export class AssetTreeComponent implements OnInit {
  setAssetId: (asset: OnSelectAssetTreeParams) => void = this.asset.setAssetId.bind(this.asset);

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private asset: AssetService
  ) { }

  ngOnInit() {
    ReactDOM.render(
      React.createElement(AssetTree, {sdkInstance: sdk, onSelect: this.setAssetId}, null),
      this.elementRef.nativeElement,
      () => { console.log('Render callback') }
    );
  }

}
