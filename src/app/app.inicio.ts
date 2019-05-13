import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Libro } from './libros/Libro';
import { LibrosService } from './libros/libros.service';

/**
 * The app component. This component is the base of s4_libros-Front
 */
@Component({
    selector: 'app-inicio',
    templateUrl: './app.inicio.html',
    styleUrls: ['./app.inicio.css']
})
export class AppInicio implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;
    select: boolean = false;
    Libros: Libro[];
    parametroBuscar: String;
    

       /**
     * @ignore
     */
    constructor(private LibrosService: LibrosService) { }

/**
* La salida que dice el componente padre
* que el usuario ya no quiere crear un libro
*/
@Output() cancel = new EventEmitter();

/**
* La salida que dice el componente padre
* el usuario creo el libro
*/
@Output() create = new EventEmitter();

    selected(): void
    {
        this.select = true;
    }

    diselected(): void
    {
         this.select = false;
    }

    getSelect(): boolean
    {
        return this.select;
    }

    logout(): void {
    }
     ngOnInit() {
       
    }
    getLibros(): void {
        var nombre = document.getElementById("libroTitulo"); 
        this.parametroBuscar=nombre.innerHTML;
        console.log(this.parametroBuscar);
        this.LibrosService.getLibrosPorNombre(this.parametroBuscar).subscribe(Libros => this.Libros = Libros,() => {
            this.create.emit();
        });
       console.log(nombre);
    }

}





