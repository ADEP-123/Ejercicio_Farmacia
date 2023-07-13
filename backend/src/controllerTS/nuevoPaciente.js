var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from "class-transformer";
export class nuevoPaciente {
    constructor(usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_e_mail, usu_fechNAc, usu_tipodoc, usu_genero, usu_acudiente) {
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
        this.ACUDIENTE = usu_acudiente;
    }
}
__decorate([
    Expose({ name: "ID" }),
    Transform(({ value }) => parseInt(value) ? value : "Error", { toClassOnly: true }),
    __metadata("design:type", Number)
], nuevoPaciente.prototype, "ID", void 0);
__decorate([
    Expose({ name: "PRIM_NOMBRE" }),
    Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error en tipo de parametro1` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], nuevoPaciente.prototype, "PRIM_NOMBRE", void 0);
__decorate([
    Expose({ name: "SEG_NOMBRE" }),
    Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value) || value == "")
        return value;
    else
        throw { status: 400, message: `Error en tipo de parametro2` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], nuevoPaciente.prototype, "SEG_NOMBRE", void 0);
__decorate([
    Expose({ name: "PRIM_APELLIDO" }),
    Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error en tipo de parametro3` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], nuevoPaciente.prototype, "PRIM_APELLIDO", void 0);
__decorate([
    Expose({ name: "SEG_APELLIDO" }),
    Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error en tipo de parametro4` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], nuevoPaciente.prototype, "SEG_APELLIDO", void 0);
__decorate([
    Expose({ name: "TELEFONO" }),
    Transform(({ value, key }) => { if (/^[0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error en tipo de parametro5` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], nuevoPaciente.prototype, "TELEFONO", void 0);
__decorate([
    Expose({ name: "DIRECCION" }),
    Type(() => String),
    __metadata("design:type", String)
], nuevoPaciente.prototype, "DIRECCION", void 0);
__decorate([
    Expose({ name: "EMAIL" }),
    Transform(({ value, key }) => { if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error en tipo de parametro6`, value: value }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], nuevoPaciente.prototype, "EMAIL", void 0);
__decorate([
    Expose({ name: "FECHA_NAC" }),
    Transform(({ value, key }) => {
        const fechaSinComillas = value.replace(/\"/g, '');
        if (/^\d{4}-\d{2}-\d{2}$/.test(fechaSinComillas))
            return value;
        else
            throw { status: 400, message: `Error en tipo de parametro7` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], nuevoPaciente.prototype, "FECHA_NAC", void 0);
__decorate([
    Expose({ name: "TIPO_DOC" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro8` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], nuevoPaciente.prototype, "TIPO_DOC", void 0);
__decorate([
    Expose({ name: "GENERO" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro9` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], nuevoPaciente.prototype, "GENERO", void 0);
__decorate([
    Expose({ name: "ACUDIENTE" }),
    Transform(({ value, key }) => { if (Math.floor(value) || value === 0)
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro10`, value: Math.floor(value) }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], nuevoPaciente.prototype, "ACUDIENTE", void 0);
