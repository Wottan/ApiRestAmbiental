import { Entity, Generated, PrimaryGeneratedColumn, OneToMany, ManyToOne, Column } from "typeorm";
import { ValorDatoAmbiental } from "./ValorDatoAmbiental";
import { Prototipo } from "./Prototipo";
import { Sensor } from "./Sensor";
import { TipoDatoAmbiental } from "./TipoDatoAmbiental";

@Entity()
export class DatoAmbiental {

    @PrimaryGeneratedColumn({ name: "id_datoAmbiental" })
    private id: number;

    @Column()
    private fecha: Date;

    @OneToMany(type => ValorDatoAmbiental, valorAmbiental => valorAmbiental.datoAmbiental)
    valores: ValorDatoAmbiental[];

    @ManyToOne(type => Prototipo, prototipo => prototipo.datosAmbientales)
    prototipo: Prototipo;

    @ManyToOne(type => Sensor, sensor => sensor.datosAmbientales)
    sensor: Sensor;

    @ManyToOne(type => TipoDatoAmbiental, tipoDatoAmbiental => tipoDatoAmbiental.datosAmbientales)
    tipoDato: TipoDatoAmbiental;

}