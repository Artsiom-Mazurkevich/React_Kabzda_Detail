import React, {useReducer, useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    //  collapsed: boolean
}


type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === 'TOGGLE-COLLAPSED'){
        return !state
    }


    return state
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    /*let [collapsed, setCollapsed] = useState(true);*/
    let [collapsed, dispatch] = useReducer(reducer, false);

    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => {
            setCollapsed(!collapsed)
        }}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => {
            console.log('the dispatch')
            dispatch({type:'TOGGLE-COLLAPSED'})
        }}/>
        {/*<button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>*/}
       {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>-- {props.title} --</h3>
    )
}


/*    return <div onClick={()=> {setCollapsed(!collapsed)} }><h3>-- {props.title} --</h3> {!collapsed && <AccordionBody/>}</div>
}*/

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}