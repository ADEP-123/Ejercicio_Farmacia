import { Expose, Type, Transform } from "class-transformer";

export class pacientesMedico {

    @Expose({ name: "MEDICO" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    MEDICO: number;

    constructor(cit_medico: number,) {
        this.MEDICO = cit_medico;
    }
}