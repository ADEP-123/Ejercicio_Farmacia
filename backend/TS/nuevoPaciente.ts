import { Expose, Type, Transform } from "class-transformer";

export class nuevoPaciente {
    @Expose({ name: "ID" })
    @Transform(({ value }) => parseInt(value) ? value : "Error", { toClassOnly: true })
    ID: number;

    @Expose({ name: "PRIM_NOMBRE" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error en tipo de parametro1` } }, { toClassOnly: true })
    PRIM_NOMBRE: string;

    @Expose({ name: "SEG_NOMBRE" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value) || value == "") return value; else throw { status: 400, message: `Error en tipo de parametro2` } }, { toClassOnly: true })
    SEG_NOMBRE: string;

    @Expose({ name: "PRIM_APELLIDO" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error en tipo de parametro3` } }, { toClassOnly: true })
    PRIM_APELLIDO: string;

    @Expose({ name: "SEG_APELLIDO" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error en tipo de parametro4` } }, { toClassOnly: true })
    SEG_APELLIDO: string;

    @Expose({ name: "TELEFONO" })
    @Transform(({ value, key }) => { if (/^[0-9]+$/.test(value)) return value; else throw { status: 400, message: `Error en tipo de parametro5` } }, { toClassOnly: true })
    TELEFONO: string;

    @Expose({ name: "DIRECCION" })
    @Type(() => String)
    DIRECCION: string;

    @Expose({ name: "EMAIL" })
    @Transform(({ value, key }) => { if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) return value; else throw { status: 400, message: `Error en tipo de parametro6`, value: value } }, { toClassOnly: true })
    EMAIL: string;

    @Expose({ name: "FECHA_NAC" })
    @Transform(({ value, key }) => {
        const fechaSinComillas = value.replace(/\"/g, '');
        if (/^\d{4}-\d{2}-\d{2}$/.test(fechaSinComillas)) return value; else throw { status: 400, message: `Error en tipo de parametro7` }
    }, { toClassOnly: true })
    FECHA_NAC: string;

    @Expose({ name: "TIPO_DOC" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro8` } }, { toClassOnly: true })
    TIPO_DOC: number;

    @Expose({ name: "GENERO" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro9` } }, { toClassOnly: true })
    GENERO: number;

    @Expose({ name: "ACUDIENTE" })
    @Transform(({ value, key }) => { if (Math.floor(value) || value === 0) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro10`, value: Math.floor(value) } }, { toClassOnly: true })
    ACUDIENTE: number;


    constructor(usu_id: number, usu_nombre: string, usu_segdo_nombre: string, usu_primer_apellido_usuar: string, usu_segdo_apellido_usuar: string, usu_telefono: string, usu_direccion: string, usu_e_mail: string, usu_fechNAc: string, usu_tipodoc: number, usu_genero: number, usu_acudiente: number) {
        this.ID = usu_id;
        this.PRIM_NOMBRE = usu_nombre;
        this.SEG_NOMBRE = usu_segdo_nombre;
        this.PRIM_APELLIDO = usu_primer_apellido_usuar;
        this.SEG_APELLIDO = usu_segdo_apellido_usuar;
        this.TELEFONO = usu_telefono;
        this.DIRECCION = usu_direccion;
        this.EMAIL = usu_e_mail;
        this.FECHA_NAC = usu_fechNAc;
        this.TIPO_DOC = usu_tipodoc;
        this.GENERO = usu_genero;
        this.ACUDIENTE = usu_acudiente
    }
}