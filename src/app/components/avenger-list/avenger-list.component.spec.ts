import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengerListComponent } from './avenger-list.component';

describe('AvengerListComponent', () => {
  let component: AvengerListComponent;
  let fixture: ComponentFixture<AvengerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvengerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
