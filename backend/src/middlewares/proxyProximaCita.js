import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { proximaCita } from '../controllerTS/proximaCita.js';

const proxyProximaCita = express();
proxyProximaCita.use((req, res, next) => {
    try {
        let data = plainToClass(proximaCita, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})

export default proxyProximaCita;