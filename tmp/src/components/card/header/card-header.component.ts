import { Component } from '@angular/core';

@Component({
  selector: 'realster-card-header',
  template: `
    <div class="card-header">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card-header{font-weight:bold;font-size:32px}
  `]
})
export class CardHeaderComponent { }
