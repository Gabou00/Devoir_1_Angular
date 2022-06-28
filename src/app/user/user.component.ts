import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  nom: string = "Hudson"
  prenom: string = "Saul"
  img: string = "https://pbs.twimg.com/profile_images/764107518419361792/BxuxLhJG_400x400.jpg"
  job: string = "Boucher Charcutier"

  constructor() { }

  ngOnInit(): void {
  }

}
