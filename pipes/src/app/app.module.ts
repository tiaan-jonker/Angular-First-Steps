import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MilesToKmConvertPipe } from './miles-to-km-convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MilesToKmConvertPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
