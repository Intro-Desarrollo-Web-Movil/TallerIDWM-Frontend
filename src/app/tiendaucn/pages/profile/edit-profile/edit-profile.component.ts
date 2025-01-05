import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { EditProfileFormComponent } from '../../../components/edit-profile-form/edit-profile-form.component';

@Component({
  selector: 'edit-profile',
  imports: [NavbarComponent, CommonModule, EditProfileFormComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

}
