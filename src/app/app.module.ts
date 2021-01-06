import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapsComponent } from './pages/maps/maps.component';

@NgModule({
  declarations: [AppComponent, MapsComponent],
  imports: [BrowserModule, AppRoutingModule, LeafletModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
