import { Alumno } from "src/app/interface/alumno";

export const alumnos = {
    obtenerAlumnos:()=>{
        return[
            {cod: 1, nombre: 'Maria', apellido: 'Luna', estatus: 'Activo-data'},
            {cod: 2, nombre: 'Antonio', apellido: 'Cordoba', estatus: 'Activo-data'},
            {cod: 3, nombre: 'Andres', apellido: 'Pinzon', estatus: 'Activo-data'},
            {cod: 4, nombre: 'Rodrigo', apellido: 'Mora', estatus: 'Inactivo-data'},
            {cod: 5, nombre: 'Jorge', apellido: 'Cipriano', estatus: 'Inactivo-data'},
            {cod: 6, nombre: 'Ana', apellido: 'Melendez', estatus: 'Activo-data'},
            {cod: 7, nombre: 'Nathalia', apellido: 'Oliveira', estatus: 'Activo-data'},
           
        ];
    },

    agregarAlumno: (alumno: Alumno) => {
        console.log('Agregando alumno desde alumno.data.ts');
      }
}