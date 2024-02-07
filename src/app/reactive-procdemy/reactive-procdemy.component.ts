import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { spaceNotAllowed } from './customValidator';

@Component({
  selector: 'app-reactive-procdemy',
  templateUrl: './reactive-procdemy.component.html',
  styleUrls: ['./reactive-procdemy.component.css']
})
export class ReactiveProcdemyComponent implements OnInit {

  constructor() { }

  fname=''
  lname:string=''
  dob:string=''
  reactiveForm!:FormGroup
  genders=[
    {id:1,value:'Male',display:'Male'},
    {id:2,value:'Female',display:'Female'},
    {id:3,value:'Other',display:'Other'},
  ]

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      fname:new FormControl(null,[Validators.required,spaceNotAllowed.spaceNotAllowed]),
      lname:new FormControl(null,[Validators.required,spaceNotAllowed.spaceNotAllowed]),
      email:new FormControl(null,[Validators.required,Validators.email ]),
      username:new FormControl(null,[Validators.required]),
      dob:new FormControl(null,[Validators.required]),
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

  createUsername(){
    let username='';
    if(this.fname.length>3){
      username+=this.fname.slice(0,3)
    }else{
      username+=this.fname
    }

    if(this.lname.length>3){
      username+=this.lname.slice(0,3)
    }else{
      username+=this.lname
    }

    let date=new Date(this.dob)
    username+=date.getFullYear()

    this.reactiveForm.patchValue({
      username:username
    })
    
  }

}
