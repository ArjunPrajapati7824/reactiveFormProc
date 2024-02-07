import { FormGroup ,FormControl ,Validators} from "@angular/forms";
import { CustomValidator } from "./CustomValidators";

export class formControlClass{
    projectForm=new FormGroup({
        projectName:new FormControl(null,[Validators.required,CustomValidator.invalidProjectName]),
        projectEmail:new FormControl(null,[Validators.required,Validators.email]),
        projectStatus:new FormControl('stable')
      })
}