import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { DatoAmbiental } from "./DatoAmbiental";


@Entity()
export class TipoDatoAmbiental {

    @PrimaryGeneratedColumn({ name: "id_tipoDatoAmbiental" })
    private id: number;

    @Column()
    private descripcion: string;

    @OneToMany(type => DatoAmbiental, datoAmbiental => datoAmbiental.prototipo)
    datosAmbientales: DatoAmbiental[];

}