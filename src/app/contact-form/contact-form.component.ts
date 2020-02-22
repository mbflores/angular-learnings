import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})


export class ContactFormComponent implements OnInit {
  contactMethods: ContactMethod[];

  constructor() {
  }

  ngOnInit() {
    this.contactMethods = [
      {id: 1, name: 'Email'},
      {id: 2, name: 'Phone Number'},
      {id: 3, name: 'Mobile Number'},
      {id: 4, name: 'Address'},
    ];
  }


  submit(f :NgForm) {
    let something: any = JSON.stringify(f.value);
    console.log(something);
  }
}

interface ContactMethod {
  id: number;
  name: string;
}
