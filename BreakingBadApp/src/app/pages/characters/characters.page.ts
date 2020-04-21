import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.characters = this.api.getCharacters();
  }

  openDetails(character){
    let characterId = character.char_id;
    this.router.navigateByUrl(`/tabs/characters/${characterId}`);
  }

}
