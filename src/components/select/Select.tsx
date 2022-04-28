import React, {useState, KeyboardEvent, useEffect} from "react";
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
    const [hoveredElement, setHovered] = useState(value)


    const selectedItem = items.find(i => i.value === value);
    const hoveredItem = items.find(i => i.value === hoveredElement);


    useEffect(() => {
        setHovered(value)
    }, [value])


    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElement) {
                    const nextElementIndex = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]
                    if (nextElementIndex) {
                        onChange(nextElementIndex.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].value)
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }


    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>{items.map(i => <div
                        onMouseEnter={() => setHovered(i.value)}
                        className={s.item + ' ' + (hoveredItem === i ? s.select : '')}
                        key={i.value}
                        onClick={() => onItemClick(i.value)}
                    >
                        {i.title}</div>)}</div>
                }
            </div>
        </>
    )
}