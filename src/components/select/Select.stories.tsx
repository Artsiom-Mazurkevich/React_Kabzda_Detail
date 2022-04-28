import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState(2)
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: 1, title: 'Minsk'},
                {value: 2, title: 'Moscow'},
                {value: 3, title: 'Mozyr'},
                {value: 4, title: 'Wroclaw'},
            ]}
        />
    </>
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: 1, title: 'Minsk'},
                {value: 2, title: 'Moscow'},
                {value: 3, title: 'Mozyr'},
                {value: 4, title: 'Wroclaw'},
            ]}
        />
    </>
}