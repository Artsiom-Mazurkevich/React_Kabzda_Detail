import React from 'react';

type PropsType = {
    switchOn: boolean
    setSwitchOn: (switchOn: boolean) => void
}

export function OnOff(props: PropsType) {
    console.log('OnOff rendering')

    console.log('on: ' + props.switchOn)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.switchOn ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.switchOn ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.switchOn ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.setSwitchOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.setSwitchOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
};