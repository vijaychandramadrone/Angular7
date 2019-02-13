import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MessageService } from './app.message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private messageService: MessageService){}

  firstName: string;
  lastName: string;
  text: string;

  submitData (){
    //this.text  ='Welcome '+ ''+this.firstName+''+this.lastName;
    this.messageService.sendMessage({'firstName': this.firstName, 'lastName':this.lastName});
    this.router.navigate(["/create"]); 
  }
}
