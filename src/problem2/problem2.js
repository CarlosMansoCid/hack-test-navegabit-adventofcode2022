export const scoreCounter = (strategy) =>{

    if(!Array.isArray(strategy)){ throw new Error('The param must be a array') }
    if(strategy.length === 0 ){ throw new Error('The param cant be empty')}

    let dataWithRightValues = []
    let score = 0
    const values = ["A", "B", "C", "X", "Y", "Z"]
    const shapes = {
                         A : 1,
                         B : 2,
                         C : 3,
                         X : 1,
                         Y : 2,
                         Z : 3,
                   }


    const filterData = strategy.filter(value => typeof(value) === 'string' && value.length === 1)

    if(filterData.length % 2 === 0 && filterData.length !== 0 ){
        dataWithRightValues = filterData.filter(data => values.includes(data.toUpperCase()) )
    }else{
        throw new Error('The param have invalid values or lenght')
    }

    
    dataWithRightValues.map((dat) => {
        dat.toUpperCase()

        let index = dataWithRightValues.indexOf(dat)
        let adversaryIndex = dataWithRightValues.indexOf(dat) - 1
        
        if(index % 2 !== 0){ 
            if(shapes[dat] > shapes[dataWithRightValues[adversaryIndex]]){
                score = score + shapes[dat] + 6
            }
            else if(shapes[dat] < shapes[dataWithRightValues[adversaryIndex]]){
                score = score + shapes[dat] 
            }
            else{
                score = score + shapes[dat] + 3
            }
            
        }
    })

    
    return score
}