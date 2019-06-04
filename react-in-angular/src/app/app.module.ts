import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetTreeComponent } from './asset-tree/asset-tree.component';
import { AssetMetaComponent } from './asset-meta/asset-meta.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssetTreeComponent,
    AssetMetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
