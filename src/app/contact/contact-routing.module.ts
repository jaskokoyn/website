import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMainComponent } from './contact-main/contact-main.component'

const routes: Routes = [
  { path: '', component: ContactMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
