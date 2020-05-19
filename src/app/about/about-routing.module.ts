import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMainComponent } from './about-main/about-main.component'
import { BioComponent } from './bio/bio.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {
    path: '',
    component: AboutMainComponent,
    children: [
      { path: '', component: BioComponent },
      { path: 'team', component: TeamComponent },
      { path: 'clients', component: ClientsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
