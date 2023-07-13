var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class cantidadCitas {
    constructor(cit_fecha, cit_medico) {
        this.MEDICO = cit_medico;
        this.FECHA = cit_fecha;
    }
}
__decorate([
    Expose({ name: "MEDICO" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], cantidadCitas.prototype, "MEDICO", void 0);
__decorate([
    Expose({ name: "FECHA" }),
    Transform(({ value, key }) => {
        const fechaSinComillas = value.replace(/\"/g, '');
        if (/^\d{4}-\d{2}-\d{2}$/.test(fechaSinComillas) || value == null)
            return value;
        else
            throw { status: 400, message: `Error en tipo de parametro` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], cantidadCitas.prototype, "FECHA", void 0);
