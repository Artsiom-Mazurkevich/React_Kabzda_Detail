import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";


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

export const ControlledInputValue = () => {
    const [parentValue, setParentValue] = useState('')
  return <input value={parentValue} onChange={(e) => {setParentValue(e.currentTarget.value)} }/>
}

export const ControlledCheckBoxValue = () => {
    const [parentValue, setParentValue] = useState(true)
    return <input type={"checkbox"} checked={parentValue} onChange={(e) => {setParentValue(e.currentTarget.checked)}}/>
}


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>SaintPetersburg</option>
    </select>
}
