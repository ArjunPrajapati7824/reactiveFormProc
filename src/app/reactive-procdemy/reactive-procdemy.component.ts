import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-procdemy',
  templateUrl: './reactive-procdemy.component.html',
  styleUrls: ['./reactive-procdemy.component.css']
})
export class ReactiveProcdemyComponent implements OnInit {

  constructor() { }

  reactiveForm!:FormGroup
  genders=[
    {id:1,value:'Male',display:'Male'},
    {id:2,value:'Female',display:'Female'},
    {id:3,value:'Other',display:'Other'},
  ]

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      fname:new FormControl(null,[Validators.required]),
      lname:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required,Validators.email ]),
      username:new FormControl(null),
      dob:new FormControl(null),
      gender:new FormControl('Male'),
      address:new FormGroup({
        streetAddress:new FormControl(null,[Validators.required]),
        country:new FormControl('India'),
        city:new FormControl(null,[Validators.required]),
        region:new FormControl(null,[Validators.required]),
        postalCode:new FormControl(null,[Validators.required]),
      })
      


      })

  }

  onSubmit(){
    console.log(this.reactiveForm);
    
  }

}
