import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../app.message.service';
import { CreateEmployee } from '../../interfaces/create-employee';
import { EmployeeServiceService } from '../../employee/employee-service.service';

@Component({
  selector: 'app-confirm-employee',
  templateUrl: './confirm-employee.component.html',
  styleUrls: ['./confirm-employee.component.css']
})
export class ConfirmEmployeeComponent implements OnInit {
  employeeData: CreateEmployee;

  constructor(private messageService: MessageService, private empService: EmployeeServiceService) { 
    console.log('Inside confirm EmployeeComponent');
  }

  ngOnInit() {
    console.log('Inside init confirm EmployeeComponent');
    /*this.messageService.getMessage().subscribe(message => { 
      this.employeeData = message;
      console.log(this.employeeData);
    });*/
    if(sessionStorage.getItem("createEmployee")){
      this.employeeData = JSON.parse(sessionStorage.getItem("createEmployee"));
    }
  }

  submitEmployee () {
    this.empService.createEmployee(this.employeeData).subscribe((result) => {
      //this.router.navigate(['/product-details/'+result._id]);
      console.log(result.id);
      this.employeeData.id = result.id;
    }, (err) => {
      console.log(err);
    });
  }

}
