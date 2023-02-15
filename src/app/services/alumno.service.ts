import { Injectable } from '@angular/core';
import { Alumno } from "src/app/interface/alumno";
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnos: Alumno[]=[
    {cod: 1, nombre: 'Maria', apellido: 'Luna', estatus: 'Activo'},
    {cod: 2, nombre: 'Antonio', apellido: 'Cordoba', estatus: 'Activo'},
    {cod: 3, nombre: 'Andres', apellido: 'Pinzon', estatus: 'Activo'},
    {cod: 4, nombre: 'Rodrigo', apellido: 'Mora', estatus: 'Inactivo'},
    {cod: 5, nombre: 'Jorge', apellido: 'Cipriano', estatus: 'Inactivo'},
  ];

  getAlumno(){
    return this.alumnos.slice();
  }

  private alumnos$!: BehaviorSubject<Alumno[]>;

  constructor() {
    this.alumnos$ = new BehaviorSubject(this.alumnos);
   }

   obtenerAlumnosPromise(): Promise<Alumno[]>{
    return new Promise((resolve, reject) => {
      if(this.alumnos.length > 0){
        resolve(this.alumnos);
      }else{
        reject([]);
      }
    });
  }

  obtenerAlumnosObservable(): Observable<Alumno[]>{
    return this.alumnos$.asObservable();
  }

  agregarAlumno(alumno: Alumno){
    this.alumnos.unshift(alumno);
    this.alumnos$.next(this.alumnos);
    console.log('Alumno agregado', this.alumnos);
  }
}
