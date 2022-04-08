import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    setAccordionCollapsed: () => void
    /**
     *Elements that are showed when accordion is opened. Each item should be [[`ItemType`]]
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * optional color of header text
     */
    color: string
}

/*function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }
}*/

/*function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue}/>
        {props.collapsed === false && <AccordionBody/>}
    </div>
}*/

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <div>
        <AccordionTitle title={props.titleValue}
                        color={props.color}
                        accordionCollapsed={props.accordionCollapsed}
                        setAccordionCollapsed={props.setAccordionCollapsed}/>
        {!props.accordionCollapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    accordionCollapsed: boolean
    setAccordionCollapsed: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3
        style={{color: props.color ? props.color : 'black'}}
        onClick={(e) => props.setAccordionCollapsed()}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map((i, index) => <li onClick={() => {
            props.onClick(i.value)
        }} key={index}>{i.title}</li>)}
    </ul>
}