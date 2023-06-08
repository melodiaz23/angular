import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { httpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    // httpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
