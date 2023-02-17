import { Injectable } from '@angular/core';
import { Alumno } from "src/app/interface/alumno";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, from, interval, map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  obtenerAlumnos() {
    throw new Error('Method not implemented.');
  }

  private alumnos: Alumno[]=[
    {cod: 1, nombre: 'Maria', apellido: 'Luna', estatus: 'Activo-other'},
    {cod: 2, nombre: 'Antonio', apellido: 'Cordoba', estatus: 'Activo-other'},
    {cod: 3, nombre: 'Andres', apellido: 'Pinzon', estatus: 'Activo-other'},
    {cod: 4, nombre: 'Rodrigo', apellido: 'Mora', estatus: 'Inactivo-other'},
    {cod: 5, nombre: 'Jorge', apellido: 'Cipriano', estatus: 'Inactivo-other'},
    {cod: 6, nombre: 'Ana', apellido: 'Melendez', estatus: 'Activo-other'},
    {cod: 7, nombre: 'Nathalia', apellido: 'Oliveira', estatus: 'Activo-other'},
    {cod: 8, nombre: 'Sophia', apellido: 'Jaimes', estatus: 'Inactivo-other'},
    {cod: 9, nombre: 'Blanca', apellido: 'Herrera', estatus: 'Activo-other'},
    {cod: 10, nombre: 'Fernando', apellido: 'Diaz', estatus: 'Activo-other'},
  ];

  getAlumno(){
    return this.alumnos.slice();
  }

  private alumnos$!: BehaviorSubject<Alumno[]>;
 

  constructor() {
    this.alumnos$ = new BehaviorSubject(this.alumnos);

    of(this.alumnos).pipe(
      map((alumnos: Alumno[]) => {
        return alumnos.filter((alumno: Alumno) => alumno.cod == 3)
      })
    ).subscribe((alumnos)=>{
      console.log("Obtenido desde el of, filtrado por cod de alumno ", alumnos);
    });

    of(this.alumnos).pipe(
      mergeMap((alumnos: Alumno[]) => {
        return interval(5000).pipe(map((i => {
          return {
            cod: `${alumnos[i].cod} - ${i}`,
            nombre: alumnos[i].nombre,
            apellido: alumnos[i].apellido,
            estatus: alumnos[i].estatus
          }
        })));
      })
    ).subscribe((datos) => console.log('Utilizando mergeMap', datos));

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
