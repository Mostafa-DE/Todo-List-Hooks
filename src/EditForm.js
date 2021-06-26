import React, { useContext } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/EditFormstyle';
import { TodosContext } from './contexts/TodosContext';

function EditForm({id, task,toggleEditForm, classes}){
    const [value, handleChange, reset] = useInputState(task);
    const { editTodo } = useContext(TodosContext);
    return (
        <div>
            <ValidatorForm onSubmit={ (evnt) => {
                evnt.preventDefault();
                editTodo(id,value);
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
