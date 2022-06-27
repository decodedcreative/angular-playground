import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HeaderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
