import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../app.message.service';

@Component({
  selector: 'app-confirm-employee',
  templateUrl: './confirm-employee.component.html',
  styleUrls: ['./confirm-employee.component.css']
})
export class ConfirmEmployeeComponent implements OnInit {
  employeeData: any;

  constructor(private messageService: MessageService) { 
    console.log('Inside confirm EmployeeComponent');
  }

  ngOnInit() {
    console.log('Inside init confirm EmployeeComponent');
    this.messageService.getMessage().subscribe(message => { 
      this.employeeData = message;
      console.log(this.employeeData);
    });
  }

}
