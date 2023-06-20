import { IsNotEmpty } from "class-validator";

export class UserCreateDto {

    @IsNotEmpty()
    fullname: string;
   
    @IsNotEmpty() 
    email: string;

    @IsNotEmpty()
    telephone: string; 
 
    @IsNotEmpty()
    role: string;

    // @IsNotEmpty()
    // password: string;

    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}