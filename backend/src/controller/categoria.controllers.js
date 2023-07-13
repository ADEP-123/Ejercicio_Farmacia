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

export const methodsHTTP = {
    getUsuarios,
    getDates,
    getSpecialist,
    getNextMeet,
    getPatients
}