import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class File {
    @PrimaryGeneratedColumn('increment')
    fid: number;

    @Column('unique')
    filename: string;

    @Column()
    owner: number;
}