import { ShallowLocations, PokeAPI } from "src/pokeapi"
import { type State } from "src/state.js"

export async function commandMap(state: State):  Promise<void> {
    let locs: ShallowLocations
    if (!state.nextLocationsURL){
        locs =  await state.pokeapi.fetchLocations()
        for (let result of locs.results)
            console.log(result.name)
    } else {
        locs = await state.pokeapi.fetchLocations(state.nextLocationsURL)
        for (let result of locs.results)
            console.log(result.name)
    }
    state.prevLocationsURL = locs.previous
    state.nextLocationsURL = locs.next
}
