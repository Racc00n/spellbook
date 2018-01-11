import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NumberPickerComponent } from './number-picker.component';


describe('NumberPickerComponent', () => {
  let component: NumberPickerComponent;
  let fixture: ComponentFixture<NumberPickerComponent>;
  let plus;
  let minus;  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    minus = fixture.debugElement.query(By.css('.fa-minus-circle')).nativeElement;
    plus = fixture.debugElement.query(By.css('.fa-plus-circle')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase value when clicking on +', () => {    
    component.value = 0;
    plus.click();
    expect(component.value).toBe(1);
  });
  
  it('should increase value when clicking on -', () => {
    component.value = 2;
    minus.click();
    expect(component.value).toBe(1);
  });

  it('should emit an event with the updated value after clicking +', () => {
    component.value = 0;
    const spy = spyOn(component.input,'emit');    
    plus.click();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should emit an event with the updated value after clicking -', () => {
    component.value = 2;
    const spy = spyOn(component.input,'emit');    
    minus.click();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should update the inner text when + or - are clicked', () => {
    component.value = 0;
    const innerTextBefore = fixture.debugElement.nativeElement.innerText;
    expect(innerTextBefore).toBe('0');
    plus.click();
    fixture.detectChanges();    
    const innerTextAfterPlus = fixture.debugElement.nativeElement.innerText;
    expect(innerTextAfterPlus).toBe('1');
    minus.click();
    fixture.detectChanges();    
    const innerTextAfterMinus = fixture.debugElement.nativeElement.innerText;
    expect(innerTextAfterMinus).toBe('0');
  });

  it('should not change value past the max', () => {
    component.value = 0;
    component.max = 2;
    plus.click();
    plus.click();
    plus.click();
    expect(component.value).toBe(2);
  });
  it('should not change value below the min', () => {
    component.min = 1;
    component.value = 3;
    minus.click();
    minus.click();
    minus.click();
    expect(component.value).toBe(1);
  });
});
