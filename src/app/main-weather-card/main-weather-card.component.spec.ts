import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWeatherCardComponent } from './main-weather-card.component';

describe('MainWeatherCardComponent', () => {
  let component: MainWeatherCardComponent;
  let fixture: ComponentFixture<MainWeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
