import { Component } from '@angular/core';

@Component({
  selector: 'b-header-nav',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class HeaderNavComponent {}
