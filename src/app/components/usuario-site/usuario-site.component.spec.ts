import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSiteComponent } from './usuario-site.component';

describe('UsuarioSiteComponent', () => {
  let component: UsuarioSiteComponent;
  let fixture: ComponentFixture<UsuarioSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
