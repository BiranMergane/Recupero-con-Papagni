import { Component, Input } from '@angular/core';
import { Vegetables } from '../models/vegetables.models';
import { CartProduct } from '../models/cartproduct.model';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
 @Input() verdure!: Vegetables
 verdureData = {
  nome: "",
  nVerdure: ""
 }

 vettVerdure: CartProduct[] = []
 
 salva(nVerdure: HTMLInputElement){
  this.verdureData.nome = this.verdure.nome
  this.verdureData.nVerdure = nVerdure.value 

  this.vettVerdure.push(new CartProduct(this.verdureData.nome, this.verdureData.nVerdure)) /*punto 7*/
  console.log(this.vettVerdure)/*punto 7*/
 }
}
