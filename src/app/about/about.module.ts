import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent } from './about-main/about-main.component';
import { BioComponent } from './bio/bio.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  declarations: [AboutMainComponent, BioComponent, TeamComponent, ClientsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
