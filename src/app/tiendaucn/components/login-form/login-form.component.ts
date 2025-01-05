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
      // Navegar a otra página (por ejemplo, página de inicio)
      this.router.navigate(['/home']);
    } else {
      this.error = true;
      this.errorMessage = ['Por favor, complete todos los campos correctamente.'];
    }
  }


  get passwordInvalid() {
    return this.form.get('Password')?.invalid && this.form.get('Password')?.touched;
  }
  get emailInvalid() {
    return this.form.get('Email')?.invalid && this.form.get('Email')?.touched;
  }
}
