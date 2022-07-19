import { useEffect, useState } from "react"
import axios from 'axios'
import AppClass from './AppClass'

export default function App() {

    const [counter, setCounter] = useState(0)
    const [someOtherState, setC] = useState()

    useEffect(async () => {
        {
            console.log('3. Inside useEffect')

            const response  = await axios('/posts/list')

            console.log('response is', response);

            window.addEventListener('resize', () => console.log('window resized'))

            return console.log('COMPONENT REMOVED')
        }
    }, [someOtherState]) 

    /**
     * useEffect syntax:
     * 
     * useEffect(cb , list of variables that depending on their change, useeffect will be executed)
     * 1. no variables -> at ANY changed in the state, useEffect will run
     * 2. empty array [] -> ONLY after the first render
     * 3. [somevariable] on change of the variable
     * */ 


    console.log('1. Before rendering')
    return <div>
        Hello World
        {
            console.log('2. COmponent has rendered')
        }
        <button onClick={() => setCounter(counter + 1)}>Increase</button>

        {/* <AppClass /> */}
    </div>
}