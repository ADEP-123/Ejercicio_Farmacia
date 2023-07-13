import { Expose, Type, Transform } from "class-transformer";

export class citaFecha {

    @Expose({ name: "FECHA" })
    @Transform(({ value, key }) => {
        const fechaSinComillas = value.replace(/\"/g, '');
        if (/^\d{4}-\d{2}-\d{2}$/.test(fechaSinComillas) || value == null) return value; else throw { status: 400, message: `Error en tipo de parametro` }
    }, { toClassOnly: true })
    FECHA: string;

    constructor(cit_fecha: string) {
        this.FECHA = cit_fecha;
    }
}