import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vegetables } from './models/vegetables.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VegetableListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'verifica';
  vettInfo: Vegetables[] = []

  loading!: boolean
  o!: Observable<Vegetables[]>
  http!: HttpClient

  constructor(http: HttpClient) {this.http = http}

  makeGet()
  {
    this.loading = true
    this.o = this.http.get<Vegetables[]>("https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure")
    this.o.subscribe(this.getData)
  }
  getData = (dati: Vegetables[]) =>
  {
    this.vettInfo = dati
    this.loading = false
    console.log(this.vettInfo)
  }
  
  ngOnInit(): void {
    this.makeGet()
  }
}
