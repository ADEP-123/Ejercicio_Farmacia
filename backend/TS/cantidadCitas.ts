import { Expose, Type, Transform } from "class-transformer";

export class cantidadCitas {

    @Expose({ name: "MEDICO" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    MEDICO: number;

    @Expose({ name: "FECHA" })
    @Transform(({ value, key }) => {
        const fechaSinComillas = value.replace(/\"/g, '');
        if (/^\d{4}-\d{2}-\d{2}$/.test(fechaSinComillas) || value == null) return value; else throw { status: 400, message: `Error en tipo de parametro` }
    }, { toClassOnly: true })
    FECHA: string;

    constructor(cit_fecha: string, cit_medico: number) {
        this.MEDICO = cit_medico;
        this.FECHA = cit_fecha;
    }
}