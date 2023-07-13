import { Expose, Type, Transform } from "class-transformer";

export class citasAtendidasGenero {

    @Expose({ name: "GENERO" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    GENERO: number;

    constructor(usu_genero: number,) {
        this.GENERO = usu_genero;
    }
}