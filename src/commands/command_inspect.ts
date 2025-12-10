import { Pokemon } from "src/pokeapi";
import { State } from "src/state";

export async function commandInspect(state:State, name: string): Promise<void>{
    const pokemon: Pokemon = state.userPokedex[name]
    if (!pokemon){
        console.log(`you have not caught that pokemon`)
    } else{
        console.log(`Name: ${pokemon.name}`)
        console.log(`Height: ${pokemon.height}`)
        console.log(`Weight: ${pokemon.weight}`)
        console.log(`Stats:` )
        for (const stat of pokemon.stats){
            console.log(`   - ${stat.stat.name}: ${stat.base_stat}`)
        }
        console.log("Types:");
        for (const typeInfo of pokemon.types) {
            console.log("  -", typeInfo.type.name);
        }
    }
    return
}