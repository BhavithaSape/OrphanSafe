import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectnewComponent } from './connectnew.component';

describe('ConnectnewComponent', () => {
  let component: ConnectnewComponent;
  let fixture: ComponentFixture<ConnectnewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectnewComponent]
    });
    fixture = TestBed.createComponent(ConnectnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
