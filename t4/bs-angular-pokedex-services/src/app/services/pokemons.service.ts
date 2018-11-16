import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  public pokemons = [
    {
      id: 1,
      name: "Ivysaur",
      description: "Este Pokémon lleva un bulbo en el lomo y, para poder con su peso, tiene unas patas y un tronco gruesos y fuertes. Si empieza a pasar más tiempo al sol, será porque el bulbo está a punto de hacerse una flor grande.",
      image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
      height: "1,0m",
      category: "Semilla",
      hability: "Espesura",

    },
    {
      id: 1,
      name: "Charmander",
      description: "La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado",
      image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      height: "0,6m",
      category: "Lagartija",
      hability: "Mar llamas",
    },
    {
      id: 3,
      name: "Squirtle",
      description: "El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad.",
      image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      height: "0,5m",
      category: "Tortuguita",
      hability: "Torrente",
    },
    {
      id: 4,
      name: "Metapod",
      description: "La capa que recubre el cuerpo de este Pokémon es tan dura como una plancha de hierro. Metapod apenas se mueve. Permanece inmóvil para que las vísceras evolucionen dentro de la coraza que le rodea.",
      image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
      height: "0,7m",
      category: "Capullo",
      hability: "Mudar",
    },
    {
      id: 5,
      name: "Kakuna",
      description: "Kakuna permanece prácticamente inmóvil al encaramarse a los árboles, aunque la actividad interna de su organismo tiene un ritmo frenético, pues se prepara para su evolución. Prueba de esto es la alta temperatura de su caparazón.",
      image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
      height: "0,6m",
      category: "Capullo",
      hability: "Mudar",
    },
    {
      id: 6,
      name: "Pidgey",
      description: "Pidgey tiene un sentido de la orientación muy desarrollado. Es capaz de regresar a su nido, por lejos que se encuentre de las zonas que le resultan familiares.",
      image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
      height: "0,3m",
      category: "Pajarito",
      hability: "Tumbos",
    },
    {
      id: 7,
      name: "Tangela",
      description: "A Tangela se le desprenden los tentáculos con facilidad en cuanto se los agarras. Y no solo no le duele, sino que le resulta muy útil para escapar rápido. Además, al día siguiente le crecen otros.",
      image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png",
      height: "1,0m",
      category: "Enredadera",
      hability: "Clorofila",
    },
    {
      id: 8,
      name: "Mewtwo",
      description: "Mewtwo fue creado por manipulación genética. Pero, a pesar de que el hombre creó su cuerpo, dotar a Mewtwo de un corazón compasivo quedó en el olvido.",
      image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
      height: "2,0m",
      category: "Genético",
      hability: "Presión",
    },
  ]
  constructor() { }

  getPokemons(){
    return this.pokemons[0];
  }

  getPokemon(_index){
    return this.pokemons[_index];
  }
}
