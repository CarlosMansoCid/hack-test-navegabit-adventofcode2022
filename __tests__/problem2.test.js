import {scoreCounter} from '../src/problem2/problem2'

describe('problem 2', ()=>{

    test('solution must be a function', ()=>{
        expect(scoreCounter).toBeInstanceOf(Function)
    })
    test('Throw "The param must be a array"', ()=>{
        expect(()=>scoreCounter('score')).toThrow('The param must be a array')
    })
    test('Throw "The param cant be empty"', ()=>{
        expect(()=>scoreCounter([])).toThrow('The param cant be empty')
    })
    // test('The param only can contain strings', ()=>{
    //     expect(scoreCounter(['As', "B"])).toBe(true)
    //     expect(scoreCounter(['As', "B", 12])).toBe(false)
    // })
    // test('Must return ["B"], The param only can contain strings with lenght === 1', ()=>{
    //     expect(scoreCounter(['As', "B"])).toEqual(["B"])
    // })
    // test('The param cant contain odd values ', ()=>{
    //     expect(scoreCounter(['A', "B", "C"])).toEqual(false)
    //     expect(scoreCounter(['A', "B"])).toBe(true)
    // })
    // test('The param can only contain "A", "B", "C" or "X", "Y", "Z"', ()=>{
    //     expect(scoreCounter(['A', "B", "C", "F", "G", "Z"])).toEqual(['A', "B", "C", "Z"])
    // })
    // test('The param can only contain upper letters', ()=>{
    //     expect(scoreCounter(['A', "b", "c", "F", "G", "Z"])).toEqual(['A', "B", "C", "Z"])
    // })
    // test('Must return my plays, ["X", "Y", "Z"]', ()=>{
    //     expect(scoreCounter(['A', "X", "B", "Y", "C", "Z"])).toEqual(["X", "Y", "Z"])
    // })
    test('Must return 11', ()=>{
        expect(scoreCounter(['B', "Z", "C", "Y"])).toBe(11)
    })
    test('Must return 15, values of the example 😄 ', ()=>{
        expect(scoreCounter(['A', "Y", "B", "X", "C", "Z"])).toBe(15)
    })

    
})