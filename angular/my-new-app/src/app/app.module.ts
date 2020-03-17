import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { warningComponent } from './warningalert/warningalert.component';
import { successComponent } from './sucessalert/sucessalert.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    warningComponent,
    successComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
