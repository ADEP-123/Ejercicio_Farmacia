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
export class citasAtendidasGenero {
    constructor(usu_genero) {
        this.GENERO = usu_genero;
    }
}
__decorate([
    Expose({ name: "GENERO" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], citasAtendidasGenero.prototype, "GENERO", void 0);
