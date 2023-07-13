import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { citaFecha } from '../controllerTS/citaFecha.js';

const proxyCitaFecha = express();
proxyCitaFecha.use((req, res, next) => {
    try {
        let data = plainToClass(citaFecha, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyCitaFecha;