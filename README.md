# Ejercicio nodejs express mysql2 mer_citas_medicas
Ejercicio realizado con node.js para interactuar con una base de datos

## Modo de uso:
1. Clonar el repositorio en su dispositivo
2. Ingresar a la carpeta backend > scripts y seleccionar el archivo script_database 
3. Ejecutar paso a paso el archivo para crear la base de datos de manera local, para esto recuerde que primero debe seguir los siguientes pasos:
   - 3.1. Corrobore tener Apache y Mysql instalados y corriendo en su ordenador
   - 3.2. Ejecute el comando "mysql -u root -p;"
   - 3.3. Si no muestra ningun error, Ejecute el comando "SHOW DATABASES;" y asegurese de no tener ninguna base de datos con el nombre "mer_citas_medicas_a_elizalde"
   - 3.4. Ahora ejecute uno a uno los comandos del archivo scriptDatabase
4. Revise que las configuraciones del archivo .env coincidan con las de su ordenador, si no es el caso cambielas
5. Abra un nuevo bloque de comandos desde el archivo del repositorio, si esta usando visual estudio puede hacerlo desde la pestaña terminal > new terminal
6. Con el comando "cd backend"  ingrese a la carpeta backend
7. Ejecute el comando "npm install"
8. Ejecute el comando "npm run dev"
9. La consola le mostrara la direccion http donde esta corriendo el servidor, la cual de manera predeterminada es "http://127.9.63.7:5000/merCitas"
10. Para interactuar con los enpoints es recomendable usar una extension como Thunder Client, para ello siga los siguientes pasos:
   - 10.1. Descarge la extension Thunder Client desde visual studio code
   - 10.2. En el panel izquierdo seleccione la extension Thunder Client y posteriormente en new request
   - 10.3. Coloque la url en el panel de direccion de Thunder Client con el endpoint especifico
   - 10.4. Seleccione el metodo de la peticion segun corresponda
   - 10.5. Si es un metodo POST envie un objeto en formato JSON con la informacion requerida en la pestaña body de Thunder Client

    ---
## Consultas SQL

---


1. Obtener todos los pacientes alfabéticamente
    - Endpoint: /getUsuarios
        - UrlDefault: http://127.9.63.7:5000/merCitas/getUsuarios
        - Metodo: get
        - Nota: 
   
2. Obtener todas las citas alfabéticamente
    - Endpoint: /getCitas
        - UrlDefault: http://127.9.63.7:5000/merCitas/getCitas
        - Metodo: get
        - Nota: 
   
3. Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):
    - Endpoint: /getSpecialist
        - UrlDefault: http://127.9.63.7:5000/merCitas/getSpecialist?ESPECIALIDAD=CODIGOESPECIALIDAD
        - Metodo: get
        - Nota: Remplaze CODIGOESPECIALIDAD por el codigo de especialidad existente en la base de datos
   
4. Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):
    - Endpoint: /getNextMeet
        - UrlDefault: http://127.9.63.7:5000/merCitas/getNextMeet?USUARIO=IDUSUARIO
        - Metodo: get
        - Nota: Remplaze IDUSUARIO por el codigo del paciente
   
5. Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)
    - Endpoint: /getPatients
        - UrlDefault: http://127.9.63.7:5000/merCitas/getPatients?MEDICO=IDMEDICO
        - Metodo: get
        - Nota: Remplaze IDMEDICO por el codigo del medico
   
6. Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)
    - Endpoint: /getMeetPatient
        - UrlDefault: http://127.9.63.7:5000/merCitas/getMeetPatient?ID_USUARIO=IDUSUARIO
        - Metodo: get
        - Nota: Remplaze IDUSUARIO por el numero de identificacion del paciente
   
7. Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)
    - Endpoint: /getMeetsDate
        - UrlDefault: http://127.9.63.7:5000/merCitas/getMeetsDate?FECHA=Fecha
        - Metodo: get
        - Nota: Remplaze Fecha por una fehca en formato "YYYY-MM-DD"
   
8. Obtener los médicos y sus consultorios
    - Endpoint: /getMedicsAndConsultories
        - UrlDefault: http://127.9.63.7:5000/merCitas/getMedicsAndConsultories
        - Metodo: get
        - Nota:
   
9. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)
    - Endpoint: /getMeetsAmount
        - UrlDefault: http://127.9.63.7:5000/merCitas/getMeetsAmount?MEDICO=IDMEDICO&FECHA=Fecha
        - Metodo: get
        - Nota:Remplaze Fecha por una fehca en formato "YYYY-MM-DD" y IDMEDICO por el id de el medico
   
10. Obtener los consultorio donde se aplicó las citas de un paciente
    - Endpoint: /getMeetConsultory
        - UrlDefault: http://127.9.63.7:5000/merCitas/getMeetConsultory?PACIENTE=IDPACIENTE
        - Metodo: get
        - Nota:Remplaze IDPACIENTE por el id de el paciente
    
11. Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad
    - Endpoint: /getMeetGender
        - UrlDefault: http://127.9.63.7:5000/merCitas/getMeetGender?GENERO=GENERONUM
        - Metodo: get
        - Nota:Remplaze GENERONUM por el numero del genero a consultar
    
12. Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.
    - Endpoint: /postPatient
        - UrlDefault: http://127.9.63.7:5000/merCitas/postPatient
        - Metodo: POST
        - Nota: para este caso debe insertar en el body de la peticion un objeto como el siguiente:
        ```json
        {
        "ID": Identificacion del usuario en numeros ej: 123456, 
        "PRIM_NOMBRE": Primer nombre del usuario ej: "Paco", 
        "SEG_NOMBRE": Segundo nombre del usuario ej: "Alberto" NOTA(Si no posee segundo nombre solo poner comillas ej: ""), 
        "PRIM_APELLIDO": Primer Apellido del usuario ej: "Pinilla", 
        "SEG_APELLIDO": Segundo Apellido del usuario ej: "Rojas", 
        "TELEFONO": Telefono del usuario en letras ej: "123456789", 
        "DIRECCION": Direccion del usuario en letras ej: "alameda 41-25", 
        "EMAIL": Email del usuario en letras ej: "andep@yahoo.es", 
        "FECHA_NAC": Fecha de nacimiento del usuario en formato YYYY-MM-DD ej: "1999-03-21", 
        "TIPO_DOC": Tipo de documento del usuario en numeros ej para cedula: 1, 
        "GENERO": Genero del usuario en numeros ej para masculino: 1, 
        "ACUDIENTE": Numero de identificacion del acudiente del usuario si este lo necesita en caso de ser menor de edad o desea ponerlo en caso de ser mayor ej: 1 NOTA(Si no necesita y no desea declarar un acudiente digite 0) 
        }
        ```
    
13. Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.
    - Endpoint: /rejectedMeets
        - UrlDefault: http://127.9.63.7:5000/merCitas/rejectedMeets=MES=Mes
        - Metodo: POST
        - Nota: Remplaze Mes por el numero de mes de interes a consultar.

---
## Notas:
--- 
1. Creacion de fecha de nacimiento para usuario: Se creo un campo llamado usu_fechNac de tipo Date para poder calcular la edad del usuario
2. Cambio a datetime de cita_fecha: se cambio el tipo de dato de cita_fecha a DateTime ya que es logico que las citas tengan la hora en la que estas se llevaran a cabo.
3. Se considero que el acudiente puede ser nulo para aquellos mayores de edad
4. En la consulta numero 5 se eliminan aquellos que la cita ya paso o que la cancelaron ya que no tendria interes mostrar estas citas al no realizarce.
