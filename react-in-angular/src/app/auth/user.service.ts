import * as sdk from '@cognite/sdk';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: sdk.AuthResult;
  constructor() { }

  async login(project: string): Promise<sdk.AuthResult> {
    this.user = await sdk.Login.authorize({
      project,
      redirectUrl: window.location.href,
      errorRedirectUrl: window.location.href,
      popup: true,
    });

    return this.user;
  }

  isAuthorized(): boolean {
    return !!(this.user && this.user.idToken)
  }

  async logout() {
    return await sdk.Logout.logout();
  }
}
