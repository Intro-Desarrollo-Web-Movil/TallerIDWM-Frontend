import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { Router } from '@angular/router';

/**
 * Componente para el formulario de entrega.
 *
 * Este componente muestra un formulario para que el usuario ingrese sus datos de entrega.
 */
@Component({
  selector: 'delivery-form',
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './delivery-form.component.html',
  styleUrl: './delivery-form.component.css'
})
export class DeliveryFormComponent implements OnInit {
  /**
   * FormGroup para manejar el formulario de entrega.
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
   * Mensaje de éxito.
   */
  successMessage: string = '';

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
   * Método para crear el formulario de entrega.
   */
  createForm() {
    this.form = this.formBuilder.group({
      Nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Telefono: ['', [Validators.required, Validators.pattern('^[+][0-9]{11,12}$')]], // Validación para el formato +56912345678
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  /**
   * Método para manejar el envío del formulario.
   */
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

  /**
   * Método para verificar si el campo 'Nombre' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get nombreInvalid() {
    return this.form.get('Nombre')?.invalid && this.form.get('Nombre')?.touched;
  }

  /**
   * Método para verificar si el campo 'Apellido' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get apellidoInvalid() {
    return this.form.get('Apellido')?.invalid && this.form.get('Apellido')?.touched;
  }

  /**
   * Método para verificar si el campo 'Telefono' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get telefonoInvalid() {
    return this.form.get('Telefono')?.invalid && this.form.get('Telefono')?.touched;
  }

  /**
   * Método para verificar si el campo 'Email' es inválido.
   * @returns {boolean} - `true` si el campo es inválido y ha sido tocado, `false` en caso contrario.
   */
  get emailInvalid() {
    return this.form.get('Email')?.invalid && this.form.get('Email')?.touched;
  }
}
