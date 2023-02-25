import React, {useEffect, useState} from 'react';

export const UseEffectComponent = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log('UseEffect')
    })


    return (
        <div>
            <p>Hello World</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment_Count</button>
            <br/>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};


export const UseEffectSetTimeoutExample = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {
        setTimeout(() => {
            document.title = count.toString();
            console.log('setTimeout call')
        }, 1000)
    }, [count])


    // Bad! ⛔⛔⛔⛔❌❌❌
    // setTimeout(() => {
    //     document.title = 'test';
    //     console.log('setTimeout call')
    // }, 1000)


    return (
        <div>
            <p>Hello World</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment_Count</button>
            <br/>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};




export const UseEffectSetIntervalExample = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {

        setInterval(() => {setCount((prevState) => prevState + 1)}, 1000)

    }, [])



    return (
        <div>
            <p>Hello World</p>
            <p>Count: {count}</p>
        </div>
    );
};

