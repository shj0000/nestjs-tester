import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('Board')
export class Board {
    @PrimaryColumn()
    id: string;
  
    @Column({ length: 30 })
    name: string;
}
