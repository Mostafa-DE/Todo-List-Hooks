import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ task, completed, removeTodo, id, isCompletedTodo}) {
    return (
        <ListItem>
            <ListItemText style={{textDecoration: completed === true ? "line-through" : "none"}}>
                <Checkbox tabIndex={-1} checked={completed}  onClick={() => isCompletedTodo(id)} color="primary" /> {task} </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit">
                        <EditIcon color="primary" />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon aria-label="Delete" color="secondary" onClick={() => removeTodo(id)} />
                    </IconButton>        
                </ListItemSecondaryAction> 
        </ListItem>
    )
}

export default Todo;
