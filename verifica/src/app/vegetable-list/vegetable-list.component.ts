import { Component, Input } from '@angular/core';
import { Vegetables } from '../models/vegetables.models';

@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
 @Input() verdure!: Vegetables


 salva(nVerdure: HTMLInputElement){
  
 }
}
