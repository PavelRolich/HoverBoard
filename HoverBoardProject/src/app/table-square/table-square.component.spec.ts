import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSquareComponent } from './table-square.component';

describe('TableSquareComponent', () => {
  let component: TableSquareComponent;
  let fixture: ComponentFixture<TableSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
