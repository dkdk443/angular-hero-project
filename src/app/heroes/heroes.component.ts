import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Yamada'
  }

  selectedHero: Hero;

  heroes = HEROES;
  onSelect(hero: Hero):void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
