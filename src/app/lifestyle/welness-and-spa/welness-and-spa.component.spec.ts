import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelnessAndSpaComponent } from './welness-and-spa.component';

describe('WelnessAndSpaComponent', () => {
  let component: WelnessAndSpaComponent;
  let fixture: ComponentFixture<WelnessAndSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelnessAndSpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelnessAndSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
