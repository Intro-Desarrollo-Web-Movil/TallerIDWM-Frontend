import { Routes } from '@angular/router';

export const routes: Routes = [

  // RUTA PRODUCT LIST (POR DEFECTO)
  {
    path: 'product-list', // Nombre de la ruta
    pathMatch: 'full', // Me redirija a users con cualquier cosa

    // Donde está el componente
    loadComponent: () =>
      import('./tiendaucn/pages/product/product-list/product-list.component').then(m =>
        m.ProductListComponent)
  },

  // RUTA CUSTOMER MANAGEMENT
  {
    path: 'customer-management',
    loadComponent: () =>
      import('./tiendaucn/pages/admin/customer-management/customer-management.component').then(m =>
        m.CustomerManagementComponent)
  },

  // RUTA PRODUCT MANAGEMENT
  {
    path: 'product-management',
    loadComponent: () =>
      import('./tiendaucn/pages/admin/product-management/product-management.component').then(m =>
        m.ProductManagementComponent)
  },

  // RUTA DELIVERY FORM
  {
    path: 'delivery-form',
    loadComponent: () =>
      import('./tiendaucn/pages/cart/delivery-form/delivery-form.component').then(m =>
        m.DeliveryFormComponent)
  },

  // RUTA CART
  {
    path: 'cart',
    loadComponent: () =>
      import('./tiendaucn/pages/cart/cart/cart.component').then(m =>
        m.CartComponent)
  },

  // RUTA CHANGE PASSWORD
  {
    path: 'change-password',
    loadComponent: () =>
      import('./tiendaucn/pages/profile/change-password/change-password.component').then(m =>
        m.ChangePasswordComponent)
  },

  // RUTA EDIT PROFILE
  {
    path: 'edit-profile',
    loadComponent: () =>
      import('./tiendaucn/pages/profile/edit-profile/edit-profile.component').then(m =>
        m.EditProfileComponent)
  },

  // RUTA REGISTER
  {
    path: 'register',
    loadComponent: () =>
      import('./tiendaucn/pages/auth/register/register.component').then(m =>
        m.RegisterComponent)
  },

  // RUTA LOGIN
  {
    path: 'login',
    loadComponent: () =>
      import('./tiendaucn/pages/auth/login/login.component').then(m =>
        m.LoginComponent)
  },



  // VALIDAR RUTAS
  {
    path: '**', // Cualquier caso que no sea product-list en la URL
    pathMatch: 'full', // Me redirija a product-list con cualquier cosa
    redirectTo: 'product-list' // Redirigir a product-list
  }
];
