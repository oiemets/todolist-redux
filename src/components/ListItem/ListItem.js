import React from 'react';
import classes from './ListItem.module.css';
import {connect} from 'react-redux';
import { removeTodo, switchStatus } from '../../store/actionCreator';


const ListItem = props => {
        return(
            <>
                {
                props.todos.map(todo => {
                    return (
                        <div key={todo.id} className={classes.List}>
                            <input 
                                type="checkbox"
                                checked={todo.status === 'done'}
                                onChange={e => {props.switchStatus({
                                    id: todo.id, 
                                    title: todo.title,
                                    status: e.target.checked ? 'done' : 'pending'
                                })}}
                            />
                            <h2
                                style={{textDecoration: todo.status === 'done' 
                                    ? 
                                    'line-through' 
                                    : 
                                    'none'}}
                            >{todo.title}</h2>
                            <button 
                                className={classes.btn}
                                onClick={() => props.removeTodo(todo.id)}>
                                remove
                            </button>
                        </div>
                    );
                })
                }

            </>

        );
    }


const mapStateToProps = state => {
    return {
        todos: state.todoState.todos
    }
}


const mapDispatchToProps = dispatch => {
    return {
        switchStatus: todo => dispatch(switchStatus(todo)),
        removeTodo: id => dispatch(removeTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);