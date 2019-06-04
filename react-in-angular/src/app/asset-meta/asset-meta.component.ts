import * as React from 'react';
import ReactDOM  from 'react-dom';
import { AssetMeta } from '@cognite/gearbox/dist/components/AssetMeta'
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';
import { SdkService } from '../sdk.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-asset-meta',
  templateUrl: './asset-meta.component.html',
  styleUrls: ['./asset-meta.component.scss']
})
export class AssetMetaComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private a: AssetService,
    private sdk: SdkService,
  ) {

  }

  ngOnInit(): void {
    this.a.asset$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(assetId => this.renderAssetMeta(assetId));
  }

  renderAssetMeta(assetId: number | string) {
    this.unmountComponent();
    this.mountComponent(assetId)
  }

  /**
   * This function will unmount React component each time when we will need to change
   * assetId value for AssetMeta. It's horrible for rendering performance cause it's killing
   * VirtualDOM benefits of using React.
   *
   * Possible solution – wrap each gearbox component in HOC, which adds additional Observable prop.
   * We can emmit some changes in Angular app and listening for them in React component to perform rerender
   * instead of unmounting React component from DOM and reinit new one with new props. I'll provide
   * such solution in next version
   * @param assetId
   */
  private mountComponent(assetId: number | string) {
    ReactDOM.render(
      // @ts-ignore
      React.createElement(AssetMeta, {sdkInstance: this.sdk, assetId}, null),
      this.elementRef.nativeElement
    );
  }

  private unmountComponent() {
    ReactDOM.unmountComponentAtNode(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    this.unmountComponent();
  }
}
