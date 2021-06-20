import { useState, useEffect } from "react";

function UseLocalStorageState(key, defaultValue) {
    // make piece of state, based off of value in localStorage or (default)
    const [state, setState] = useState(() => {
        let value;
        try{
            value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
        } catch(error) {
            value = defaultValue;
        }
        return value;
    });

    // use useEffect to update LocalStorage when state changes 
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
}

export default UseLocalStorageState;
