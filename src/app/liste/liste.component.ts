import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  personnages: string[] = ["Golum", "Groot", "Dark Vador", "Capitaine Hadock", "Pikachu", "Obelix"]

  constructor() { }

  ngOnInit(): void {
  }

}
