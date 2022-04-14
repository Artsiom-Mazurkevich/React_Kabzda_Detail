import {useRef, useState} from "react";


export default  {
    title: 'input'
}

export const UncontrlInput = () => <input/>;
export const TrackValue = () => {
    const [value, setValue] =  useState('')
    return <><input onChange={(e) => {const actualValue = e.currentTarget.value; setValue(actualValue)}}/> {value}</>
}

export const GetValueFromInputByButtonPress = () => {

    const [values, setValues] =  useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const Save = () => {
        const el = inputRef.current as HTMLInputElement
        setValues(el.value)
    }
    return <><input ref={inputRef}/> <button onClick={Save}>save</button>  - actual value: {values}</>
}


export const FixedInput = () => <input value={'it-incubator'}/>;

