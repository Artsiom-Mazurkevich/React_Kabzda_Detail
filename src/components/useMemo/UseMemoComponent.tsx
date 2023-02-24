import React, {useMemo, useState} from 'react';

export const UseMemoComponent = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1


    useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={ (event) => {setA(+event.currentTarget.value)} } type="text"/>
            <input value={b} onChange={ (event) => {setB(+event.currentTarget.value)} } type="text"/>
            <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
            <div>Test result: {resultA}</div>
        </>
    );
};

