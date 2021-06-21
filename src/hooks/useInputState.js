import {useState} from 'react'


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
