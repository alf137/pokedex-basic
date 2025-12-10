import { createInterface } from "node:readline"
import process from "node:process"

export const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});


