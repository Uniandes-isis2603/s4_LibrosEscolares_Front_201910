import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../Usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../usuario';

@Component({
selector: 'usuarioCrear-component',
templateUrl: './usuarioCrear.component.html',
styleUrls: ['./usuarioCrear.component.css']
})
export class UsuariocrearComponent implements OnInit {

/**
    * Constructor del componente
    * @param usuarioService El servicio del usuario
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private usuarioService: UsuarioService,
    private toastrService: ToastrService
) { }

/**
* El nuervo usuario
*/
usuario: Usuario;

/**
* La salida que dice el componente padre
* que el usuario ya no quiere crear un usuario
*/
@Output() cancel = new EventEmitter();

/**
* La salida que dice el componente padre
* el usario creo el componente
*/
@Output() create = new EventEmitter();

/**
* Crea un nuevo usuario
*/
createUsuario(): void {
    this.usuario.calificacion = 3;
    this.usuarioService.createUsuario(this.usuario)
        .subscribe(() => {
            this.create.emit();
            this.toastrService.success("El usuario fue creado", "Creacion usuario");
        }, err => {
            this.toastrService.error(err, "Error");
        });
}

/**
* Informa al componente padre que el usuario ya no quiere crear un usuario
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* La funcuion que inicializa el commponente
*/
ngOnInit() {
    this.usuario = new Usuario();
}
}