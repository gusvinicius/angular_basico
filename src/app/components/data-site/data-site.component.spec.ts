import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSiteComponent } from './data-site.component';

describe('DataSiteComponent', () => {
  let component: DataSiteComponent;
  let fixture: ComponentFixture<DataSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
