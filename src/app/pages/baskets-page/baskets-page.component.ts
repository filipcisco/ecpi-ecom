import { Component } from '@angular/core';
import { BasketComponent } from '../components/basket/basket.component';
import { Basket } from '../../core/models/basket';
import { BasketService } from '../../core/services/basket.service';


@Component({
  selector: 'app-baskets-page',
  standalone: true,
  imports: [BasketComponent],
  templateUrl: './baskets-page.component.html',
  styleUrl: './baskets-page.component.scss'
})
export class BasketsPageComponent {
  baskets: Basket[] = [];

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.getAllBaskets().subscribe({
      next: value => this.baskets = value,
      error: err => alert('une erreur est survenue!')
    })
  }
}
