import React, { useContext, useState } from 'react'
import { createContext } from 'react'

// 1. createContext로 Context를 만든다
// 2. 이름.Provider로 하위 구조를 감싼다
// 3. 이름.Provider에 value 값을 지정한다
// 4. useContext(이름)으로 불러온다

const Bear = createContext();

const Thedeepsub = () => {
    const { state, setState } = useContext(Bear); // provider 비구조 할당
    return (
        <>
            루피는 {state}
            <button onClick={
                () => setState('비버였다...!')
            }>루피의 정체는?</button>
        </>
    )
}

const Deepsub = () => {
    return (
        <>
            <Thedeepsub />
        </>
    )
}

const Sub = () => {
    return (
        <>
            <Deepsub />
        </>
    )
}

const App = () => {
    const [state, setState] = useState("곰?");
    return (
        <Bear.Provider value={{ state, setState }}>
            <Sub />
        </Bear.Provider>
    )
}

export default App