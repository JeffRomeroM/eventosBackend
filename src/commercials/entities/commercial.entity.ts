import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Commercials {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    image: string;

    @Column()
    owner: string;

    @Column()
    message: string;

    @Column()
    place: string;

    @Column()
    date: string;

    @Column()
    callAction: string;
}
