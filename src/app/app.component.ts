import { Component } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { Alumno} from './interface/alumno';
import { AlumnoOtherService}  from './services/alumno-other.service';
import { AlumnoService} from './services/alumno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Programacion-Reactiva';

  constructor( private alumnoService: AlumnoService){

  }

  agregarAlumno(){
    let alumnoN: Alumno = {
      cod: 123,
      nombre: 'Andres',
      apellido: 'Riquelme',
      estatus: 'Activo'
    };
    this.alumnoService.agregarAlumno(alumnoN);
  }

}
