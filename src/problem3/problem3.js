import { validateArrayAndNotEmpty } from "../utils/validateArrayAndNotEmpty"

export const rucksackLoader = (runsacks) =>{
    
    validateArrayAndNotEmpty(runsacks)

    let halfStrings = []
    let chars = []
    let total = 0
    let alphabet = []
    let capitalAlphabet = []

    for (let i = 97; i < 123; i++) {
        let letter = String.fromCharCode(i);
        alphabet.push(letter);
        capitalAlphabet.push(letter.toUpperCase())
        }

    const regex = /^[a-zA-Z]{2,}$/

    const values = runsacks.filter(value => regex.test(value) && value.length % 2 === 0)
    
    if(values.length > 0){
        values.map(value => {
            halfStrings.push(value.substring(0, value.length / 2))
            halfStrings.push(value.substring(value.length / 2))
        })
        halfStrings.map((str)=>{
            if(halfStrings.indexOf(str) % 2 === 0){
                for(let char of str){
                    if(halfStrings[halfStrings.indexOf(str) + 1].indexOf(char) !== -1){
                        let value = str[str.indexOf(char)]
        
                        let priority = value === value.toUpperCase() 
                        ? capitalAlphabet.indexOf(value) + 27 
                        : alphabet.indexOf(value) + 1

                        if(chars.indexOf(`${priority} (${value})`) === -1){
                            chars.push(`${priority} (${value})`)
                            total = total + priority
                        }
                    }
                }
            }
        })
    }

    return {
            itemsInBothCompartments: chars,
            totalOfPriority: total
           }
}