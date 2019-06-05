import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OnSelectAssetTreeParams } from '@cognite/gearbox/dist/interfaces';

@Injectable()
export class AssetService {
  private asset: BehaviorSubject<number | string> = new BehaviorSubject<number | string>(0);

  public asset$: Observable<number | string> = this.asset.asObservable();

  constructor() {}

  setAssetId(asset: OnSelectAssetTreeParams) {
    const { key } = asset;
    this.asset.next(key);
  }
}
