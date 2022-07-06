import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilkThreadJewelleryComponent } from './silk-thread-jewellery.component';

describe('SilkThreadJewelleryComponent', () => {
  let component: SilkThreadJewelleryComponent;
  let fixture: ComponentFixture<SilkThreadJewelleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilkThreadJewelleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilkThreadJewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
