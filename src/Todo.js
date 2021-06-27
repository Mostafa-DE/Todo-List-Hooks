import React, {useContext, memo} from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import UseToggleState from './hooks/UseToggleState';
import EditForm from './EditForm';
import { SortableElement } from 'react-sortable-hoc';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/TodoStyle';
// import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
import { DispatchContext } from './contexts/TodosContext';



const Todo = SortableElement(({ id, task, completed, classes}) => {
    const dispatch = useContext(DispatchContext);
    const [isEditing, toggleIsEditing] = UseToggleState(false);

    return (
        <Paper className={classes.root}>
        <ListItem>
            { isEditing === true ?
            <EditForm
                key={id}
                id={id}
                task={task}
                toggleEditForm={toggleIsEditing}
            />
            :(
            <div>
                
                <ListItemText style={{textDecoration: completed === true ? "line-through" : "none"}}>
                    <Checkbox 
                        className={classes.checkBox}
                        tabIndex={-1}
                        checked={completed}
                        onClick={ () => dispatch({ type: "isCompletedTodo", id: id})}
                        color="primary"
                    /> 
                    {task}
                </ListItemText>

                <ListItemSecondaryAction>
                    <button onClick={toggleIsEditing} className={classes.editBtn}>Edite</button>
                    <button onClick={() => dispatch({ type: "removeTodo", id: id})} className={classes.deleteBtn}>Delete</button>             
                </ListItemSecondaryAction>
                 
            
            </div>
            )}
        </ListItem>
        </Paper>
    )
});

export default withStyles(styles) (memo(Todo));
