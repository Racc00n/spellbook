import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
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
    return element.all(by.css('input[type="checkbox"]')).first();
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
}
