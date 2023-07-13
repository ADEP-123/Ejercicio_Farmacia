import { Expose, Type, Transform } from "class-transformer";

export class medicoEspecialidad {

    @Expose({ name: "ESPECIALIDAD" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    ESPECIALIDAD: number;

    constructor(med_especialidad: number,) {
        this.ESPECIALIDAD = med_especialidad;
    }
}