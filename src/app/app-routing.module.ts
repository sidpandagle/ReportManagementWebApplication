import { CategoryComponent } from './category/category.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'report', component: ReportComponent},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
