import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.sass']
})
export class ContactPageComponent implements OnInit {
  contactDetails = new FormGroup({
    name: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.contactDetails.valid) {
      const details = this.contactDetails.value;
      console.log(details);
    }
  }

}
