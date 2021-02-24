import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { ConentComponent } from './header/conent/conent.component';
import { SectionComponent } from './section/section.component';
import { TVComponent } from './section/tv/tv.component';
import { MobileComponent } from './section/mobile/mobile.component';
import { AnywhereComponent } from './section/anywhere/anywhere.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ConentComponent,
    SectionComponent,
    TVComponent,
    MobileComponent,
    AnywhereComponent,
    FaqsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
