import React, { useState } from 'react'

// App에서 준 state를 Thedeepsub에 바로 가져올 수 없다
const Thedeepsub = ({ state3, setState3 }) => {
    return (
        <>
            {state3} 루피
            <button onClick={
                ()=>setState3('곰')
            }>비버가 아니었다</button>
        </>
    )
}

const Deepsub = ({ state2, setState2 }) => {
    return (
        <>
            <Thedeepsub state3={state2} setState3={setState2} />
        </>
    )
}

const Sub = ({ state, setState }) => {
    return (
        <>
            <Deepsub state2={state} setState2={setState} />
        </>
    )
}

const App = () => {
    const [state, setState] = useState("비버");
    return (
        <>
            <Sub state={state} setState={setState} />
        </>
    )
}

export default App