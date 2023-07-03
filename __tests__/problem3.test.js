import {rucksackLoader} from '../src/problem3/problem3'

describe('Problem 3 test suite', ()=>{

    test('solution must be a function', ()=>{
        expect(rucksackLoader).toBeInstanceOf(Function)
    })
    test('Throw "The param must be a array"', ()=>{
        expect(()=> rucksackLoader('runsack')).toThrow('The param must be a array')
    })
    test('Throw "The param cant be empty"', ()=>{
        expect(()=> rucksackLoader([])).toThrow('The param cant be empty')
    })
    // test('The output must be a lower alphabet', ()=>{
    //     expect(rucksackLoader()).toEqual([
    //                                         'a', 'b', 'c', 'd', 'e', 'f',
    //                                         'g', 'h', 'i', 'j', 'k', 'l',
    //                                         'm', 'n', 'o', 'p', 'q', 'r',
    //                                         's', 't', 'u', 'v', 'w', 'x',
    //                                         'y', 'z'
    //                                     ])
    // })
    // test('The output must be a Capital alphabet', ()=>{
    //     expect(rucksackLoader()).toEqual(    [
                                                // 'A', 'B', 'C', 'D', 'E', 'F',
                                                // 'G', 'H', 'I', 'J', 'K', 'L',
                                                // 'M', 'N', 'O', 'P', 'Q', 'R',
                                                // 'S', 'T', 'U', 'V', 'W', 'X',
                                                // 'Y', 'Z'
                                                // ]
    // })
    // test('The param can only contein strings', ()=>{
    //     expect(rucksackLoader(['Hi', 3, {great: 'hi'}])).toEqual(['Hi'])
    // })
    // test('The param can only contein strings with letters', ()=>{
    //     expect(rucksackLoader(['Hi', 'AjndaAKSJnasdw', ".erwe)"])).toEqual(['Hi', 'AjndaAKSJnasdw'])
    // })
    // test('Every value in the param must have a pair lenght', ()=>{
    //     expect(rucksackLoader(['Hi', 'AjndaAKSJnasd', ".erwe)"])).toEqual(['Hi'])
    //})
    // test('mus return every value split in half', ()=>{
    //     expect(rucksackLoader(['Hi', 'AjndaAKSJnasdw', ".erwe)"])).toEqual(['H', 'i', 'AjndaAK', 'SJnasdw'])
    // })
    // test('mus return every char in every string', ()=>{
    //     expect(rucksackLoader(['HiHo', 'Ajndax'])).toEqual(['H', 'i', 'H', 'o', 'A', 'j', 'n', 'd', 'a', 'x'])
    // })
    // test('mus return every char in the first part of every rucksack', ()=>{
    //     expect(rucksackLoader(['HiHo', 'Ajndax'])).toEqual(['H', 'i', 'A', 'j', 'n'])
    // })
    // test('mus return the value repeated in both backpacks', ()=>{
    //     expect(rucksackLoader(['HiHo', 'AjLPafKSJnOsdA', ".erwe)"])).toEqual(['H', 'A'])
    // })
    // test('mus return the value and the numeric values', ()=>{
    //     expect(rucksackLoader(['HiHo', 'AjLPafKSJnOsdA', ".erwe)"])).toEqual(['34 (H)', '27 (A)'])
    // })
    test('mus return the value and the numeric values and the total', ()=>{
        expect(rucksackLoader(['HiHo', 'AjLPafKSJnOsdA', "erwe"])).toEqual(
                                                                                {
                                                                                    itemsInBothCompartments: ['34 (H)', '27 (A)', '5 (e)'],
                                                                                    totalOfPriority: 66
                                                                                }
                                                                            )
    })
    test('mus return the value and the numeric values and the total, , values of the example 😄', ()=>{
        const initialValues = [
                                'vJrwpWtwJgWrhcsFMMfFFhFp',
                                'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
                                'PmmdzqPrVvPwwTWBwg',
                                'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
                                'ttgJtRGJQctTZtZT',
                                'CrZsJsPPZsGzwwsLwLmpwMDw'
                             ]
        const result = {
                            itemsInBothCompartments: [
                                                        '16 (p)',
                                                        '38 (L)',
                                                        '42 (P)',
                                                        '22 (v)',
                                                        '20 (t)',
                                                        '19 (s)'
                                                     ],
                            totalOfPriority: 157

                       }
        expect(rucksackLoader(initialValues)).toEqual(result)
    })


})