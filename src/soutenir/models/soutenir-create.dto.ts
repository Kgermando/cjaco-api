import { IsNotEmpty } from "class-validator";

export class SoutenirCreateDto {

    @IsNotEmpty()
    fullname: string;
   
    @IsNotEmpty() 
    objet: string; 

    @IsNotEmpty()
    montant: string;
 
    @IsNotEmpty()
    type_paiement: string; 

    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}