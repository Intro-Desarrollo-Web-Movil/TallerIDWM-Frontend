import { Routes } from '@angular/router';
import { AuthGuard } from './tiendaucn/guards/auth.guard';

/**
 * Definición de las rutas de la aplicación.
 */
export const routes: Routes = [

  /**
   * Ruta por defecto para la lista de productos.
   *
   * path: 'product-list' - Nombre de la ruta.
   * pathMatch: 'full' - Redirige a 'product-list' con cualquier coincidencia.
   * loadComponent: () => import('./tiendaucn/pages/product/product-list/product-list.component').then(m => m.ProductListComponent) - Carga el componente de la lista de productos.
   */
  {
    path: 'product-list',
    pathMatch: 'full',
    loadComponent: () =>
      import('./tiendaucn/pages/product/product-list/product-list.component').then(m =>
        m.ProductListComponent)
  },

  /**
   * Ruta para la gestión de clientes.
   *
   * path: 'customer-management' - Nombre de la ruta.
   * loadComponent: () => import('./tiendaucn/pages/admin/customer-management/customer-management.component').then(m => m.CustomerManagementComponent) - Carga el componente de gestión de clientes.
   * canActivate: [AuthGuard] - Protege la ruta con el guard de autenticación.
   * data: { role: 'Admin' } - Especifica que solo los usuarios con rol 'Admin' pueden acceder.
   */
  {
    path: 'customer-management',
    loadComponent: () =>
      import('./tiendaucn/pages/admin/customer-management/customer-management.component').then(m =>
        m.CustomerManagementComponent),
    canActivate: [AuthGuard],
    data: { role: 'Admin' }
  },

  /**
   * Ruta para la gestión de productos.
   *
   * path: 'product-management' - Nombre de la ruta.
   * loadComponent: () => import('./tiendaucn/pages/admin/product-management/product-management.component').then(m => m.ProductManagementComponent) - Carga el componente de gestión de productos.
   * canActivate: [AuthGuard] - Protege la ruta con el guard de autenticación.
   * data: { role: 'Admin' } - Especifica que solo los usuarios con rol 'Admin' pueden acceder.
   */
  {
    path: 'product-management',
    loadComponent: () =>
      import('./tiendaucn/pages/admin/product-management/product-management.component').then(m =>
        m.ProductManagementComponent),
    canActivate: [AuthGuard],
    data: { role: 'Admin' }
  },

  /**
   * Ruta para el formulario de entrega.
   *
   * path: 'delivery-form' - Nombre de la ruta.
   * loadComponent: () => import('./tiendaucn/pages/cart/delivery-form/delivery-form.component').then(m => m.DeliveryFormComponent) - Carga el componente del formulario de entrega.
   */
  {
    path: 'delivery-form',
    loadComponent: () =>
      import('./tiendaucn/pages/cart/delivery-form/delivery-form.component').then(m =>
        m.DeliveryFormComponent)
  },

  /**
   * Ruta para el carrito de compras.
   *
   * path: 'cart' - Nombre de la ruta.
   * loadComponent: () => import('./tiendaucn/pages/cart/cart/cart.component').then(m => m.CartComponent) - Carga el componente del carrito de compras.
   */
  {
    path: 'cart',
    loadComponent: () =>
      import('./tiendaucn/pages/cart/cart/cart.component').then(m =>
        m.CartComponent)
  },

  /**
   * Ruta para cambiar la contraseña.
   *
   * path: 'change-password' - Nombre de la ruta.
   * loadComponent: () => import('./tiendaucn/pages/profile/change-password/change-password.component').then(m => m.ChangePasswordComponent) - Carga el componente para cambiar la contraseña.
   */
  {
    path: 'change-password',
    loadComponent: () =>
      import('./tiendaucn/pages/profile/change-password/change-password.component').then(m =>
        m.ChangePasswordComponent)
  },

  /**
   * Ruta para editar el perfil.
   *
   * path: 'edit-profile' - Nombre de la ruta.
   * loadComponent: () => import('./tiendaucn/pages/profile/edit-profile/edit-profile.component').then(m => m.EditProfileComponent) - Carga el componente para editar el perfil.
   */
  {
    path: 'edit-profile',
    loadComponent: () =>
      import('./tiendaucn/pages/profile/edit-profile/edit-profile.component').then(m =>
        m.EditProfileComponent)
  },

  /**
   * Ruta para el registro de usuarios.
   *
   * path: 'register' - Nombre de la ruta.
   * loadComponent: () => import('./tiendaucn/pages/auth/register/register.component').then(m => m.RegisterComponent) - Carga el componente de registro.
   */
  {
    path: 'register',
    loadComponent: () =>
      import('./tiendaucn/pages/auth/register/register.component').then(m =>
        m.RegisterComponent)
  },

  /**
   * Ruta para el inicio de sesión.
   *
   * path: 'login' - Nombre de la ruta.
   * loadComponent: () => import('./tiendaucn/pages/auth/login/login.component').then(m => m.LoginComponent) - Carga el componente de inicio de sesión.
   */
  {
    path: 'login',
    loadComponent: () =>
      import('./tiendaucn/pages/auth/login/login.component').then(m =>
        m.LoginComponent)
  },

  /**
   * Ruta para redirigir cualquier ruta no válida a la lista de productos.
   *
   * path: '**' - Cualquier caso que no sea 'product-list' en la URL.
   * pathMatch: 'full' - Redirige a 'product-list' con cualquier coincidencia.
   * redirectTo: 'product-list' - Redirigir a 'product-list'.
   */
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'product-list'
  }
];
