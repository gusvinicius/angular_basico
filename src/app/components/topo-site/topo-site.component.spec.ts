import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoSiteComponent } from './topo-site.component';

describe('TopoSiteComponent', () => {
  let component: TopoSiteComponent;
  let fixture: ComponentFixture<TopoSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopoSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopoSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
