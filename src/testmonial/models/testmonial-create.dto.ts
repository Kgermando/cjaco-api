import { IsNotEmpty } from "class-validator";

export class TestmonialCreateDto {

    @IsNotEmpty()
    fullname: string;
   
    @IsNotEmpty() 
    title: string; 

    @IsNotEmpty()
    image: string;
 
    @IsNotEmpty()
    comment: string; 

    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}