import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultValue, reducer) {
    const [state, dispatch] = useReducer(reducer, defaultValue, () => {
        let value;
        try{
            value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
        } catch(error) {
            value = defaultValue;
        }
        return value;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, dispatch];
}

export { useLocalStorageReducer };
