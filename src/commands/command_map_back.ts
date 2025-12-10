import { ShallowLocations, PokeAPI } from "src/pokeapi"
import { type State } from "src/state.js"

export async function commandMapb(state: State):  Promise<void> {
    let locs: ShallowLocations
    if (!state.prevLocationsURL){
        console.log("you're on the first page")
        return
    } else {
        locs = await state.pokeapi.fetchLocations(state.prevLocationsURL)
        for (let result of locs.results)
            console.log(result.name)
        state.prevLocationsURL = locs.previous
        state.nextLocationsURL = locs.next
    }
    
}
