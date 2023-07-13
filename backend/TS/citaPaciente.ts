import { Expose, Type, Transform } from "class-transformer";

export class citaPaciente {

    @Expose({ name: "ID_USUARIO" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    ID_USUARIO: number;

    constructor(cit_datosUsuario: number,) {
        this.ID_USUARIO = cit_datosUsuario;
    }
}