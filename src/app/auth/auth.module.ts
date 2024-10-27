import { NgModule } from '@angular/core';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

  ],
  imports: [
    AuthComponentComponent,
    ReactiveFormsModule,
  ],
  exports: [
  ]
})
export class AuthModule { 
  
}
