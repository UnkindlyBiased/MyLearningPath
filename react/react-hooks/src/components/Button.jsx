import { useState } from "react" 

function Button() {
    const [count, setCount] = useState(0)

    const changeCount = () => {
        setCount(c => c + 1)
    }
    return(
        <button onClick={changeCount}>Count: {count}</button>
    )
}

export default Button