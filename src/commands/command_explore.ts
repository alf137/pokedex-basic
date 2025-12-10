import { State } from "src/state.js"
import { type Location } from "src/pokeapi.js"

export async function commandExplore(state: State, locName: string): Promise<void> {
    console.log(`Exploring ${locName}...`)
    console.log("Found Pokemon: ")
    try{
        const location: Location = await state.pokeapi.fetchLocation(locName)
        for (let encounter of location.pokemon_encounters){
            console.log(`- ${encounter.pokemon.name}`)
        }
    } catch(err){
        console.log("Location not found")
        return
    }
    return 
}