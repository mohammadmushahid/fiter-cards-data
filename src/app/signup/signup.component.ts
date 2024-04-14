import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  studentReactiveForm!: FormGroup;
  myData: any[] = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm();
    console.log("myData===>", this.myData)
  }

  studentForm(){
    this.studentReactiveForm = this.formBuilder.group({
      'firstName' : [null, [Validators.required]],
      'lastName': [null],
      'userName': [null, [Validators.required]],
      'city': [null, [Validators.required]],
      'country': [null, ],
      'zip': [null, ],
    })
  }

  submitStudentForm(){
    this.myData.push(this.studentReactiveForm.value);
    console.log("myyyy===>",this.myData)

  }
}
