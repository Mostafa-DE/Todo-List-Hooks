import React from 'react'
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/EditFormstyle';


function EditForm({editTodo, id, task,toggleEditForm, classes}) {
    const [value, handleChange, reset] = useInputState(task);

    return (
        <div>
            <form onSubmit={ (evnt) => {
                evnt.preventDefault();
                editTodo(id,value);
                reset();
                toggleEditForm();

            }}>
            <TextField 
                value={value} 
                onChange={handleChange} 
                label="update To-do"
                fullWidth
                className={classes.inputText} 
            />
            <Button 
                type="submit" 
                variant="outlined" 
                color="primary" 
                className={classes.btn} 
            >
                Update
            </Button>
            </form>
        </div>
    )
}

export default withStyles(styles) (EditForm);
