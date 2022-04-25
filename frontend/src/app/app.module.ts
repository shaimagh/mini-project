import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanierComponent } from './panier/panier.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ShopComponent } from './shop/shop.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { ContinuationshoppingComponent } from './continuationshopping/continuationshopping.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SigniinComponent } from './signiin/signiin.component';
import { SignupComponent } from './signup/signup.component';
import { AdressComponent } from './adress/adress.component';
import { ConfirAdressComponent } from './confir-adress/confir-adress.component';
import { ArticleComponent } from './article/article.component';
import { ConfiCmdComponent } from './confi-cmd/confi-cmd.component';
import { PaimentComponent } from './paiment/paiment.component';
import { InformationComponent } from './information/information.component';

//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PanierComponent,
    HistoriqueComponent,
    ShopComponent,
    MoncompteComponent,
    ContinuationshoppingComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SigniinComponent,
    SignupComponent,
    AdressComponent,
    ConfirAdressComponent,
    ArticleComponent,
    ConfiCmdComponent,
    PaimentComponent,
    InformationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
