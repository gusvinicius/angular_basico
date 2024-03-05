import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSiteComponent } from './lista-site.component';

describe('ListaSiteComponent', () => {
  let component: ListaSiteComponent;
  let fixture: ComponentFixture<ListaSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
