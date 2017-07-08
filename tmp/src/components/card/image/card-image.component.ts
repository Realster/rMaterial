import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'realster-card-image',
  template: `
    <img [src]="src" />
  `,
  styles: [`
    img{width:100px}
  `]
})
export class CardImageComponent implements OnInit {
  @Input('src')
  public src;

  ngOnInit() {
    console.log(this.src);
  }
}
