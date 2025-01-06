import { Component, inject, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login-form',
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;
  error: boolean = false;
  errorMessage: string[] = [];
  totalItems: number = 1000; // Ajusta este valor según el número total de usuarios en tu base de datos

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private authService: AuthService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.get('Email')?.value;
      const password = this.form.get('Password')?.value;

      this.userService.getAllUsersFull(this.totalItems).then(response => {
        console.log('Lista de usuarios:', response); // Imprimir la lista de usuarios

        const users = response.users; // Acceder a la propiedad 'users' del objeto de respuesta
        const user = Array.isArray(users) ? users.find((u: any) => u.email === email && u.password === password) : null;

        if (user) {
          console.log('Usuario encontrado:', user); // Imprimir el usuario encontrado
          this.userService.setUserId(user.id); // Almacenar el ID del usuario logueado
          this.authService.login(user);
          if (user.role === 'Admin') {
            this.router.navigate(['/product-management']); // Redirige a la página de administración
          } else if (user.role === 'Customer') {
            this.router.navigate(['/product-list']); // Redirige a la página de inicio o cualquier otra página
          }
        } else {
          console.log('Usuario no encontrado'); // Imprimir si no se encontró el usuario
          this.error = true;
          this.errorMessage = ['Usuario no encontrado o contraseña incorrecta.'];
        }
      }).catch(error => {
        console.error('Error fetching users:', error);
        this.error = true;
        this.errorMessage = ['Error al conectar con el servidor.'];
      });
    } else {
      this.error = true;
      this.errorMessage = ['Por favor, complete todos los campos correctamente.'];
    }
  }

  get emailInvalid() {
    return this.form.get('Email')?.invalid && this.form.get('Email')?.touched;
  }
  get passwordInvalid() {
    return this.form.get('Password')?.invalid && this.form.get('Password')?.touched;
  }

}
