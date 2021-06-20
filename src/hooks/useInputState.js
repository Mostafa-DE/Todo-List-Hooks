import {useState} from 'react'

// eslint-disable-next-line
export default initialState => {
    const [value, setValue] = useState(initialState);
    const handleChange = (evnt) => {
        setValue(evnt.target.value);
    }
    const reset = () => {
        setValue("");
    }
    return [value, handleChange, reset];
}
