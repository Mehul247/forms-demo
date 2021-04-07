import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


const routes: Routes = [
  {
    path: 'reactive',
    component: ReactiveFormComponent
  },
  {
    path: '',
    redirectTo: '/reactive',
    pathMatch: 'full'
  },
  {
    path: 'td',
    component: TemplateDrivenFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
