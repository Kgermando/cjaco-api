import { IsNotEmpty } from "class-validator";

export class NewsLetterCreateDto {

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}