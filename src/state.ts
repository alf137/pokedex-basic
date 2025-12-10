import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js"
import { PokeAPI } from "./pokeapi.js";
import { Pokemon } from "./pokeapi.js";

export type CLICommand = {
        name: string;
        description: string;
        callback: (state: State, ...args: string[]) => Promise<void>;
        };


export type Commands = {
  [key: string]: CLICommand;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeapi: PokeAPI;
    userPokedex: Record<string, Pokemon>
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
};

export function initState(cacheInterval: number): State {
    
    const readline: Interface = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > '
    });
    const commands: Commands = getCommands()
    const pokeapi: PokeAPI = new PokeAPI(cacheInterval);
    const userPokedex: Record<string, Pokemon> = {}
    const nextLocationsURL = null;
    const prevLocationsURL = null;

    return {readline, commands, nextLocationsURL, prevLocationsURL, pokeapi, userPokedex}

}