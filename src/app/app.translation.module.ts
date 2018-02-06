import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateService } from '@ngx-translate/core';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/DE/', '.json');
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [Http]
  }
};

@NgModule({
  imports: [TranslateModule.forRoot(translationOptions)],
  exports: [TranslateModule],
  providers: [TranslateService]
})
export class AppTranslationModule {
  constructor(private translate: TranslateService) {
      translate.addLangs(["en"]);
      translate.setDefaultLang('en');
      translate.use('en');
      
  }
  setDefaultLang(lang: string){
    this.translate.addLangs([lang]);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
  getCurrentLang(){
    return this.translate.currentLang;
  }
}
