import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-page',
  standalone: true,
  imports: [],
  templateUrl: './price-page.component.html',
})

export class PricePageComponent {

  @Input() user!: string;
}
