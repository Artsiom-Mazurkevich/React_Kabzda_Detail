import React, {useState} from "react";

export default {
    title: 'ReactMemo'
}



const Counter = (props: {count: number}) => {
    console.log('COUNTER')
    return <div>{props.count}</div>
}

const Users = React.memo((props: {users: Array<string> }) => {
    console.log('USERS')
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
})


export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<Array<string>>(['Yuri', 'Valera', 'Artem', 'Dima'])
    return <>
        <button onClick={ () => {setUsers(['someUser', ...users] )} } >addUser</button>
        <button onClick={ () => {setCounter(counter + 1)} }>+</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}