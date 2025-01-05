import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'change-password-form',
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.css'
})
export class ChangePasswordFormComponent implements OnInit {
  form!: FormGroup;
  error: boolean = false;
  success: boolean = false;
  errorMessage: string[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      CurrentPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      NewPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      ConfirmNewPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const newPassword = group.get('NewPassword')?.value;
    const confirmNewPassword = group.get('ConfirmNewPassword')?.value;
    return newPassword === confirmNewPassword ? null : { mismatch: true };
  }

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

  get currentPasswordInvalid() {
    return this.form.get('CurrentPassword')?.invalid && this.form.get('CurrentPassword')?.touched;
  }
  get newPasswordInvalid() {
    return this.form.get('NewPassword')?.invalid && this.form.get('NewPassword')?.touched;
  }
  get confirmNewPasswordInvalid() {
    return this.form.get('ConfirmNewPassword')?.invalid && this.form.get('ConfirmNewPassword')?.touched;
  }
  get passwordsMismatch() {
    return this.form.errors?.['mismatch'] && this.form.get('ConfirmNewPassword')?.touched;
  }
}
