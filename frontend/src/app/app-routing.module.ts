import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {SigniinComponent} from './signiin/signiin.component';
import {MoncompteComponent} from './moncompte/moncompte.component';
import {ContinuationshoppingComponent} from './continuationshopping/continuationshopping.component'
import {PanierComponent} from './panier/panier.component'
import {ShopComponent} from './shop/shop.component'
import {HistoriqueComponent} from './historique/historique.component'
import {AdressComponent} from './adress/adress.component'
import {ArticleComponent} from './article/article.component'
import {ConfiCmdComponent} from './confi-cmd/confi-cmd.component'
import {ConfirAdressComponent} from './confir-adress/confir-adress.component'
import {PaimentComponent} from './paiment/paiment.component'
import {InformationComponent} from './information/information.component'
import {GuardGuard} from './guard.guard';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigniinComponent},
  {path: 'moncompte', component: MoncompteComponent},
  {path: 'continuation', component: ContinuationshoppingComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'historique', component: HistoriqueComponent},
  {path: 'adress', component: AdressComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'confir-cmd', component: ConfiCmdComponent},
  {path: 'confir-adr', component: ConfirAdressComponent},
  {path: 'paiment', component: PaimentComponent},
  {path: 'information', component: InformationComponent},
  {path: '', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
