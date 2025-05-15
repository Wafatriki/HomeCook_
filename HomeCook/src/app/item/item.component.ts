import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true
})
export class ItemComponent {
  @Input() recipe: any;

  constructor(private router: Router) {}

  onclick() {
    this.router.navigate(['/recipe', this.recipe.id]);
  }
}
