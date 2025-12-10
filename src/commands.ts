import { commandExit } from "./commands/command_exit.js"
import { commandHelp } from "./commands/command_help.js"
import { commandMap } from "./commands/command_map.js"
import { commandMapb } from "./commands/command_map_back.js"
import { commandExplore } from "./commands/command_explore.js"
import { commandCatch } from "./commands/command_catch.js" 
import { commandInspect } from "./commands/command_inspect.js"
import { commandPokedex } from "./commands/command_pokedex.js"
import { type CLICommand } from "./state.js"

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
            },
        help: {
            name: "help",
            description: "Opens help menu",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: " Gives information about locations",
            callback: commandMap 
        },
        mapb: {
            name: "map",
            description: " Gives information about locations",
            callback: commandMapb 
        },
        explore: {
            name: "explore",
            description: "shows the appearing pokemon in a certain area",
            callback: commandExplore
        },
        catch: {
            name: "catch",
            description: "tries to catch a Pokemon, if caught it adds the pokemon to the users Pokedex",
            callback: commandCatch
        },
        inspect: {
            name: "inspect",
            description: "inspect a caught pokemon",
            callback: commandInspect
        },
        pokedex: {
            name: "pokedex",
            description: "lists all caught pokemon",
            callback: commandPokedex
        }
    }
}