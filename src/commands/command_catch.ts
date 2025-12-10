import { type State } from "src/state";
import { Pokemon } from "src/pokeapi";

export async function commandCatch(state:State, pokemon: string): Promise<void> {
    const baseURL: string = `https://pokeapi.co/api/v2/pokemon/`
    const url: string = `${baseURL}/${pokemon}`
    console.log(url)

    const response = await fetch(url);
    const pokemonStats: Pokemon = await response.json() 

    console.log(`Throwing a Pokeball at ${pokemonStats.name}...`);
    
    const caughtProb: number = Math.random() 
    let caught: Boolean = true
    const difficulty: number = (1/pokemonStats.base_experience)*100
    
    if (caughtProb < difficulty){
        caught = true
        console.log(`${pokemonStats.name} was caught!`)
        state.userPokedex[pokemonStats.name] = pokemonStats
    } else {
        caught = false
        console.log(`${pokemonStats.name} escaped!`)
    }
    return

}