import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { nuevoPaciente } from '../controllerTS/nuevoPaciente.js';
import { validate } from 'class-validator'

const proxyNuevoPaciente = express();
proxyNuevoPaciente.use(async(req, res, next) => {
    try {
        let data = plainToClass(nuevoPaciente, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        console.log(data)
        // validate(data).then(res=> {console.log(res)}).catch(res=> {console.log(res)})
        await validate(data);
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyNuevoPaciente;