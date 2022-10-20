import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelUpdateComponent } from './add-del-update.component';

describe('AddDelUpdateComponent', () => {
  let component: AddDelUpdateComponent;
  let fixture: ComponentFixture<AddDelUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDelUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
