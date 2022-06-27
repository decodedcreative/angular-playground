import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderNavItemComponent } from './header-nav-item/header-nav-item.component';
import { HeaderLinkComponent } from './header-link/header-link.component';

@NgModule({
  imports: [],
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderNavComponent,
    HeaderNavItemComponent,
    HeaderLinkComponent,
  ],
  exports: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderNavComponent,
    HeaderNavItemComponent,
    HeaderLinkComponent,
  ],
})
export class HeaderModule {}
