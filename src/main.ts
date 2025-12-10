// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { type State, initState } from "./state.js"
async function main(): Promise<void> {
  const state: State =  initState(1000 * 60 * 5);
  try{
    await startREPL(state);
  } catch(err) {
    console.log("error with network")
  }
}

main();