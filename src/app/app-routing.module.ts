import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { DocumentationComponent } from './documentation/documentation.component';

const routes: Routes = [
  {path:'public', component: PublicComponent},
  {path:'documentation', component: DocumentationComponent},
  { path:'', redirectTo:'public', pathMatch:'full'},
  // Other top-level routes
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // { path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
