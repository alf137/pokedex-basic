import { State } from "src/state";

export async function commandPokedex(state:State): Promise<void>{
    console.log("Your Pokedex:")
    for (const pokemon of Object.values(state.userPokedex)) {
        console.log(` - ${pokemon.name}`);
    }
    return
}