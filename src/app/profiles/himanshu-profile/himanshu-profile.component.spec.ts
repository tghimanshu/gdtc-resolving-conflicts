import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimanshuProfileComponent } from './himanshu-profile.component';

describe('HimanshuProfileComponent', () => {
  let component: HimanshuProfileComponent;
  let fixture: ComponentFixture<HimanshuProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HimanshuProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HimanshuProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
