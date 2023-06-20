import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Animateur {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    title: string; 

    @Column()
    image: string; 

    @Column()
    content: string;

    @Column({default: 'https://www.facebook.com/cjacoasbl?mibextid=ZbWKwL'})
    facebook: string;

    @Column({default: '-'})
    linkedin: string;

    @Column({default: '-'})
    twitter: string;

    @Column({default: '-'})
    instagram: string; 

    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}