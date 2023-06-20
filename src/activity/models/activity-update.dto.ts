export class ActivityUpdateDto {

    title?: string;   
    
    image?: string;

    content?: string;

    redaction?: string;
    
    signature?: string; // celui qui fait le document
 
    created?: Date;

    update_created?: Date; 
}