import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Componente para el formulario de cambio de contraseña.
 *
 * Este componente muestra un formulario para que el usuario cambie su contraseña.
 */
@Component({
  selector: 'change-password-form',
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.css'
})
export class ChangePasswordFormComponent implements OnInit {
  /**
   * FormGroup para manejar el formulario de cambio de contraseña.
   */
  form!: FormGroup;

  /**
   * Indica si hay un error en el formulario.
   */
  error: boolean = false;

  /**
   * Indica si el formulario se envió con éxito.
   */
  success: boolean = false;

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
   * Método para crear el formulario de cambio de contraseña.
   */
  createForm() {
    this.form = this.formBuilder.group({
      CurrentPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      NewPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      ConfirmNewPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    }, { validator: this.passwordMatchValidator });
  }

  /**
   * Validador personalizado para verificar que las contraseñas coincidan.
   * @param {FormGroup} group - FormGroup que contiene los campos de contraseña.
   * @returns {ValidationErrors | null} - Objeto de errores de validación o `null` si las contraseñas coinciden.
   */
  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const newPassword = group.get('NewPassword')?.value;
    const confirmNewPassword = group.get('ConfirmNewPassword')?.value;
    return newPassword === confirmNewPassword ? null : { mismatch: true };
  }

  /**
   * Método para manejar el envío del formulario.
   */
  onSubmit() {
    if (this.form.valid) {
      this.success = true;
      this.error = false;
      this.errorMessage = [];
    } else {
      this.success = false;
      this.error = true;
      this.errorMessage = ['Por favor, complete todos los campos correctamente.'];
    }
  }

  /**
   * Método para verificar si el campo 'CurrentPassword' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get currentPasswordInvalid() {
    return this.form.get('CurrentPassword')?.invalid && this.form.get('CurrentPassword')?.touched;
  }

  /**
   * Método para verificar si el campo 'NewPassword' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get newPasswordInvalid() {
    return this.form.get('NewPassword')?.invalid && this.form.get('NewPassword')?.touched;
  }

  /**
   * Método para verificar si el campo 'ConfirmNewPassword' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get confirmNewPasswordInvalid() {
    return this.form.get('ConfirmNewPassword')?.invalid && this.form.get('ConfirmNewPassword')?.touched;
  }

  /**
   * Método para verificar si las contraseñas no coinciden.
   * @returns {boolean} - `true` si las contraseñas no coinciden y el campo 'ConfirmNewPassword' ha sido tocado, `false` en caso contrario.
   */
  get passwordsMismatch() {
    return this.form.errors?.['mismatch'] && this.form.get('ConfirmNewPassword')?.touched;
  }
}
