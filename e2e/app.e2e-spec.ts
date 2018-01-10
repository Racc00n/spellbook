import { AppPage } from './app.po';
import { Key, browser } from 'protractor';
import { timeout } from 'q';

describe('spellbook App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('Navigation',()=> {
    it('should display Spells Per Day', () => {
      page.navigateTo();
      expect(page.getParagraphText()).toEqual('Spells Per Day');
    });

    it('should move to Spells Setup when clicking on right chevron', () => {
      page.getRightChevron().click();
      expect(page.getParagraphText()).toEqual('Spells Setup');
    });
    
    it('should move to Spells Use when clicking on right chevron the second time', () => {
      page.getRightChevron().click();
      expect(page.getParagraphText()).toEqual('Spells Use');
    });
    
    it('should move back to Spells Setup when clicking on left chevron', () => {
      page.getLeftChevron().click();
      expect(page.getParagraphText()).toEqual('Spells Setup');
    });

    it('should move back to Spells Per Day when clicking on left chevron the second time', () => {
      page.getLeftChevron().click();
      expect(page.getParagraphText()).toEqual('Spells Per Day');
    });
  });

  describe('Usage',() => {
    it('should set spellLevel for level 0 to 10 and see it in spell setup (max allowed)', () => {      
      page.getFirstInput().sendKeys(Key.CONTROL, 'a', Key.NULL,'10');      
      page.getRightChevron().click();
      expect(page.getFirstLabel().getText()).toContain('/10)');
    });
    it('should set 2 prepared uses on first spell and see it on total Perpared count and on spells uses', () => {      
      page.getFirstCheckBox().click();      
      page.getFirstInput().sendKeys(Key.CONTROL, 'a', Key.NULL,'2');      
      expect(page.getFirstLabel().getText()).toContain('(2/');
      page.getRightChevron().click();      
      expect(page.getFirstTd().getText()).toBe('2');
    });
    it('should click cast once (spell uses) and see that the number of uses is reduced to 1 ', () => {      
      page.getFirstButton().click();
      expect(page.getFirstTd().getText()).toBe('1');
      browser.sleep(500);
    });
    it('should click another time (spell uses) and see that the item is removed ', () => {      
      page.getFirstButton().click();
      browser.sleep(500);      
      expect(page.getTrCount()).toBe(0);
    });
  });
});
