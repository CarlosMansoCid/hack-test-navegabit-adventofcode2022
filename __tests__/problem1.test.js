import {caloriesCounter} from '../src/problem1/problem1'

describe('problem1', ()=>{

    test('solution must be a function', ()=>{
        expect(caloriesCounter).toBeInstanceOf(Function)
    })
    test('Throw "The param must be a array"', ()=>{
        expect(()=>caloriesCounter('calorias')).toThrow('The param must be a array')
    })
    test('Throw "The param cant be empty"', ()=>{
        expect(()=>caloriesCounter([])).toThrow('The param cant be empty')
    })
    // test('Must return [2000, 400, 500] (delete the first or last element if equal " ")', ()=>{
    //     expect(caloriesCounter([" ", 2000, 400, 500, " "])).toEqual([2000, 400, 500])
    // })
    // test('Must return [2000, 400, 500] (delete all "" elements)', ()=>{
    //     expect(caloriesCounter([" ", 2000,"", 400, 500, " "])).toEqual([2000, 400, 500])
    // })
    // test('Must return [2000, 400, 500] (only return numeric and blank spaces values)', ()=>{
    //     expect(caloriesCounter([2000, 400,'hi', {great: 'hi'}, 500])).toEqual([2000, 400, 500])
    // })
    // test('Must return [20000, 4000, 5000] (sum all elements between blank spaces)', ()=>{
    //     expect(caloriesCounter([10000, 10000,' ', 2000, 2000,' ', 5000])).toEqual([20000, 4000, 5000])
    // })
    // test('Must return 20000', ()=>{
    //     expect(caloriesCounter([10000, 10000,' ', 2000, 2000,' ', 5000])).toEqual(20000)
    // })
    test('Must return {elf: 1, calories: 20000} ', ()=>{
        expect(caloriesCounter([10000, 10000,' ', 2000, 2000,' ', 5000])).toEqual({elf: 1, calories: 20000})
    })
    test('Must return  {elf: 4, calories: 24000}, values of the example 😄', ()=>{
        const values = [1000,2000,3000," ",4000," ",5000,6000," ",7000,8000,9000," ",10000]
        expect(caloriesCounter(values)).toEqual({elf: 4, calories: 24000})
    })

})