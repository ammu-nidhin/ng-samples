import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryItemComponent } from './jewellery-item.component';

describe('JewelleryItemComponent', () => {
  let component: JewelleryItemComponent;
  let fixture: ComponentFixture<JewelleryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelleryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
