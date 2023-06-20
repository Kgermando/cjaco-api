export class SoutenirUpdateDto {

    fullname?: string;  

    objet?: Date;  
    
    montant?: string;

    type_paiement?: string;
    
    signature?: string; // celui qui fait le document
 
    created?: Date;

    update_created?: Date; 
}