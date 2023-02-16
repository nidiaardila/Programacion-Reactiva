import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MatTableDataSource } from '@angular/material/table';
// import { filter, from, interval, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit, OnDestroy{

  alumnos!: Alumno[];
  alumnos$!: Observable<Alumno[]>;

  dataSource!: MatTableDataSource<Alumno>;
  // alumnos: Alumno[] = [];
  displayedColumns: string[]=['cod', 'nombre', 'apellido', 'estatus', 'acciones'];
  // dataSource!: MatTableDataSource<Alumno>;
  suscripcion!: Subscription;

  constructor(private _alumnoService: AlumnoService ){

    // of(this.alumnos).pipe(
    //   map((alumnos: Alumno[]) => {
    //     return alumnos.filter((alumno: Alumno) => alumno.cod == 3)
    //   })
    // ).subscribe((alumnos)=>{
    //   console.log("Obtenido desde el OF, filtrado por cod ", alumnos);
    // });

    // of(this.alumnos).pipe(
    //   mergeMap((alumnos: Alumno[]) => {
    //     return interval(5000).pipe(map((i => {
    //       return {
    //         cod: `${alumnos[i].cod} - ${i}`,
    //         nombre: alumnos[i].nombre,
    //         apellido: alumnos[i].apellido,
    //         estatus: alumnos[i].estatus
    //       }
    //     })));
    //   })
    // ).subscribe((datos) => console.log('Utilizando mergeMap', datos));

  }

  ngOnInit(): void {
    console.log("Instanciando MatTAbleDataSource");
    this.dataSource = new MatTableDataSource<Alumno>();
    this.suscripcion = this._alumnoService.obtenerAlumnosObservable().subscribe((alumnos: Alumno[]) => {
      console.log("Agregando datos al MatTAbleDataSource");
      this.dataSource.data = alumnos;
    });
    console.log("Ultima linea del ngOnInit");
    this.alumnos$ = this._alumnoService.obtenerAlumnosObservable();
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
  // ngOnInit(): void{
  //   this.cargarAlumnos();
  // }

  // cargarAlumnos() {
  //   this.alumnos = this._alumnoService.getAlumno();
  //   this.dataSource = new MatTableDataSource(this.alumnos)
  // }

  
}
