import axios from 'axios';
const URL ='http://localhost:3003/api/todos';

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

export const cleanDescription = () => {
    return [{
        type: 'DESCRIPTION_CLEANED',
        payload: ''
    }, search()]
}

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description;
        const search = description ? `&description__regex=/${description}/` : '';
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }));
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
            .then(resp => dispatch(search()))
            .then(resp => dispatch(cleanDescription()));
    }
}

export const changeState = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: !todo.done })
            .then(resp => dispatch({ type: 'TODO_CHANGE_STATE', payload: resp.data }))
            .then(resp => dispatch(search()));
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch({ type: 'TODO_REMOVE', payload: resp.data }))
            .then(resp => dispatch(search()));
    }
}