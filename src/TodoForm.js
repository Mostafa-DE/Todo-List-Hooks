import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem 1rem 1rem"}}>
            
         <form onSubmit={ (evnt) => {
             evnt.preventDefault();
             addTodo(value);
             reset();
             
         }}>
            
            <TextField 
                value={value} 
                onChange={handleChange} 
                margin="normal" 
                label="Add New To-do"
                fullWidth 
            />
            <Button 
                type="submit" 
                variant="outlined" 
                color="primary" 
                style={{marginTop: "0.5rem"}} 
            >
                Add
            </Button>
            
         </form>
            
        </Paper>
    )
}

export default TodoForm;
