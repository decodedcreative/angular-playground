import { Component } from '@angular/core';

@Component({
  selector: 'b-header-nav-item',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class HeaderNavItemComponent {}
