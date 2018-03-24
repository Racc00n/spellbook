import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoreDetailComponent } from './more-detail.component';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({ template: '' })
export class DummyComponent {

}
describe('MoreDetailComponent', () => {
  let component: MoreDetailComponent;
  let fixture: ComponentFixture<MoreDetailComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoreDetailComponent, DummyComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'text-description/:spell', component: DummyComponent }
        ])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDetailComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to text-description with its spell input', () => {
    const spy = spyOn(router, 'navigate');
    const text = 'acid spray';
    const iElement = fixture.debugElement.query(By.css('i')).nativeElement;
    component.spell = text;
    iElement.click();
    expect(spy).toHaveBeenCalledWith(['text-description', text], { relativeTo: route });
  });
});
