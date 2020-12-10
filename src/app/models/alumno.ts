export class Alumno{
    id:number;
    nombre:string;
    apellidos:string;
    edad:number;
    img:string;
    constructor(id:number,nombre:string, apellidos:string, edad:number, img:string){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.img = img;
    }
}