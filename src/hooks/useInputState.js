import {useState} from 'react'

function useInputState(initialState) {
    const [value, setValue] = useState(initialState);

    const handleChange = (evnt) => {
        setValue(evnt.target.value);
    }
    const reset = () => {
        setValue("");
    }
    return [value, handleChange, reset];
}

export default useInputState;