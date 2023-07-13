import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { citaPaciente } from '../controllerTS/citaPaciente.js';

const proxyCitaPaciente = express();
proxyCitaPaciente.use((req, res, next) => {
    try {
        let data = plainToClass(citaPaciente, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyCitaPaciente;