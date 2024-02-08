import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { spaceNotAllowed } from './customValidator';
import { CustomValidator } from '../task-udemy-reactive-form/CustomValidators';
import { UserModel } from './datamodel';

@Component({
  selector: 'app-reactive-procdemy',
  templateUrl: './reactive-procdemy.component.html',
  styleUrls: ['./reactive-procdemy.component.css','./dataform.component.css']
})
export class ReactiveProcdemyComponent implements OnInit {

  constructor() { }

  fname=''
  lname:string=''
  dob:string=''
  reactiveForm!:FormGroup
  userData!:UserModel
  genders=[
    {id:1,value:'Male',display:'Male'},
    {id:2,value:'Female',display:'Female'},
    {id:3,value:'Other',display:'Other'},
  ]
  status:string=''
  formStatus:string='INVALID'

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      fname:new FormControl(null,[Validators.required,spaceNotAllowed.spaceNotAllowed]),
      lname:new FormControl(null,[Validators.required,spaceNotAllowed.spaceNotAllowed]),
      email:new FormControl(null,[Validators.required,Validators.email ]),
      contact:new FormControl(null,[Validators.required,]),
      username:new FormControl(null,[Validators.required],spaceNotAllowed.checkUsername),
      dob:new FormControl(null,[Validators.required]),
      gender:new FormControl('Male'),
      address:new FormGroup({
        streetAddress:new FormControl(null,[Validators.required]),
        country:new FormControl('India'),
        city:new FormControl(null,[Validators.required]),
        region:new FormControl(null,[Validators.required]),
        postalCode:new FormControl(null,[Validators.required]),
      }),

      skills:new FormArray([
        new FormControl(null)
        
      ]),
      experience:new FormArray([
        new FormGroup({
            companyName:new FormControl(null),
            position:new FormControl("Junior Developer"),
            totalExperience:new FormControl(null),
            starDate:new FormControl(null),
            endDate:new FormControl(null),
        })
       
      ]),
      carrerObjective:new FormControl(null,Validators.required)
  
      })
      // this.reactiveForm.get('username')?.statusChanges.subscribe(e=>{
      //   console.log(e);
      //   this.status=e
        
      // })

      this.reactiveForm.statusChanges.subscribe(e=>{
        console.log(e);
        this.formStatus=e
        
      })


      // console.log(this.status);
      console.log(this.formStatus);
      

  }

  onSubmit(){ 
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.value);
    this.userData=this.reactiveForm.value
    console.log(this.userData);
    this.reactiveForm.reset()

    this.reactiveForm.patchValue({
      gender:'Male',
      address:{
        country:'India'
      },
      experience:{
        position:'Junior Developer'
      }
    })
    
       
    
  

    
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

  setSkillControls(){
    return (this.reactiveForm.get('skills')as FormArray).controls
  }

  //add new skill form control array
  addNewSkill(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null))
  }

  // remove skill form control
  removeNewSkill(id:number){
    (<FormArray>this.reactiveForm.get('skills')).removeAt(id)

  }

  setExperianceControl(){
    return (this.reactiveForm.get('experience')as FormArray).controls
  }

  addNewExperianceControl(){
    const formgroup=new FormGroup({
      companyName:new FormControl(null),
      position:new FormControl(null),
      totalExperience:new FormControl(null),
      starDate:new FormControl(null),
      endDate:new FormControl(null),
    });

    (<FormArray>this.reactiveForm.get('experience')).push(formgroup)
    }

    removeNewExperiance(id:number){
      (<FormArray>this.reactiveForm.get('experience')).removeAt(id)
  
    }

    //set default values
    setDefaultData(){
      this.reactiveForm.setValue({
        fname:'Arjun',
        lname:'Prajapati',
        email:'arjun@gmail.com',
        contact:7201914901,
        username:"Arjun1",
        dob:'2001-05-21',
        gender:'Male',
        address:{
          streetAddress:'Parasnagar',
          country:'India',
          city:'Ahmedabad',
          region:'Naranpura',
          postalCode:'380089',
        },
  
        skills:['Angular','.Net','Mogodb','Android','React'],
        experience:[
          {
              companyName:'abc',
              position:"Junior Developer",
              totalExperience:2,
              starDate:'2001-05-21',
              endDate:'2001-05-21',
          },
          {
            companyName:'abc',
              position:"Senior Developer",
              totalExperience:3,
              starDate:'2001-05-21',
              endDate:'2001-05-21',
        },
        {
          companyName:'abc',
            position:"Team Lead",
            totalExperience:5,
            starDate:'2001-05-21',
            endDate:'2001-05-21',
      },
      {
        companyName:'abc',
          position:"Software Developer",
          totalExperience:4,
          starDate:'2021-06-21',
          endDate:'2022-05-13',
    },
    {
      companyName:'abc',
        position:"Senior Developer",
        totalExperience:5,
        starDate:'2003-03-2',
        endDate:'2005-05-21',
  }
         
        ],
        carrerObjective:`A career objective is a statement that outlines an
                        individual s professional goals
                        aspirations, and the direction they want their career to take`
    
      })
    }
}
