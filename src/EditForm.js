import React, { useContext } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/EditFormstyle';
import { DispatchContext } from './contexts/TodosContext';

function EditForm({id, task,toggleEditForm, classes}){
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(task);
    
    return (
        <div>
            <ValidatorForm onSubmit={ (evnt) => {
                evnt.preventDefault();
                dispatch({ type: "editTodo", id: id, newTask: value});
                reset();
                toggleEditForm();

            }}>
            <TextValidator
                value={value}
                onChange={handleChange}
                label="update To-do"
                fullWidth
                className={classes.inputText}
                validators={['required']}
                errorMessages={['Please Enter A To-Do']}
            />
            <button
                type="submit"
                className={classes.updateBtn}
            >
                Update
            </button>
            </ValidatorForm>
        </div>
    )
}

export default withStyles(styles) (EditForm);
