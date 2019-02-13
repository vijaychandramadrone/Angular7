import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../app.message.service';
import { EmployeeServiceService } from '../../employee/employee-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
 employeeData : any;
 subscription: Subscription;
 allEmployeesData : any;
  constructor(private messageService:MessageService, private empService: EmployeeServiceService ) { 
    console.log('Inside list EmployeeComponent');
  }

  ngOnInit() {
    console.log('Inside list EmployeeComponent');
    this.messageService.getMessage().subscribe(message => { 
      this.employeeData = message;
      console.log(this.employeeData);
    });

    this.empService.getEmployees().subscribe((data: {}) => {
      console.log(data);
      this.allEmployeesData = data;
    });
  }
}
