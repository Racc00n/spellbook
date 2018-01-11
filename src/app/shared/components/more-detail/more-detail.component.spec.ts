import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailComponent } from './more-detail.component';

describe('MoreDetailComponent', () => {
  let component: MoreDetailComponent;
  let fixture: ComponentFixture<MoreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call alert with text when clicked', () => {
    const spy = spyOn(window, 'alert');
    const text = 'I am an amazing description!';
    const iElement = fixture.debugElement.query(By.css('i')).nativeElement;
    component.text = text;
    iElement.click();
    expect(spy).toHaveBeenCalledWith(text);
  })
});
