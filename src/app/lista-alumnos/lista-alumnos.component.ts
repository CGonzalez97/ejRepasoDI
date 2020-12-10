import { Component, OnInit } from '@angular/core';
import {Alumno} from '../models/alumno';

export interface Alumnos {
  id:number
  nombre: string;
  apellidos:string;
  edad: number;
  img: string;
}

/*const listaAlumnos:Alumno[] = [new Alumno(1,'Paco','Pérez Gutiérrez',21,'../../assets/img1.jpg'),
                              new Alumno(2,'Lucía','Martín Fernández',27,'../../assets/img2.jpg'),
                              new Alumno(3,'Marcos','Lopez Lozano',19,'../../assets/img3.jpg'),
                              new Alumno(4,'Marta','Ordóñez Lucena',23,'../../assets/img4.jpg')];*/

/*const alumnos:Alumnos[]=[
  {
    id:1,
    nombre: 'Paco',
    apellidos:'Pérez Gutiérrez',
    edad: 21,
    img: '../../assets/img1.jpg'
  },
  {
    id:2,
    nombre: 'Lucía',
    apellidos:'Martín Fernández',
    edad: 27,
    img: '../../assets/img2.jpg'
  },
  {
    id:3,
    nombre: 'Marcos',
    apellidos:'Lopez Lozano',
    edad: 19,
    img: '../../assets/img3.jpg'
  },
  {
    id:4,
    nombre: 'Marta',
    apellidos:'Ordóñez Lucena',
    edad: 23,
    img: '../../assets/img4.jpg'
  }
];*/


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit {

  

  

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'foto', 'nombre', 'edad','eliminar'];
  
  listaAlumnos:Alumno[] = [new Alumno(1,'Paco','Pérez Gutiérrez',21,'../../assets/img1.jpg'),
                              new Alumno(2,'Lucía','Martín Fernández',27,'../../assets/img2.jpg'),
                              new Alumno(3,'Marcos','Lopez Lozano',19,'../../assets/img3.jpg'),
                              new Alumno(4,'Marta','Ordóñez Lucena',23,'../../assets/img4.jpg')];
            
  //dataSource = this.listaAlumnos;

  eliminarAlumno(alumnoAElim:Alumno){
    let indiceElemento = this.listaAlumnos.indexOf(alumnoAElim);
    //alert(this.listaAlumnos.length);
    let cadena:string;
    for(let i in this.listaAlumnos){
      cadena += ' '+this.listaAlumnos[i].nombre;
    }
    alert(cadena);
    this.listaAlumnos.splice(indiceElemento,1);
    //alert(this.listaAlumnos.length);
    cadena = '';
    for(let i in this.listaAlumnos){
      cadena += ' '+this.listaAlumnos[i].nombre;
    }
    alert(cadena);
    

  }

}
