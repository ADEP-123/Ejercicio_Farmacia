import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { consultorioPaciente } from '../controllerTS/consultorioPaciente.js';

const proxyConsultorioPaciente = express();
proxyConsultorioPaciente.use((req, res, next) => {
    try {
        let data = plainToClass(consultorioPaciente, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyConsultorioPaciente;