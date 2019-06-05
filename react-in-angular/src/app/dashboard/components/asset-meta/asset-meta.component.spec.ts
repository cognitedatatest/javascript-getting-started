import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetMetaComponent } from './asset-meta.component';

describe('AssetMetaComponent', () => {
  let component: AssetMetaComponent;
  let fixture: ComponentFixture<AssetMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
