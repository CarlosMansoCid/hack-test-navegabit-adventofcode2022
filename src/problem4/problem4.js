import {validateArrayAndNotEmpty} from '../utils/validateArrayAndNotEmpty'
export const duplicatedFieldsInspector = (fieldsList) =>{

    
    let separatedFields = []
    let includedFields = []
    let numberOfIncludedFields = 0
    
    if (!fieldsList) throw new Error('fieldsList is required')
    validateArrayAndNotEmpty(fieldsList)

    const regex = /^[0-9]{1,}-[0-9]{1,}$/
    const filterFields = fieldsList.filter(field => regex.test(field) && field.length % 2 !== 0 )

    if (filterFields.length === 0){
        throw new Error('Values provided dont are valids')
    }
    else if(filterFields.length % 2 !== 0){
        throw new Error('Values provided dont are valids')
    }
    else{
        filterFields.forEach(field => field.split('-').forEach(f => separatedFields.push(Number(f))))
    }
    for(let i = 0; i <= separatedFields.length - 3; i += 4){
        let indexToCompareForward = i + 2
        
        if( separatedFields[i] >= separatedFields[indexToCompareForward] 
            && separatedFields[i+1] <= separatedFields[indexToCompareForward + 1]){
                includedFields.push(`${separatedFields[i]}-${separatedFields[i+1]} y ${separatedFields[i+2]}-${separatedFields[i + 3] }`)
                numberOfIncludedFields++
        }else if(separatedFields[i] <= separatedFields[indexToCompareForward] 
            && separatedFields[i+1] >= separatedFields[indexToCompareForward + 1]){
                includedFields.push(`${separatedFields[i]}-${separatedFields[i+1]} y ${separatedFields[i+2]}-${separatedFields[i + 3] }`)
                numberOfIncludedFields++
            }}

    return {
                numbersOfIncludedFields: numberOfIncludedFields,
                includedFields: includedFields
            }
}
