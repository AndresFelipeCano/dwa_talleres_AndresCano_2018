import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UiModule } from './ui/ui.module';

// Component imports
import { AppComponent } from './app.component';
import { PokemainComponent } from './components/pokemain/pokemain.component';
import { LayoutComponent } from './ui/layout/layout.component';

// Routing imports
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    data: { title: 'Pokemon List' }
  },
  {
    path:'pokemon/:ident',
    component: PokemainComponent,
    data: { title: 'Pokemon Detail' }
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PokemainComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
