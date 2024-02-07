import { FormControl } from "@angular/forms";

export class spaceNotAllowed{
    // static spaceNotAllowed(formValue:FormControl):{[s:string]:boolean}|null{
    //     // str:string=''
    //     console.log(formValue);
    //     // console.log(String(formValue).indexOf(''));
        
        
    //     if(formValue!=null && String(formValue).indexOf(' ')!=-1){
    //         return {'spaceNotAllowed':true}
    //     }else{
    //         return null
    //     }
    // }

    static spaceNotAllowed(formValue:FormControl):{[s:string]:boolean}|null{
        // str:string=''
        console.log(formValue);
        if(formValue.value!=null && formValue.value.indexOf(' ')!=-1){
            return {'spaceNotAllowed':true}
        }else{
            return null
        }
    }
}