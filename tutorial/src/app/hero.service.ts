import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
