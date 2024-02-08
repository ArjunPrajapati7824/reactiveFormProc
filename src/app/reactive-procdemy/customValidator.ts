import { AbstractControl, FormControl } from "@angular/forms";
import { ResolveEnd } from "@angular/router";

export class spaceNotAllowed{

    static spaceNotAllowed(formValue:FormControl):{[s:string]:boolean}|null{
        // str:string=''
        if(formValue.value!=null && formValue.value.indexOf(' ')!=-1){
            return {'spaceNotAllowed':true}
        }else{
            return null
        }
    }

    static checkUsername(form:AbstractControl):Promise<any>{
        return userNameAllowed(form.value)
    }
}


function userNameAllowed(username:string){
    const databseUsername=['Arjun','Manthan','Jeel']

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(databseUsername.includes(username)){
                resolve({checkUsername:true})
            }else{
                resolve(null)
            }
        },2000)

    })
}