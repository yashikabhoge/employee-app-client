import { NgModule } from '@angular/core';
import { EmployeeService } from './employees.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AddEmployeeComponent, EmployeeListComponent],
    providers: [ EmployeeService],
    imports: [BrowserModule, FormsModule, HttpClientModule],
    exports: [AddEmployeeComponent, EmployeeListComponent] 
})
export class EmployeeModule {

}