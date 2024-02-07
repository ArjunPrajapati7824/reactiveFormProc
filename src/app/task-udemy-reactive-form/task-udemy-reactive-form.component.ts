import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './CustomValidators';
import { formControlClass } from './formControl';

@Component({
  selector: 'app-task-udemy-reactive-form',
  templateUrl: './task-udemy-reactive-form.component.html',
  styleUrls: ['./task-udemy-reactive-form.component.css']
})
export class TaskUdemyReactiveFormComponent implements OnInit {

  constructor( 
  ) { 
  }



  
  projectForm!:FormGroup
  notAllowProjectName="Test"
  
  ngOnInit(): void {
    // this.projectForm=new FormGroup({
    //   projectName:new FormControl(null,[Validators.required,CustomValidator.invalidProjectName]),
    //   projectEmail:new FormControl(null,[Validators.required,Validators.email],CustomValidator.asyncValidEmail),
    //   projectStatus:new FormControl('stable')
    // })  
  }

  onSubmit(){
    
    console.log(this.projectForm.value);

    
  }

  // checkProjectName(control:FormControl):{[s:string]:boolean}|null{
  //   if(control.value===this.notAllowProjectName){
  //     return {'notAllowProjectName':true}
  //   }else{
  //     return null
  //   }

  // }

}
