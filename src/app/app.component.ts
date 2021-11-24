import { Component, VERSION } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newPokemonName = '';
  newPokemonDescription = '';
  newPokemonImage = '';
  newPokemonType = '';

  pokemons: Pokemon[] = [
    {
      name: 'Pikachu',
      description: 'El pokemon más icónico de toda la serie',
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
      type: 'Electricity',
    },
    {
      name: 'Bulbasaur',
      description: 'Un pokemon de los viejitos y chingones',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      type: 'Grass',
    },
    {
      name: 'Charmander',
      description: 'Pokemón mas pinche chidote de la serie',
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      type: 'Fire',
    },
  ];

  addNewPokemon() {
    this.pokemons.push({
      name: this.newPokemonName,
      description: this.newPokemonDescription,
      type: this.newPokemonType,
    });
    this.newPokemonName = '';
    this.newPokemonDescription = '';
    this.newPokemonImage = '';
    this.newPokemonType = '';
  }
  deletePokemon(index: number) {
    this.pokemons.splice(index, 1);
  }
}
