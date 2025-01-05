import { Component, inject, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{

  form!: FormGroup;
  error: boolean = false;
  errorMessage: string[] = [];


  constructor(private FormBuilder: FormBuilder, private router: Router) {}


  ngOnInit(){
    this.createForm();
  }


  createForm(){
    this.form = this.FormBuilder.group({
      Email:['', [Validators.required, Validators.email]],
      Password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.get('Email')?.value;
      const password = this.form.get('Password')?.value;

      // Validacion de credenciales administrador
      if (email === 'admin@idwm.cl' && password === 'P4ssw0rd') {
        this.router.navigate(['/product-management']);
      }

      else {
        this.router.navigate(['/product-list']);
      }
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
