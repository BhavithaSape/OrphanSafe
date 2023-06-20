import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanageComponent } from './orphanage.component';

describe('OrphanageComponent', () => {
  let component: OrphanageComponent;
  let fixture: ComponentFixture<OrphanageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrphanageComponent]
    });
    fixture = TestBed.createComponent(OrphanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
