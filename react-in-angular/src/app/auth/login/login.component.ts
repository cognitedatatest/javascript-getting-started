import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { TenantSelector, TenantSelectorProps } from '@cognite/gearbox/dist/components/TenantSelector';
import * as sdk from '@cognite/sdk';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private elementRef: ElementRef, private auth: UserService, private router: Router) { }

  private onTenantSelected() {
    this.router.navigate(['']);
  }

  private async validateTenenat(tenant): Promise<boolean> {
    try {
      const auth = await this.auth.login(tenant);

      return !!auth.idToken;
    } catch (e) {
      return false;
    }
  }

  ngOnInit() {
    const props: TenantSelectorProps = {
      title: 'React in Angular',
      onTenantSelected: () => this.onTenantSelected(),
      validateTenant: (tenant) => this.validateTenenat(tenant)
    };

    ReactDOM.render(
      React.createElement(TenantSelector, props, null),
      this.elementRef.nativeElement,
      () => { console.log('Render callback') }
    );
  }

}
