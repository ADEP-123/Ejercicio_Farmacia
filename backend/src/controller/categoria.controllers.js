import getConnection from "../db/database.js";
const connection = getConnection();


//1. Obtener todos los pacientes alfabéticamente
const getUsuarios = (req, res) => {
    connection.query(/*sql*/`SELECT usu_id AS ID, usu_nombre AS PRIM_NOMBRE, usu_segdo_nombre AS SEG_NOMBRE, usu_primer_apellido_usuar AS PRIM_APELLIDO, usu_segdo_apellido_usuar AS SEG_APELLIDO, usu_telefono AS TELEFONO, usu_direccion AS DIRECCION, usu_e_mail AS EMAIL, usu_tipodoc AS TIPO_DOC, usu_genero AS GENERO, usu_acudiente AS ACUDIENTE FROM usuario ORDER BY usu_nombre ASC,usu_segdo_nombre ASC, usu_primer_apellido_usuar ASC, usu_segdo_apellido_usuar ASC`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json(data)
        }
    });

}
export const methodsHTTP = {
    getUsuarios
}