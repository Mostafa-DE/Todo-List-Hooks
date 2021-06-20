import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import UseToggleState from './hooks/UseToggleState';
import EditForm from './EditForm';

function Todo({ task, completed, removeTodo, id, isCompletedTodo, editTodo}) {
    const [isEditing, toggleIsEditing] = UseToggleState(false);
    return (
        <ListItem>
            { isEditing === true ? 
            <EditForm 
                key={id} 
                editTodo={editTodo} 
                id={id} 
                task={task} 
                toggleEditForm={toggleIsEditing} 
            /> 
            :(
            <>
            <ListItemText style={{textDecoration: completed === true ? "line-through" : "none"}}>
                <Checkbox tabIndex={-1} checked={completed}  onClick={() => isCompletedTodo(id)} color="primary" /> {task} </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                        <EditIcon color="primary"  />
                    </IconButton>
                    <IconButton onClick={() => removeTodo(id)}>
                        <DeleteIcon aria-label="Delete" color="secondary"  />
                    </IconButton>        
                </ListItemSecondaryAction>
            </>
            )} 
        </ListItem>
    )
}

export default Todo;
