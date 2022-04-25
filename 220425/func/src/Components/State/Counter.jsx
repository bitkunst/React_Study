import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ ()=>{ setCount((prev) => prev+1) } }>
                {
                    // setCount('asdf')
                    // count = 'asdf'
                    // count = count + 1
                    // 콜백의 인자값으로 이전값이 ... 25분
                }
                Click me
            </button>
        </div>
    )
}

export default Counter;