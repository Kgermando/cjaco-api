import { IsNotEmpty } from "class-validator";

export class ContactCreateDto {

    @IsNotEmpty()
    fullname: string;

    @IsNotEmpty() 
    email: string;

    @IsNotEmpty()
    phone: string;
 
    @IsNotEmpty()
    subject: string;

    @IsNotEmpty()
    message: string;

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}