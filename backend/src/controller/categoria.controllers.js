import { query } from "express";
import getConnection from "../db/database.js";
const connection = getConnection();


//1. Obtener todos los pacientes alfabéticamente
const getUsuarios = (req, res) => {
    connection.query(/*sql*/`SELECT usu_id AS ID, usu_nombre AS PRIM_NOMBRE, usu_segdo_nombre AS SEG_NOMBRE, usu_primer_apellido_usuar AS PRIM_APELLIDO, usu_segdo_apellido_usuar AS SEG_APELLIDO, usu_telefono AS TELEFONO, usu_direccion AS DIRECCION, usu_e_mail AS EMAIL, usu_tipodoc AS TIPO_DOC, usu_genero AS GENERO, usu_acudiente AS ACUDIENTE FROM usuario ORDER BY usu_nombre ASC,usu_segdo_nombre ASC, usu_primer_apellido_usuar ASC, usu_segdo_apellido_usuar ASC`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json(data);
        }
    });
}

// 2. Obtener todas las citas alfabéticamente
const getDates = (req, res) => {
    connection.query(/*sql*/`SELECT cit_codigo AS CODIGO, cit_fecha AS FECHA, cit_estadoCita AS ESTADO, cit_medico AS MEDICO, cit_datosUsuario AS USUARIO FROM cita ORDER BY cit_fecha ASC`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json(data);
        }
    })
}

//3. Obtener todos los médicos de una especialidad específica
const getSpecialist = (req, res) => {
    const { ESPECIALIDAD } = req.query;
    connection.query(/*sql*/`SELECT med_nroMatriculaProsional AS NRO_MATRICULA, med_nombreCompleto AS NOMBRE, med_consultorio AS CONSULTORIO, med_especialidad AS ESPECIALIDAD FROM medico WHERE med_especialidad = ${ESPECIALIDAD}`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json(data);
        }
    })
}

//4. Encontrar la próxima cita para un paciente específico
const getNextMeet = (req, res) => {
    const { USUARIO } = req.query;
    connection.query(/*sql*/`SELECT cit_codigo AS CODIGO, cit_fecha AS FECHA, cit_estadoCita AS ESTADO, cit_medico AS MEDICO, cit_datosUsuario AS USUARIO FROM cita WHERE cit_fecha > NOW() AND cit_datosUsuario = ${USUARIO} ORDER BY cit_fecha ASC`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json(data)
        }
    })
}

//5. Encontrar todos los pacientes que tienen citas con un médico específico 
const getPatients = (req, res) => {

    const { MEDICO } = req.query;
    connection.query(/*sql*/`SELECT A.cit_codigo AS CODIGO_CITA, A.cit_Fecha AS FECHA, A.cit_datosUsuario AS ID_PACIENTE, B.usu_nombre AS PRIM_NOMBRE_PACIENTE, B.usu_segdo_nombre AS SEG_NOMBRE_PACIENTE, B.usu_primer_apellido_usuar AS PRIM_APELLIDO_PACIENTE, B.usu_segdo_apellido_usuar AS SEG_APELLIDO_PACIENTE FROM cita A JOIN usuario B ON A.cit_datosUsuario = B.usu_id WHERE A.cit_medico = ${MEDICO} AND A.cit_estadoCita <> 3 AND A.cit_estadoCita <> 4`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Se han encontrado ${data.length} citas activas`, data: data })
        }
    })
}

//6. Obtener las consultorías para un paciente específico
const getMeetPatient = (req, res) => {
    const { ID_USUARIO } = req.query;
    connection.query(/*sql*/`SELECT A.cit_codigo AS CODIGO_CITA, A.cit_fecha AS FECHA_CITA, B.med_nombreCompleto AS MEDICO, C.esp_nombre AS ESPECIALIDAD FROM cita A JOIN medico B ON A.cit_medico = B.med_nroMatriculaProsional JOIN especialidad C ON B.med_especialidad = C.esp_id WHERE cit_datosUsuario = ${ID_USUARIO}`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Se han encontrado ${data.length} citas`, data: data })
        }
    })
}

//7. Encontrar todas las citas para un día específico
const getMeetsDate = (req, res) => {
    const { FECHA } = req.query;
    connection.query(/*sql*/`SELECT cit_codigo AS CODIGO_CITA, cit_fecha AS FECHA_CITA, cit_estadoCita AS ESTADO, cit_medico AS MEDICO, cit_datosUsuario AS PACIENTE FROM cita WHERE DATE(cit_fecha) = ${FECHA}`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Se han encontrado ${data.length} citas`, data: data })
        }
    })
}

//8. Obtener los médicos y sus consultorios
const getMedicsAndConsultories = (req, res) => {
    connection.query(/*sql*/`SELECT A.med_nroMatriculaProsional AS ID, A.med_nombreCompleto AS NOMBRE, A.med_consultorio AS CONSULTORIO, A.med_especialidad AS ID_ESPECIALIDAD, B.cons_nombre AS NOMBRE_CONSULTORIO FROM medico A JOIN consultorio B ON A.med_consultorio = B.cons_codigo`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Se han encontrado ${data.length} registros`, data: data })
        }
    })
}

//9. Contar el número de citas que un médico tiene en un día específico
const getMeetsAmount = (req, res) => {
    const { MEDICO, FECHA } = req.query;
    connection.query(/*sql*/`SELECT cit_codigo AS CODIGO_CITA, cit_fecha AS FECHA_CITA, cit_estadoCita AS ESTADO, cit_medico AS MEDICO, cit_datosUsuario AS PACIENTE FROM cita WHERE DATE(cit_fecha) = ${FECHA} AND cit_medico = ${MEDICO}`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Se han encontrado ${data.length} citas`, data: data })
        }
    })
}

//10.Obtener los consultorio donde se aplicó las citas de un paciente
const getMeetConsultory = (req, res) => {
    const { PACIENTE } = req.query;
    connection.query(/*sql*/`SELECT A.cit_codigo AS CODIGO_CITA, A.cit_fecha AS FECHA_CITA, B.med_nombreCompleto AS MEDICO, A.cit_datosUsuario AS PACIENTE, B.med_consultorio AS ID_CONSULTORIO, C.cons_nombre AS NOMBRE_CONSULTORIO FROM cita A JOIN medico B ON A.cit_medico = B.med_nroMatriculaProsional JOIN consultorio C ON B.med_consultorio = C.cons_codigo WHERE  A.cit_datosUsuario = ${PACIENTE}`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Se han encontrado ${data.length} consultorios`, data: data })
        }
    })
}

//11.Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendida
const getMeetGender = (req, res) => {
    const { GENERO } = req.query;
    connection.query(/*sql*/`SELECT A.cit_codigo AS CODIGO_CITA, A.cit_fecha AS FECHA_CITA, A.cit_medico AS MEDICO, A.cit_datosUsuario AS ID_PACIENTE, B.usu_nombre AS PRIM_NOMBRE_PACIENTE, B.usu_segdo_nombre AS SEG_NOMBRE_PACIENTE, B.usu_primer_apellido_usuar AS PRIM_APELLIDO_PACIENTE, B.usu_segdo_apellido_usuar AS SEG_APELLIDO_PACIENTE FROM cita A JOIN usuario B ON A.cit_datosUsuario = B.usu_id WHERE A.cit_estadoCita = 5 AND B.usu_genero = ${GENERO}`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Se han encontrado ${data.length} citas atendidas a ese genero`, data: data })
        }
    })
}
//12.Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.
const postPatient = (req, res) => {
    const { ID, PRIM_NOMBRE, SEG_NOMBRE, PRIM_APELLIDO, SEG_APELLIDO, TELEFONO, DIRECCION, EMAIL, FECHA_NAC, TIPO_DOC, GENERO, ACUDIENTE } = req.body
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    const bodyValues = Object.values(req.body);
    let fecha = "0";
    bodyValues.forEach(value => {
        if (fechaRegex.test(value) == true) {
            fecha = new Date(value);
        }
    });
    if (fecha == "0") {
        res.status(500).json({ error: `El formato de fecha no coincide o no fue enviado` });
    } else {
        const edad = Math.floor((new Date() - fecha) / (1000 * 60 * 60 * 24 * 365.25));
        if (edad < 18) {
            connection.query(/*sql*/`SELECT * FROM acudiente WHERE acu_codigo = ${ACUDIENTE}`, (err, data, fil) => {
                if (err) {
                    res.status(500).json({ error: err });
                } else {
                    if (data.length != 0) {
                        connection.query(/*sql*/`INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_e_mail, usu_fechNAc, usu_tipodoc, usu_genero, usu_acudiente) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`, [ID, PRIM_NOMBRE, SEG_NOMBRE, PRIM_APELLIDO, SEG_APELLIDO, TELEFONO, DIRECCION, EMAIL, FECHA_NAC, TIPO_DOC, GENERO, ACUDIENTE], (err, data, fil) => {
                            if (err) {
                                res.status(500).json({ error: err });
                            } else {

                                res.json({ message: 'Data ingresada con exito', data: data });
                            }
                        });
                    } else { res.json({ message: 'El acudiente no existe, por favor primero cree los datos del acudiente' }); }
                }
            });
        } else {
            let ACUDIENTE2;
            ACUDIENTE == 0 ? ACUDIENTE2 = null : ACUDIENTE2 = ACUDIENTE;
            connection.query(/*sql*/`INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_e_mail, usu_fechNAc, usu_tipodoc, usu_genero, usu_acudiente) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`, [ID, PRIM_NOMBRE, SEG_NOMBRE, PRIM_APELLIDO, SEG_APELLIDO, TELEFONO, DIRECCION, EMAIL, FECHA_NAC, TIPO_DOC, GENERO, ACUDIENTE2], (err, data, fil) => {
                if (err) {
                    res.status(500).json({ error: err });
                } else {

                    res.json({ message: 'Data ingresada con exito', data: data });
                }
            });
        }

    }
}
export const methodsHTTP = {
    getUsuarios,
    getDates,
    getSpecialist,
    getNextMeet,
    getPatients,
    getMeetPatient,
    getMeetsDate,
    getMedicsAndConsultories,
    getMeetsAmount,
    getMeetConsultory,
    getMeetGender,
    postPatient
}