import { IsNotEmpty } from "class-validator";

export class ActivityCreateDto {

    @IsNotEmpty()
    title: string; 

    @IsNotEmpty()
    image: string;
 
    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    redaction: string; 

    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}