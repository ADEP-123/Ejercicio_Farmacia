import { Router } from 'express';
import { methodsHTTP as categoriaController } from '../controller/categoria.controllers.js';
const router = Router();

export default router;

//1. Obtener todos los pacientes alfabéticamente
router.get("/getUsuarios", categoriaController.getUsuarios);

// 2. Obtener todas las citas alfabéticamente
router.get("/getCitas", categoriaController.getDates);

//3. Obtener todos los médicos de una especialidad específica
router.get("/getSpecialist", categoriaController.getSpecialist);

//4. Encontrar la próxima cita para un paciente específico 
router.get("/getNextMeet", categoriaController.getNextMeet);

//5. Encontrar todos los pacientes que tienen citas con un médico específico )
router.get("/getPatients", categoriaController.getPatients);

//6. Obtener las consultorías para un paciente específico
router.get("/getMeetPatient", categoriaController.getMeetPatient);

//7. Encontrar todas las citas para un día específico
router.get("/getMeetsDate", categoriaController.getMeetsDate);

//8. Obtener los médicos y sus consultorios
router.get("/getMedicsAndConsultories", categoriaController.getMedicsAndConsultories);


