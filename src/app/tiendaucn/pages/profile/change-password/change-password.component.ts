import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ChangePasswordFormComponent } from '../../../components/change-password-form/change-password-form.component';

@Component({
  selector: 'change-password',
  imports: [NavbarComponent, CommonModule, ChangePasswordFormComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

}
