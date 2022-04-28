import React, {useState} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}


export const Select: React.FC<SelectPropsType> = ({value, onChange, items}) => {
    const [active, setActive] = useState(false)
    const selectedItem = items.find(i => i.value === value);


    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        onChange(value)
        toggleItems()
    }





    return (
        <>
            <div className={s.select}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>{items.map(i => <div
                        key={i.value}
                        onClick={() => onItemClick(i.value)}
                    >
                        {i.title}</div>)}</div>
                }
            </div>
        </>
    )
}