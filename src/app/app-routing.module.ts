
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ConfirmEmployeeComponent } from './employee/confirm-employee/confirm-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';

const routes: Routes = [{path:'create', component:CreateEmployeeComponent},
                        {path:'confirmEmployee', component:ConfirmEmployeeComponent},
                        {path:'list', component:ListEmployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
