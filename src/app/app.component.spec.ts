import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  template: ''
})
class DummyComponent { }

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DummyComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: DummyComponent }
        ])
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
