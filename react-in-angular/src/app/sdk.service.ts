import * as sdk from '@cognite/sdk';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SdkService {

  constructor() {
    const {cognite: {project, apiKey}} = environment;

    sdk.configure({
      project,
      apiKey,
    });

    return sdk;
  }
}
