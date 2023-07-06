import { validateArrayAndNotEmpty } from "../utils/validateArrayAndNotEmpty"

export const caloriesCounter = (data) =>{
    let values = []
    let aux = 0

    validateArrayAndNotEmpty(data)

    data[0] === " " && data.shift()
    data[data.length - 1] === " " && data.pop()

    const filterData = data.filter(element => element !== '')
    const filterDataWithOnlyNumbersAndSpaces = filterData.filter(element => !isNaN(element) || element === " " )

    filterDataWithOnlyNumbersAndSpaces.map(dat =>{
        if(dat !== " "){
            aux = aux + dat
            filterDataWithOnlyNumbersAndSpaces.indexOf(dat) === filterDataWithOnlyNumbersAndSpaces.length - 1 
            && values.push(aux)
        }else{
            values.push(aux)
            aux = 0
        }
    })

    const finalValue = Math.max(...values)

    return {elf: values.indexOf(finalValue) + 1, calories: finalValue}

}
