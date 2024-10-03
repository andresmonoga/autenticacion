import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );
  private router      = inject( Router )

  public myForm: FormGroup = this.fb.group({

    email: [ '', [ Validators.required, Validators.email ]],
    password: [ '', [ Validators.required, Validators.minLength(6) ]],
    name:[ '', [ Validators.required ]]
  })



  register(){
    const { email, password, name } = this.myForm.value;

    this.authService.register(email, password, name)
    .subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),

      error: (message) =>{
       Swal.fire('Error', message, 'error')
      }
      })
  }
}

