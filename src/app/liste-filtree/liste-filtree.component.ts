import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-filtree',
  templateUrl: './liste-filtree.component.html',
  styleUrls: ['./liste-filtree.component.scss']
})
export class ListeFiltreeComponent implements OnInit {

  items: string[] = ["Homère Simpson", "Michel Drucker", "Ronflex", "Petit Poucet", "Karadoc", "Père Noël"] 

  constructor() { }

  ngOnInit(): void {
  }

}
