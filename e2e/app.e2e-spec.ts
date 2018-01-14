import { AppPage } from './app.po';
import { Key, browser, protractor } from 'protractor';
import { timeout } from 'q';

describe('spellbook App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();        
  });
  describe('Navigation',()=> {
    it('should display Spell Class', () => {
      page.navigateTo();      
      expect(page.getParagraphText()).toEqual('Spell Class');
    });
    it('should move to Spells Per Day when clicking on right chevron', () => {
      page.getRightChevron().click();
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
      page.navigateTo();
      page.getRightChevron().click();  
      // page.getFirstInput().sendKeys(Key.CONTROL, 'a', Key.NULL,'10');      
      let firstPlus = page.getFirstPlus();//level 0 is 4 by default
      firstPlus.click();
      firstPlus.click();
      firstPlus.click();
      firstPlus.click();
      firstPlus.click();
      firstPlus.click();
      page.getRightChevron().click();
      expect(page.getFirstLabel().getText()).toContain('/10)');
    });
    it('should click on the description of a spell and open an alert', () => {    
      page.getFirstElipsisIcon().click();
      browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000);      
      browser.switchTo().alert().accept();
    })
    it('should set 2 prepared uses on first spell and see it on total Perpared count and on spells uses', () => {      
      page.getFirstCheckBox().click();      
      page.getFirstPlus().click();
      page.getFirstPlus().click();
      expect(page.getFirstLabel().getText()).toContain('(2/');
      page.getRightChevron().click();      
      expect(page.getFirstTd().getText()).toBe('2');
    });
    it('should click cast once (spell uses) and see that the number of uses is reduced to 1 ', () => {      
      page.getFirstButton().click();
      expect(page.getFirstTd().getText()).toBe('1');      
    });
    it('should click another time (spell uses) and see that the item is removed ', () => {      
      page.getFirstButton().click();          
      expect(page.getTrCount()).toBe(0);
    });
    
  });
});
