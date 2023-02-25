import React, {useState} from 'react';
import './App.css';
import {UseMemoComponent} from "./components/useMemo/UseMemoComponent";
import {
    UseEffectComponent,
    UseEffectSetIntervalExample,
    UseEffectSetTimeoutExample
} from "./components/useEffect/useEffectComponent";






// function declaration
function App() {

    return (
        <div className={'App'}>
            {/*<UseMemoComponent></UseMemoComponent>*/}
            {/*<UseEffectComponent></UseEffectComponent>*/}
            {/*<UseEffectSetTimeoutExample></UseEffectSetTimeoutExample>*/}
            <UseEffectSetIntervalExample></UseEffectSetIntervalExample>

        </div>
    );
}



export default App;
