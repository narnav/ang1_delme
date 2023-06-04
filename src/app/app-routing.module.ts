import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WagaComponent } from './waga/waga.component';
import { BagaComponent } from './baga/baga.component';
import { AboutComponent } from './about/about.component';
import { CreateStudentComponent } from './create-student/create-student.component';

const routes: Routes = [
    {path:"waga",component:WagaComponent},
    {path:"baga",component:BagaComponent},
    {path:"about",component:AboutComponent},
    {path:"create",component:CreateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
