import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { nuevoPaciente } from '../controllerTS/nuevoPaciente.js';

const proxyNuevoPaciente = express();
proxyNuevoPaciente.use((req, res, next) => {
    try {
        let data = plainToClass(nuevoPaciente, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyNuevoPaciente;