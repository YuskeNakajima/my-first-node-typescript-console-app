import {bang} from './bang'

const hello = (name: string): string => {
  return `Hello, ${name}`
}

console.log(hello('world'))
console.log(bang())
