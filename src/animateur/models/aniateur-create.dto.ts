import { IsNotEmpty } from "class-validator";

export class AnimateurCreateDto {

    @IsNotEmpty()
    fullname: string;
   
    @IsNotEmpty() 
    title: string;   

    @IsNotEmpty()
    image: string;
 
    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    facebook: string;

    @IsNotEmpty()
    linkedin: string;

    @IsNotEmpty()
    twitter: string;

    @IsNotEmpty()
    instagram: string; 

    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}