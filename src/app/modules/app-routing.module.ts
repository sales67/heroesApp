import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('./hero.module').then(m => m.HeroModule)
  }
];

@NgModule({
  declarations: [],
  imports: [    
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
