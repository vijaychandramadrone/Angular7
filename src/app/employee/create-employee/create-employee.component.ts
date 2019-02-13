import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../app.message.service';
import { Subscription } from 'rxjs';
import { CreateEmployee } from '../../interfaces/create-employee';
import {NgForm} from '@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  sub : Subscription;
  loginData: any;
  employeeCreate : CreateEmployee;
  data: any

  constructor(private messageService:MessageService, private router:Router) {
    console.log('Inside CreateEmployeeComponent');
   }

   confirmEmployee (f: NgForm){
    this.data = f.value;
    this.messageService.sendMessage(this.data);
    sessionStorage.setItem("createEmployee", JSON.stringify(this.data));
    this.router.navigate(["/confirmEmployee"]); 
     
   }

  ngOnInit() {
    console.log('Inside init CreateEmployeeComponent');
  }

}
