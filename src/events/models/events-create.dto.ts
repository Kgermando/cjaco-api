import { IsNotEmpty } from "class-validator";

export class EventsCreateDto {

    @IsNotEmpty()
    title: string;
   
    @IsNotEmpty() 
    start_date: Date;

    @IsNotEmpty() 
    end_date: Date;

    @IsNotEmpty() 
    adress: string;

    @IsNotEmpty()
    image: string;
 
    @IsNotEmpty()
    content: string; 

    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}