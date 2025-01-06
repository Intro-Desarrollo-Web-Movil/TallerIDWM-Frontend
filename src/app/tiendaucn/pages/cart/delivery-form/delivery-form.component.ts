import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'delivery-form',
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './delivery-form.component.html',
  styleUrl: './delivery-form.component.css'
})

export class DeliveryFormComponent implements OnInit {
  form!: FormGroup;
  error: boolean = false;
  success: boolean = false;
  errorMessage: string[] = [];
  successMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      Nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Telefono: ['', [Validators.required, Validators.pattern('^[+][0-9]{11,12}$')]], // Validación para el formato +56912345678
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Lógica para enviar el formulario
      console.log('Formulario enviado', this.form.value);
      this.success = true;
      this.successMessage = 'Compra realizada con éxito, te llegará la notificación a tu correo.';
      this.error = false;
      // Redirige a una página de éxito si es necesario
      // this.router.navigate(['/success']);
    } else {
      this.error = true;
      this.errorMessage = ['Por favor, complete todos los campos correctamente.'];
      this.success = false;
    }
  }

  get nombreInvalid() {
    return this.form.get('Nombre')?.invalid && this.form.get('Nombre')?.touched;
  }
  get apellidoInvalid() {
    return this.form.get('Apellido')?.invalid && this.form.get('Apellido')?.touched;
  }
  get telefonoInvalid() {
    return this.form.get('Telefono')?.invalid && this.form.get('Telefono')?.touched;
  }
  get emailInvalid() {
    return this.form.get('Email')?.invalid && this.form.get('Email')?.touched;
  }
}
