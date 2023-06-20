import { IsNotEmpty } from "class-validator";

export class RegisterDto {
   
    @IsNotEmpty()
    fullname: string; 

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    telephone: string;  

    @IsNotEmpty()
    role: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    password_confirm: string;

    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date; 


   
}