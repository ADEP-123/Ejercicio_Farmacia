import { Expose, Type, Transform } from "class-transformer";

export class consultorioPaciente {

    @Expose({ name: "PACIENTE" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    PACIENTE: number;

    constructor(cit_datosUsuario: number,) {
        this.PACIENTE = cit_datosUsuario;
    }
}