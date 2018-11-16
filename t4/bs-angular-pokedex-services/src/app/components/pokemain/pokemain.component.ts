import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { PokemonsService} from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemain',
  templateUrl: './pokemain.component.html',
  styleUrls: ['./pokemain.component.scss'],
  providers: [ PokemonsService]
})
export class PokemainComponent implements OnInit {

  public parametroUrl: number;
  public pokemon: any;
  constructor(
    private _pokemonsSerive: PokemonsService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.forEach((params:Params)=>{
      this.parametroUrl = params['ident'];
    });
    this.pokemon = this._pokemonsSerive.getPokemon(this.parametroUrl-1);
  }


  volverAtras(){
    this._router.navigate(['/']);
  }


}
