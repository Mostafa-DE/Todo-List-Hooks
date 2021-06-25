import React, {useState} from 'react'
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
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';




const Todo = SortableElement(({ task, completed, removeTodo, id, isCompletedTodo, editTodo, classes}) => {
    const [isEditing, toggleIsEditing] = UseToggleState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const handleCloseSnack = () => {
        setOpenSnack(false);
    }
    const handleOpenSnack = () => {
        setOpenSnack(true);
    }

    const handleisCompletedTodoAndopenSnack = () => {
        isCompletedTodo(id);
        handleOpenSnack();
    }
    const getWord = () => {
        const words = ['Good job 😉', 'Awesome 😍', 'Keep moving 🌹', 'Always be victorious 💯', 'never stop 😊'];
        const rand = Math.floor(Math.random() * words.length );
        return (words[rand]);
    }
    return (
        <Paper className={classes.root}>
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
            <div>
                
                <ListItemText style={{textDecoration: completed === true ? "line-through" : "none"}}>
                    <Checkbox 
                        className={classes.checkBox} 
                        tabIndex={-1} checked={completed}  
                        onClick={handleisCompletedTodoAndopenSnack} 
                        color="primary" 
                    /> 
                    {task} 
                </ListItemText>

                {completed === true ? (
                <Snackbar 
                    className={classes.snackBar} 
                    open={openSnack} 
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
                    autoHideDuration={4000} 
                    onClose={handleCloseSnack} 
                >
                <Alert onClose={handleCloseSnack} severity="success">
                    {getWord()}
                </Alert>
                </Snackbar>
                ) : null}

                <ListItemSecondaryAction>
                    <button onClick={toggleIsEditing} className={classes.editBtn}>Edite</button>
                    <button onClick={() => removeTodo(id)} className={classes.deleteBtn}>Delete</button>

                 {  /*  there is problem here when i try put IconButton it does not working because SortableElement  */    }

                    {/* <IconButton aria-label="Edit" >
                        <EditIcon color="primary" onClick={toggleIsEditing} />
                    </IconButton>
                    <IconButton onClick={() => removeTodo(id)}>
                        <DeleteIcon aria-label="Delete" color="secondary"  />
                    </IconButton> */}
                           
                </ListItemSecondaryAction>
                 
            
            </div>
            )} 
        </ListItem>
        </Paper>
    )
});

export default withStyles(styles) (Todo);
