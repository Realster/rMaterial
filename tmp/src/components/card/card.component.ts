import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'realster-card',
  template: `
    <md-card>
      <md-card-header>
        <md-card-title>
          <ng-content select="realster-card-header"></ng-content>
        </md-card-title>
      </md-card-header>
      <div class="image">
        <ng-content select="realster-card-image">
        </ng-content>
      </div>
      <div class="content">
        <ng-content select="realster-card-content">
        </ng-content>
      </div>
      <div class="actions">
        <ng-content select="realster-card-actions">
        </ng-content>
      </div>
    </md-card>
  `,
  styles: [`
    .image{padding:15px;background-color:#3F5894;text-align:center}.content{padding-top:15px;padding-bottom:15px}
  `]
})
export class CardComponent {

}
