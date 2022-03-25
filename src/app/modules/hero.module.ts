import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddHeroComponent } from '../components/heroes/add-hero/add-hero.component';
import { DashboardHeroesComponent } from '../components/heroes/dashboard-heroes/dashboard-heroes.component';
import { EditHeroComponent } from '../components/heroes/edit-hero/edit-hero.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

import { DeleteDialog } from '../dialogs/delete-dialog';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardHeroesComponent,
  },
  {
    path: 'add',
    component: AddHeroComponent,
  },
  {
    path: 'edit/:id',
    component: EditHeroComponent,
  },
];

@NgModule({
  declarations: [
    DashboardHeroesComponent,
    AddHeroComponent,
    EditHeroComponent,
    DeleteDialog,
  ],
  imports: [
    NgxPaginationModule,
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
})
export class HeroModule {}
