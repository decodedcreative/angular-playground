import { Component } from '@angular/core';

@Component({
  selector: 'b-header-subnav',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class HeaderSubNavComponent {}
