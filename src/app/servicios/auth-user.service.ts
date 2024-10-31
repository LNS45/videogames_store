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
  private accesoPermitido: boolean = false;

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
    try {
      const usuario = this.usuarios.find((u) => u.user === user && u.password === password);
      if(usuario){
        //console.log("Usuario con esas credenciales encontrado: " + usuario);
        return this.accesoPermitido = true;
      }
      else{
        //console.log("Usuario no encontrado");
        return this.accesoPermitido = false;
      }
    } catch (e) {
      console.log("Hubo un error: " + e)
    }

    return this.accesoPermitido;
  }

  getAuthStatus(): boolean {
    return this.accesoPermitido;
  }

  logout(): void {
    this.accesoPermitido = false;
  }

}

