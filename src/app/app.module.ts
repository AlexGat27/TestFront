import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsPageComponent } from './components/pages/cards-page/cards-page.component';
import { CatsPageComponent } from './components/pages/cats-page/cats-page.component';
import { CatsSubstratePageComponent } from './components/pages/cats-substrate-page/cats-substrate-page.component';
import { FooterPageComponent } from './components/pages/footer-page/footer-page.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { ContentComponent } from './components/shared/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsPageComponent,
    CatsPageComponent,
    CatsSubstratePageComponent,
    FooterPageComponent,
    NavigationComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
