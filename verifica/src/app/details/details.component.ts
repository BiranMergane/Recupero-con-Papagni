import { Component, Input } from '@angular/core';
import { Vegetables } from '../models/vegetables.models';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() dettagli!: Vegetables
}
