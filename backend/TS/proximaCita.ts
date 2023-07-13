import { Expose, Type, Transform } from "class-transformer";

export class proximaCita {

    @Expose({ name: "USUARIO" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    USUARIO: number;

    constructor(cit_datosUsuario: number) {
        this.USUARIO = cit_datosUsuario;
    }
}