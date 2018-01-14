import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {        
      let result = browser.get('/?qa=true');
      browser.waitForAngular();
      return result;
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getRightChevron() {
    return element(by.css('.fa-chevron-right'));
  }

  getLeftChevron() {
    return element(by.css('.fa-chevron-left'));
  }

  getFirstInput() {
    return element.all(by.css('input')).first();
  }

  getFirstLabel() {
    return element(by.css('label'));
  }

  getFirstTd(){
    return element.all(by.css('td')).first();
  }

  getFirstCheckBox(){
    return element.all(by.css('i.fa-square-o')).first();
  }
  getFirstButton(){
    return element.all(by.css('button')).first();
  }

  getFirstTBody(){
    return element.all(by.css('tbody')).first();
  }

  getTrCount() {
    return element.all(by.css('tr')).count();
  }

  getFirstElipsisIcon(){
    return element.all(by.css('td:nth-child(n+4) i')).first();
  }

  getFirstMinus() {
    return element.all(by.css('.fa-minus-circle')).first();
  }

  getFirstPlus() {
    return element.all(by.css('.fa-plus-circle')).first();
  }
}
