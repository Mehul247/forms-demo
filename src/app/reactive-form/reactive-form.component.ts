import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  submitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ueserForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    age: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      address1: [''],
      address2: [''],
      state: ['']
    })
  })
  ngOnInit(): void {
  }

  submit() {
    console.log(this.ueserForm.value);
    console.log(this.ueserForm.controls.firstName.value);
    console.log(this.ueserForm.get(['address','address1']).value);
    this.submitted = true;
  }

  setFirstName() {
    this.ueserForm.patchValue({
      firstName: 'Leo'
    })
  }

  showFirstNameErrors() {
    const firstNameForm = this.ueserForm.get('firstName');
    if (firstNameForm.touched && !firstNameForm.valid) {
      if (firstNameForm.errors.required) {
        return 'First Name Required';
      }
    }
  }

  showLastNameErrors() {
    const lastNameForm = this.ueserForm.get('lastName');
    if (lastNameForm.touched && !lastNameForm.valid) {
      if (lastNameForm.errors.required) {
        return 'Last Name Required';
      }
    }
  }

  showAgeErrors() {
    const ageForm = this.ueserForm.get('age');
    if (ageForm.touched && !ageForm.valid) {
      if (ageForm.errors.required) {
        return 'Age Required';
      }
    }
  }

 showEmailErrors() {
    const emailForm = this.ueserForm.get('email');
    if (emailForm.touched && !emailForm.valid) {
      if (emailForm.errors.required) {
        return 'Email Required';
      }
    }
  }
}
