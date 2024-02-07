import { AbstractControl, FormControl } from "@angular/forms"

export class CustomValidator{

    static invalidProjectName(control:FormControl):{[s:string]:boolean}|null{
        if(control.value==="Test"){
            return {"notAllowProjectName":true}
        }
        else{
            return null

        }
    }

    static asyncValidEmail(control:AbstractControl):Promise<any> {

          const promise =new Promise<any>((resolve,reject)=>{
            setTimeout(()=>{
              if(control.value==='arjun@gmail.com'){
                resolve({'emailvalid':true})
              }else{
                resolve(null)
              }
            },5000)
          })
          return (promise)
      
        }

    
}