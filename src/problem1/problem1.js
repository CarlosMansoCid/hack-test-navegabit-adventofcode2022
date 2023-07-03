export const caloriesCounter = (data) =>{
    let values = []
    let aux = 0

    if(!Array.isArray(data)){ throw new Error('The param must be a array') }

    if(data.length === 0 ){ throw new Error('The param cant be empty')}
    
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

`This list represents the Calories of the food carried by five Elves:

The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
The second Elf is carrying one food item with 4000 Calories.
The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
The fifth Elf is carrying one food item with 10000 Calories.

In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).

Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?`