import { Component, inject, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Componente para el formulario de registro.
 *
 * Este componente muestra un formulario para que el usuario se registre en la aplicación.
 */
@Component({
  selector: 'register-form',
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {

  /**
   * FormGroup para manejar el formulario de registro.
   */
  form!: FormGroup;

  /**
   * Indica si hay un error en el formulario.
   */
  error: boolean = false;

  /**
   * Array para almacenar los mensajes de error.
   */
  errorMessage: string[] = [];

  /**
   * Constructor del componente.
   * @param {FormBuilder} formBuilder - Constructor para crear el FormGroup.
   * @param {Router} router - Servicio de enrutamiento de Angular.
   */
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  /**
   * Método de inicialización del componente.
   */
  ngOnInit() {
    this.createForm();
  }

  /**
   * Método para crear el formulario de registro.
   */
  createForm() {
    this.form = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.email]],
      BirthDate: ['', [Validators.required, this.birthDateValidator()]], // Formato YYYY-MM-DD
      Gender: ['', [Validators.required]],
    });
  }

  /**
   * Método para manejar el envío del formulario.
   */
  onSubmit() {
    if (this.form.valid) {
      const email = this.form.get('Email')?.value;
      const password = this.form.get('Password')?.value;

      // Verifica credenciales de administrador
      if (email === 'admin@idwm.cl' && password === 'P4ssw0rd') {
        this.router.navigate(['/product-management']);
      } else {
        this.router.navigate(['/product-list']);
      }
    } else {
      this.error = true;
      this.errorMessage = ['Por favor, complete todos los campos correctamente.'];
    }
  }

  /**
   * Método para verificar si el campo 'Name' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get nameInvalid() {
    return this.form.get('Name')?.invalid && this.form.get('Name')?.touched;
  }

  /**
   * Método para verificar si el campo 'Password' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get passwordInvalid() {
    return this.form.get('Password')?.invalid && this.form.get('Password')?.touched;
  }

  /**
   * Método para verificar si el campo 'Email' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get emailInvalid() {
    return this.form.get('Email')?.invalid && this.form.get('Email')?.touched;
  }

  /**
   * Método para verificar si el campo 'BirthDate' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get birthDateInvalid() {
    return this.form.get('BirthDate')?.invalid && this.form.get('BirthDate')?.touched;
  }

  /**
   * Método para verificar si el campo 'Gender' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get genderInvalid() {
    return this.form.get('Gender')?.invalid && this.form.get('Gender')?.touched;
  }

  /**
   * Validador personalizado para la fecha de nacimiento.
   * @returns {ValidatorFn} - Función de validación que retorna un objeto de errores de validación o `null`.
   */
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
