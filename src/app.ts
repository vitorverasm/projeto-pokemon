// string
const person = "Vitor"
const person2: string = "Vitor"
// number
const age = 30
const amount: number = 100.50
// boolean
const hasPET: boolean = true
// array
const numbers = [1, 2, 3, 4]
const letras = ['A', 'B', 'C', 'D']

// cammel case
const nomeDaPessoa = ""

// custom type
type Pokemon = {
    name: string;
    type: "eletric" | "fire" | "water" | "fighter";
    gender?: "male" | "female";
    level?: number
}

// Object
const zapdos: Pokemon = {
    name: 'zapdos',
    type: 'eletric'
}

const zamazenta: Pokemon = {
    name: 'zamazenta',
    type: "fighter"
}

const pokeList = [zapdos, zamazenta]

// loops/iteração
pokeList.forEach(pokemon => console.log("Nome: ", pokemon.name))


