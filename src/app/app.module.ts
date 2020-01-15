import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { OurProjectComponent } from './OurProjects/our-project.component';
import { JoinTeamComponent } from  './JoinTeam/join-team.component';
import { OurPartnersComponent } from './OurPartners/our-partners.component';
import { OurTeamComponent } from './OurTeam/our-team.component';
import { SetImageDirective } from './set-image.directive'

@NgModule({
  declarations: [
    AppComponent,
    OurProjectComponent,
    JoinTeamComponent,
    OurPartnersComponent,
    OurTeamComponent,
    SetImageDirective
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
