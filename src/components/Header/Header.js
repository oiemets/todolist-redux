import React from 'react';
import classes from './Header.module.css';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actionCreator';

const Header = props => {
        return (
            <>
                <h1>a list of things to do</h1>
                <input
                    type="text"
                    name="input"
                    className={classes.input}
                    onKeyUp={e => {
                        e.preventDefault();
                        if(e.keyCode === 13) {
                            props.addTodo(e.target.value);
                            e.target.value = '';}
                        }}
                />
            </>
        );
    }

// const mapStateToProps = (state) => {
//     return {
//         tds: state.todos
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: title => dispatch(addTodo(title))
        }
    }


export default connect(null, mapDispatchToProps)(Header);