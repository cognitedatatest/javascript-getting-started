import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetService } from './services/asset.service';

import { DashboardComponent } from './dashboard.component';
import { AssetTreeComponent } from './components/asset-tree/asset-tree.component';
import { AssetMetaComponent } from './components/asset-meta/asset-meta.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AssetTreeComponent,
    AssetMetaComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AssetService
  ]
})
export class DashboardModule { }
