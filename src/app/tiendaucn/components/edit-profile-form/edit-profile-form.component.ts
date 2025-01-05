import { Component, inject, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'edit-profile-form',
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-profile-form.component.html',
  styleUrl: './edit-profile-form.component.css'
})
export class EditProfileFormComponent implements OnInit{

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
      Name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.email]],
      BirthDate: ['', [Validators.required, this.birthDateValidator()]], // YYYY-MM-DD
      Gender: ['', [Validators.required]],
    });
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

  navigateToChangePassword() {
    this.router.navigate(['/change-password']);
  }

  get nameInvalid() {
    return this.form.get('Name')?.invalid && this.form.get('Name')?.touched;
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
}
