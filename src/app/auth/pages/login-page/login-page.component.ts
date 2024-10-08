import { Component, inject } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {


  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );
  private router      = inject( Router )

  public myForm: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  })



  login() {
    if (this.myForm.valid) {
      const { email, password } = this.myForm.value;

      this.authService.login(email, password)
        .subscribe({
          next: () => this.router.navigateByUrl('/dashboard'),
          error: (message) => {
            Swal.fire('Error', message, 'error');
          }
        });
    } else {
      Swal.fire('Error', 'Por favor, complete todos los campos requeridos correctamente.', 'warning');
    }
  }


}
