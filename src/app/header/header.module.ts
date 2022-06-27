import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderNavItemComponent } from './header-nav-item/header-nav-item.component';
import { HeaderLinkComponent } from './header-link/header-link.component';
import { HeaderSubNavComponent } from './header-subnav/header.subnav.component';
import { HeaderSubNavItemComponent } from './header-sub-nav-item/header-subnav-item.component';

@NgModule({
  imports: [],
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderNavComponent,
    HeaderNavItemComponent,
    HeaderSubNavComponent,
    HeaderSubNavItemComponent,
    HeaderLinkComponent,
  ],
  exports: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderNavComponent,
    HeaderNavItemComponent,
    HeaderSubNavComponent,
    HeaderSubNavItemComponent,
    HeaderLinkComponent,
  ],
})
export class HeaderModule {}
