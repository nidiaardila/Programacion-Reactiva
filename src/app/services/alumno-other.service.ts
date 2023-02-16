import { Injectable } from '@angular/core';
import { Alumno } from '../interface/alumno'

@Injectable({
  providedIn: 'root'
})
export class AlumnoOtherService {

  private alumnos: Alumno[]=[
    {cod: 1, nombre: 'Maria', apellido: 'Luna', estatus: 'Activo-other'},
    {cod: 2, nombre: 'Antonio', apellido: 'Cordoba', estatus: 'Activo-other'},
    {cod: 3, nombre: 'Andres', apellido: 'Pinzon', estatus: 'Activo-other'},
    {cod: 4, nombre: 'Rodrigo', apellido: 'Mora', estatus: 'Inactivo-other'},
    {cod: 5, nombre: 'Jorge', apellido: 'Cipriano', estatus: 'Inactivo-other'},
  ]

  constructor() { }

  obtenerAlumno(): Array<Alumno>{
    return this.alumnos;
  }

  agregarAlumno(alumno: Alumno){
    alumno.nombre = 'Alumno-other-service';
    this.alumnos.push(alumno);
    console.log('alumno agregado', this.alumnos);
  }
}
