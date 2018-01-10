import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
export class AnimationsModule {
  static forRoot():any{
    return window.location.search.indexOf('qa=true') > -1 ? NoopAnimationsModule : BrowserAnimationsModule;  
  }  
}