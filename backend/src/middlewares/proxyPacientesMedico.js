import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { pacientesMedico } from '../controllerTS/pacientesMedico.js';

const proxiPacientesMedico = express();
proxiPacientesMedico.use((req, res, next) => {
    try {
        let data = plainToClass(pacientesMedico, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxiPacientesMedico;