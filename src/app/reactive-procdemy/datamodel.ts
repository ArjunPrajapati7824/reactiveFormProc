export class UserModel{
    fname:string|null=null
    lname:string|null=null
    email:string|null=null
    contact:number|null=null
    username:string|null=null
    dob:string|null=null
    gender:string|null=null
    address:Address|null=null
    skills:string[]=[] 
    experience:Experiance[]|null=[]  
    carrerObjective:string|null=null

    
}

export class Address{
   streetAddress:string|null=null
   country:string|null=null
   city:string|null=null
   region:string|null=null
   postalCode:number|null=null
}

export class Experiance{
    companyName:string|null=null
    position:string|null=null
    totalExperience:number|null=null
    starDate:string|null=null
    endDate:string|null=null
}
