import { Injectable } from '@angular/core';

export interface Usuario{
  user: string;
  password: string;
  name: string;
  email: string;
}


@Injectable({
  providedIn: 'root'
})


export class AuthUserService {

  private usuarios: Usuario[];

  constructor() {
    this.usuarios = [
      {
        user: 'admin',
        password: 'admin',
        name: 'Administrador',
        email: 'administrador@localhost.com'
      },
    ]
  }

  registrarUsuario(newUser : Usuario) : void {
    this.usuarios.push(newUser);
  }

  checkUser(user : string, password : string) : boolean {
    let usuarioEncontrado : boolean = false;
    try {
      const usuario = this.usuarios.find((u) => u.user === user && u.password === password);
      if(usuario){
        //console.log("Usuario con esas credenciales encontrado: " + usuario);
        usuarioEncontrado = true;
      }
      else{
        //console.log("Usuario no encontrado");
        usuarioEncontrado = false;
      }
    } catch (e) {
      console.log("Hubo un error: " + e)
    }

    return usuarioEncontrado;
  }

}

