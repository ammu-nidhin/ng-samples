import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerracottaJewelleryComponent } from './terracotta-jewellery.component';

describe('TerracottaJewelleryComponent', () => {
  let component: TerracottaJewelleryComponent;
  let fixture: ComponentFixture<TerracottaJewelleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerracottaJewelleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerracottaJewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
