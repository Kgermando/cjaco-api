import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Soutenir {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    objet: string;

    @Column()
    montant: string; 

    @Column()
    type_paiement: string;

    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}