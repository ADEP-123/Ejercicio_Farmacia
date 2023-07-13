import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { cantidadCitas } from '../controllerTS/cantidadCitas.js';

const proxyCantidadCitas = express();
proxyCantidadCitas.use((req, res, next) => {
    try {
        let data = plainToClass(cantidadCitas, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyCantidadCitas;