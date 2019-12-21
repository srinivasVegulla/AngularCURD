import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeslistEmployeesComponent } from './employeeslist-employees/employeeslist-employees.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes : Routes =[
  {path: 'list' , component : ListEmployeesComponent },
  {path: 'create' , component : CreateEmployeeComponent },
  {path: '' , redirectTo : '/list' , pathMatch : 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    EmployeeslistEmployeesComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
