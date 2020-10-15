import * as Types from './actionTypes';

export const addTodo = title => {
    return {
        type: Types.ADD,
        payload: {
            title
        }
    }
} 

export const removeTodo = id => {
    return {
        type: Types.REMOVE,
        payload: {
            id
        }
    }
}

export const switchStatus = ({id, title, status}) => {
    return {
        type: Types.STATUS,
        payload: {
            todo: {
                id,
                title, 
                status
            }
        }
    }
}