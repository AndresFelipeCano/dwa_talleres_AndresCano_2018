import { Component, OnInit } from '@angular/core';
import { PokemonsService} from '../../services/pokemons.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { PokemonElement } from '../../models/pokemon.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [ PokemonsService]
})
export class LayoutComponent implements OnInit {

  public pokemons = [];
  constructor(
    private _pokemonsService: PokemonsService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    for(var i = 0; i < 8; i++){
      var pokemon = this._pokemonsService.getPokemon(i);
      this.pokemons.push(pokemon);
    }
   }

  ngOnInit() {
    console.log(this.pokemons);
  }

  verPokemon(_index) {
    this._router.navigate(['/pokemon/'+(_index+1)]);
  }
  

}
