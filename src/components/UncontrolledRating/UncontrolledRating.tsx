import React, {useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => {
                setValue(1);
                props.onChange(1)
            }}/>
            {/*<button value={1} onClick={() => setValue(1)}>1</button>*/}
            <Star selected={value > 1} setValue={() => {
                setValue(2);
                props.onChange(2)
            }}/>
            {/*<button value={2} onClick={() => setValue(2)}>2</button>*/}
            <Star selected={value > 2} setValue={() => {
                setValue(3);
                props.onChange(3)
            }}/>
            {/*<button value={3} onClick={() => setValue(3)}>3</button>*/}
            <Star selected={value > 3} setValue={() => {
                setValue(4);
                props.onChange(4)
            }}/>
            {/*<button value={4} onClick={() => setValue(4)}>4</button>*/}
            <Star selected={value > 4} setValue={() => {
                setValue(5);
                props.onChange(5)
            }}/>
            {/*<button value={5} onClick={() => setValue(5)}>5</button>*/}
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: () => void

}

const Star = (props: StarPropsType) => <span onClick={() => props.setValue()}>{props.selected ?
    <b>star </b> : 'star '}</span>
console.log('Star rendering')

/*    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }

    return <span><b>star</b> </span>
} */