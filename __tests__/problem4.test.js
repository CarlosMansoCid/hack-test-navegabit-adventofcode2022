import {duplicatedFieldsInspector} from '../src/problem4/problem4'
describe('Problem 4, duplicatedFieldsInspector', ()=>{
    test('Solution should be a function', ()=>{
        expect(duplicatedFieldsInspector).toBeInstanceOf(Function)
    })
    test('Argument is required, trow if no pass any argument', ()=>{
        expect(()=>duplicatedFieldsInspector()).toThrow('fieldsList is required')
    })
    test('Argument must be a array, trow if not', ()=>{
        expect(()=>duplicatedFieldsInspector('fields')).toThrow('The param must be a array')
        expect(()=>duplicatedFieldsInspector([])).not.toThrow('The param must be a array')
    })
    test('Argument cant be empty, trow if empty', ()=>{
        expect(()=>duplicatedFieldsInspector([])).toThrow('The param cant be empty')
    })
    // test('Argument must be a array of strings', ()=>{
    //     expect(duplicatedFieldsInspector(['first', 'second', 34, {great: 'hi'} ])).toEqual(['first', 'second'])
    // })
    // test('Every data in the argument should be separated by overscore', ()=>{
    //     expect(duplicatedFieldsInspector(['fir-st', 'sec-ond', 34, {great: 'hi'} ])).toEqual(['fir-st', 'sec-ond'])
    // })
    // test('Every data in the argument should be separated by overscore and have a odd lenght', ()=>{
    //     expect(duplicatedFieldsInspector(['fir-st', 'sec-ond', 34, {great: 'hi'} ])).toEqual(['sec-ond'])
    // })
    test('Length of values after filter cant be 0, throw if 0', ()=>{
        expect(()=>duplicatedFieldsInspector(['fir-st', 34, {great: 'hi'} ])).toThrow('Values provided dont are valids')
    })
    // test('Should return every value pairs', ()=>{
    //     expect(duplicatedFieldsInspector(['fir-st', 'sec-ond', 'hello-fight', {great: 'hi'} ])).toEqual(['sec', 'ond', 'hello', 'fight'])
    // })
    // test('Should return every value if is number', ()=>{
    //     expect(duplicatedFieldsInspector(['fir-st', 'sec-ond', 'hello-fight', '302-495' ])).toEqual(['302', '495'])
    // })
    // test('Should return every value if is number', ()=>{
    //     expect(duplicatedFieldsInspector(['fir-st', 'sec-ond','4032-5463', '302-495' ])).toEqual(['4032','5463','302','495'])
    // })
    test('Should throw  if values pairs arent pair ', ()=>{
        expect(() => duplicatedFieldsInspector(['fir-st', 'sec-ond', 'hello-fight', '302-495' ])).toThrow('Values provided dont are valids')
    })
    // test('Should return every value like a number', ()=>{
    //     expect(duplicatedFieldsInspector(['fir-st', 'sec-ond','4032-5463', '302-495' ])).toEqual([4032, 5463, 302, 495])
    // })
    // test('Should return number of contained pairs first included in second', ()=>{
    //     expect(duplicatedFieldsInspector(['1-6', '2-5', '6-7', '5-7' ])).toBe(1)
    // })
    // test('Should return number of contained pairs and the pair first included in second', ()=>{
    //     expect(duplicatedFieldsInspector(['1-6', '2-5', '6-7', '5-7' ])).toEqual([1, [ '6-7 y 5-7' ]])
    // })
    // test('Should return number of contained pairs and the pair second included in first', ()=>{
    //     expect(duplicatedFieldsInspector(['1-6', '2-5', '6-7', '5-7' ])).toEqual([1, [ '1-6 y 2-5' ]])
    // })
    // test('Should return number of contained pairs and the pair', ()=>{
    //     expect(duplicatedFieldsInspector(['1-6', '2-5', '6-7', '5-7' ])).toEqual([2, [ '1-6 y 2-5','6-7 y 5-7' ]])
    // })
    test('Should return number of contained pairs and the pair', ()=>{
        expect(duplicatedFieldsInspector(['1-6', '2-5', '6-7', '5-7' ])).toEqual({
                                                                                   numbersOfIncludedFields: 2,
                                                                                   includedFields: ['1-6 y 2-5','6-7 y 5-7']
                                                                                })
    })
    test('Should return number of contained pairs and the pair, values of the example 😄', ()=>{
        const exampleInput = [
                                '2-4','6-8',
                                '2-3','4-5',
                                '5-7','7-9',
                                '2-8','3-7',
                                '6-6','4-6',
                                '2-6','4-8'
                            ]
        expect(duplicatedFieldsInspector(exampleInput)).toEqual({
                                                                    numbersOfIncludedFields: 2,
                                                                    includedFields: ['2-8 y 3-7','6-6 y 4-6']
                                                                })
    })
})