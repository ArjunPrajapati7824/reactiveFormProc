import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ResolveEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ReactiveFormExample';
  // Genders=['Male','Female']
  // signupForm!:FormGroup
  // username:string=''
  // email:string=''
  // gender:string=''
  // hobbies:string[]=[]
  // usernameValid=['Manthan','Jeel','Arjun']

  // ngOnInit(): void {

  //   this.signupForm=new FormGroup({
  //     //for validation FormControl second argument contain validator
  //     'userData':new FormGroup({
  //       'username':new FormControl(null,[Validators.required,this.matchUsername.bind(this)]),
  //       'email':new FormControl("Arjun@gmail.com",[Validators.required,Validators.email],
  //       // this.asyncValidEmail//asynchronous validtor not work properly
  //       )
  //     }),
      
  //     'gender':new FormControl("Male"),
  //     'Hobbies':new FormArray([])
  //   })

    //call when new value occur in current form and print all value
    // this.signupForm.valueChanges.subscribe(value=>{
    //   console.log(value);
      
    // })

    //call when new value occur in current particular field  and print all value
    // this.signupForm.get('userData.username')?.valueChanges.subscribe(val=>{
    //   console.log(val);
    // })

    //call when invalid or valid status change in particular field
    // this.signupForm.get('userData.username')?.statusChanges.subscribe(status=>{
    //     console.log(status);
    //   })
    
      //if You use setvalue then must be change all values from form
  // this.signupForm.setValue({
  //   'userData':{
  //     'username':"Arun",
  //     'email':'ArjunPrajapati@gmail.com'
  //   },
  //   'gender':'Female',
  //   'Hobbies':[]
  // })

  ////if You use patchvalue then u can change value which u want

  // this.signupForm.patchValue({
  //   'userData':{
  //     'username':"Arun"
  //   }
  // })

  // }

  // onSubmit(){

  //   console.log(this.signupForm);
  //   this.username=this.signupForm.value.userData.username
  //   this.email=this.signupForm.value.userData.email
  //   this.gender=this.signupForm.value.gender
  //   // this.hobbies.push(this.signupForm.value.Hobbies)    
  //   this.hobbies=this.signupForm.value.Hobbies
  //   console.log(this.hobbies);


  //   //this will reset all forms value
  //   this.signupForm.reset()

  //   //it will reset all fields except username field
  //   this.signupForm.reset({
  //     userData:{
  //       username:this.signupForm.get('userData.username')?.value
  //     }
  //   })
    
    // this.signupForm.get('userData.username')?.reset()//this will reset particular fields
    
  // }

  // addHobbies(){
    
  //   const control=new FormControl(null,Validators.required);
  //   (<FormArray>this.signupForm.get('Hobbies')).push(control)
  //   console.log(this.signupForm.get('Hobbies'));
    
  // }

  // getHobbies(){
  //   return (this.signupForm.get('Hobbies') as FormArray).controls
  // }

  // matchUsername(control:FormControl):{[s:string]:boolean}|null{
  //   if(this.usernameValid.includes(control.value)){
  //     return {'invaliduser':true}
  //   }else{

  //     return null
  //   }

  // }

  // asyncValidEmail(control:FormControl):Promise<ValidationErrors> | Observable<ValidationErrors > |null {
  //   const promise =new Promise<any>((resolve,reject)=>{
  //     setTimeout(()=>{
  //       if(control.value==='arjun@gmail.com'){
  //         resolve({'emailvalid':true})
  //       }else{
  //         resolve(null)
  //       }
  //     },1500)
  //   })
  //   return (promise)

  // }


}
