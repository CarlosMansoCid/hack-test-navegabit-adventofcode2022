import {validateArrayAndNotEmpty} from '../src/utils/validateArrayAndNotEmpty'

describe('Validate if data is array and is not empty. If not, should throw', ()=>{

    test('Solution should be a function', ()=>{
        expect(validateArrayAndNotEmpty).toBeInstanceOf(Function)
    })  
    test('Throw "The param must be a array"', ()=>{
        expect(()=> validateArrayAndNotEmpty('runsack')).toThrow('The param must be a array')
    })
    test('Throw "The param cant be empty"', ()=>{
        expect(()=> validateArrayAndNotEmpty([])).toThrow('The param cant be empty')
    })
    test('Dont should throw', ()=>{
        expect(()=> validateArrayAndNotEmpty(['data'])).not.toThrow()
    })
    
})