import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpAddComponent } from './core/components/emp-add/emp-add.component';
import { EmpEditComponent } from './core/components/emp-edit/emp-edit.component';

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    component: EmpAddComponent,
  },
  // {
  //   path: 'add-employee',
  //   component: EmpAddComponent,
  // },
  // {
  //   path: 'edit-employee',
  //   component: EmpEditComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
