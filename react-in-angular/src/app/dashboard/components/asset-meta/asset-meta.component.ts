import * as React from 'react';
import ReactDOM  from 'react-dom';
import * as sdk from '@cognite/sdk';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
// import { AssetMeta } from '@cognite/gearbox/dist/components/AssetMeta'
import { AssetMetaProps } from '@cognite/gearbox';
import { AssetMetaControlled } from '@cognite/gearbox/dist/components/AssetMetaControlled'
import { AssetService } from '../../services/asset.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-asset-meta',
  templateUrl: './asset-meta.component.html',
  styleUrls: ['./asset-meta.component.scss']
})
export class AssetMetaComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private emitter = new BehaviorSubject<AssetMetaProps>(null);
  private observable$ = this.emitter.asObservable();

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private a: AssetService,
  ) {

  }

  ngOnInit(): void {
    ReactDOM.render(
      // @ts-ignore
      React.createElement(AssetMetaControlled, {observable: this.observable$}, null),
      this.elementRef.nativeElement
    );
    this.a.asset$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(assetId => this.renderAssetMeta(assetId));
  }

  renderAssetMeta(assetId: number | string) {
    this.emitter.next({assetId: Number(assetId), sdkInstance: sdk});
    // this.unmountComponent();
    // this.mountComponent(assetId)
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
      React.createElement(AssetMeta, {sdkInstance: sdk, assetId}, null),
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
