import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'realster-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {
  @Input('src')
  public src;

  ngOnInit() {
    console.log(this.src);
  }
}
