import { Component, Input } from '@angular/core';

@Component({
  selector: 'realster-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent {
  @Input('src')
  public src;
}
