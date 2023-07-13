import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { citasAtendidasGenero } from '../controllerTS/citasAtendidasGenero.js';

const proxyCitasAtendidasGenero = express();
proxyCitasAtendidasGenero.use((req, res, next) => {
    try {
        let data = plainToClass(citasAtendidasGenero, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyCitasAtendidasGenero;