import { CLICommand, type State } from "./state.js"

export async function startREPL(state: State): Promise<void> {

    state.readline.prompt();
    state.readline.on("line", async (line) => { 
        const cleanedInput = cleanInput(line)

        if (cleanedInput.length === 0){
            state.readline.prompt() ;
            return;
        }

        const commandName: string = cleanedInput[0];
        const cmd: CLICommand= state.commands[commandName];

        if (!cmd){
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`)
            state.readline.prompt()
            return
            }

        await cmd.callback(state, cleanedInput[1]) 
        state.readline.prompt() 
        })
        
    return
}


export function cleanInput(input: string): string[]{
    const inputSplit: string[] = input.trim().toLowerCase().split(" ")
    return inputSplit
}


