import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../app.message.service';
import { EmployeeServiceService } from '../../employee/employee-service.service';
import { Subscription } from 'rxjs';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
 employeeData : any;
 subscription: Subscription;
 allEmployeesData : any;
 duplicateEmpListObject:any;

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
      this.allEmployeesData = data;
      this.duplicateEmpListObject = JSON.parse(JSON.stringify(this.allEmployeesData));
    });
  }

  fetchData ( a:number) {
    if(this.duplicateEmpListObject.length !== this.allEmployeesData.length) {
      this.duplicateEmpListObject = JSON.parse(JSON.stringify(this.allEmployeesData));
    }
    for(var i = 0; i<this.allEmployeesData.length; i++) {
      this.duplicateEmpListObject.splice(a,(this.allEmployeesData.length - a));
    }

  }
}
