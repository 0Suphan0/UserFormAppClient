//Servisteki user model ile uyumlu User model.
export class User {
    id?:number;
    name: string='';
    lastName: string='';
    birthDate:Date | undefined;
    city: string='';
    email:string=''
    gender:string=''
  }
  