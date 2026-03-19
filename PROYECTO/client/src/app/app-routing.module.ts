import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocenteComponent } from './docente/docente.component';

const routes: Routes = [
  { path: 'catalogo', loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoModule) },
  { path: 'docente', component: DocenteComponent },
  { path: '', redirectTo: '/catalogo', pathMatch: 'full' },
  { path: '**', redirectTo: '/catalogo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
