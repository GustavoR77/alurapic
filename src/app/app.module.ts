import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app.routing.module';
import { PhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
