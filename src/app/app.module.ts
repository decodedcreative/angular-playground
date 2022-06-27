import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { HeaderNavItemComponent } from './header/header-nav-item/header-nav-item.component';
import { HeaderLinkComponent } from './header/header-link/header-link.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavComponent,
    HeaderNavItemComponent,
    HeaderLinkComponent,
  ],
})
export class AppModule {}
