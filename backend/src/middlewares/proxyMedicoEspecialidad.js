import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { medicoEspecialidad } from '../controllerTS/medicoEspecialidad.js';

const proxyMedicoEspecialidad = express();
proxyMedicoEspecialidad.use((req, res, next) => {
    try {
        let data = plainToClass(medicoEspecialidad, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyMedicoEspecialidad;