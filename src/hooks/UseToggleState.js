import { useState } from 'react'

function UseToggleState(initialState = false) {
    // call usestate, "reserve piece of state"
    const [state, setstate] = useState(initialState)
    const toggle = () => {
        setstate(!state);
    }
    // return piece of state And a function to toggle it 
    return [state, toggle];
}

export default UseToggleState;