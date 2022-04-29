import React, { useState, createContext, useContext, useMemo } from 'react'

export const Global = createContext()  // createContext 메소드를 호출하면 Global store가 만들어진다.

const D = () => {

    const { name, setName } = useContext(Global)
    // Global.Provider component에서 value로 전달한 값을 받기 위해서는
    // useContext() 인자값으로 전역 상태를 관리하는 Global store를 넣어준다.

    return (
        <>
            hello component {name}
            <button onClick={()=>{ setName('ingoo22') }}>이름바꾸기</button>
        </>
    )
}

const C = () => {
    return (
        <>
            <D />
        </>
    )
}

const B = () => {
    return (
        <>
            <C />
        </>
    )
}

const A = () => {
    return (
        <>
            <B />        
        </>
    )
}

const Context = () => {
    const [name, setName] = useState('bitkunst')

    // const [info, setInfo] = useState({
    //     user: {
    //         userid: '',
    //         userpw: '',
    //         username: ''
    //     },
    //     notice: [
    //         {idx: 1, subject: 200, content: 'asdf'}
    //     ],
    //     freeboard: [
    //         {idx: 1, subject: 200, content: 'asdf'}
    //     ]
    // })
    // user의 username만 수정하고 싶은데,,, 
    // 이 때 사용하는 게 useReducer
    // 상태를 바꿀 수 있는 패턴들을 한 곳에 모아놓고 그걸 이용해서 상태를 변경한다.

    const obj = useMemo(()=>(
        // 콜백의 return값이 obj에 들어간다.
        {
            name,
            setName
        }
    ), [name])
    // 변수
    // 상태를 바꾸지 않았는데 리랜더링 되는 경우가 있다.
    // 이 때 사용하는 게 useMemo

    return (
        <>
            {/*
                전역 상태를 관리할 Global.Provider component를 최상단에 위치시켜 묶어준다.
                value 안에 관리할 대상을 넣어준다. (반드시 value라는 이름으로 넘겨준다.)
            */}
            <Global.Provider value={obj}>
                <A />
            </Global.Provider>
        </>
    )
}

export default Context;