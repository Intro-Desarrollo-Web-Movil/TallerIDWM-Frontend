import { Component, inject, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'register-form',
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit{

  form!: FormGroup;
  error: boolean = false;
  errorMessage: string[] = [];


  constructor(private FormBuilder: FormBuilder, private router: Router) {}


  ngOnInit(){
    this.createForm();
  }


  createForm(){
    this.form = this.FormBuilder.group({
      Name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      Email:['', [Validators.required, Validators.email]],
      BirthDate:['',[Validators.required, this.birthDateValidator()]], //YYYY-MM-DD
      Gender:['',[Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const birthDateValue = this.form.get('BirthDate')?.value;
      console.log('Fecha de Nacimiento:', birthDateValue); // Verificar el valor de la fecha


      // Navegar a otra página (por ejemplo, página de inicio)
      this.router.navigate(['/home']);
    } else {
      this.error = true;
      this.errorMessage = ['Por favor, complete todos los campos correctamente.'];
    }
  }

  get nameInvalid() {
    return this.form.get('Name')?.invalid && this.form.get('Name')?.touched;
  }
  get passwordInvalid() {
    return this.form.get('Password')?.invalid && this.form.get('Password')?.touched;
  }
  get emailInvalid() {
    return this.form.get('Email')?.invalid && this.form.get('Email')?.touched;
  }
  get birthDateInvalid() {
    return this.form.get('BirthDate')?.invalid && this.form.get('BirthDate')?.touched;
  }
  get genderInvalid() {
    return this.form.get('Gender')?.invalid && this.form.get('Gender')?.touched;
  }


  birthDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const birthDate = new Date(value);
      const today = new Date();

      if (isNaN(birthDate.getTime())) {
        return { invalidDate: 'La fecha no es válida' };
      }

      if (birthDate >= today) {
        return { futureDate: 'La fecha de nacimiento debe ser anterior a la fecha actual' };
      }

      return null;
    };
  }

}
