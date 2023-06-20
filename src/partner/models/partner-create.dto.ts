import { IsNotEmpty } from "class-validator";

export class PartnerCreateDto {

    @IsNotEmpty()
    title: string; 

    @IsNotEmpty()
    image: string; 

    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}