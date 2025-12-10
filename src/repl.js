import readLine from "./input.ts"
import cleanInput from "./repl.ts"

export function startREPL() {
    while(true){
        readLine.prompt();
        let inputStream = readLine.on("line", "callback")
        let cleanedInput = cleanInput(inputStream)
        if (cleanedInput.length() === 0){
            continue
        } else if(inputStream === "exit") {
            break
        }else {
            console.log(`Your command was: ${cleanedInput}`)
        }
    }
    return
}
