import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (m) => m.RegisterComponent,
      ),
  },
  //admin routes
  {
    path: 'perfilAdmin',
    loadComponent: () =>
      import('./modules/admin/perfiladmin/perfiladmin.component').then(
        (m) => m.PerfiladminComponent,
      ),
  },
  {
    path: 'addmascota',
    loadComponent: () =>
      import('./modules/admin/addmascota/addmascota.component').then(
        (m) => m.AddmascotaComponent,
      ),
  },
  {
    path: 'detailmascota/:id',
    loadComponent: () =>
      import('./modules/admin/detailmascota/detailmascota.component').then(
        (m) => m.DetailmascotaComponent,
      ),
  },

  {
    path: 'mascotasExitentes',
    loadComponent: () =>
      import('./modules/admin/mascotasadd/mascotasadd.component').then(
        (m) => m.MascotasaddComponent,
      ),
  },

  //user

  {
    path: 'catalogoM',
    loadComponent: () =>
      import('./modules/users/catalogo/catalogo.component').then(
        (m) => m.CatalogoComponent,
      ),
  },
  {
    path: 'detalleM',
    loadComponent: () =>
      import('./modules/users/userdetailmasc/userdetailmasc.component').then(
        (m) => m.UserdetailmascComponent,
      ),
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./modules/users/perfiluser/perfiluser.component').then(
        (m) => m.PerfiluserComponent,
      ),
  },
];
