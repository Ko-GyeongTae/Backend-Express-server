import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    uid: string;

    @Column()
    uid: string;

    

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: string;
}