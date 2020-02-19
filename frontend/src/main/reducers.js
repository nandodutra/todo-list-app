import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar a escola do meu filho',
            done: true
        },  {
            _id: 2,
            description: 'Trocar de carro o quanto antes',
            done: false
        }, {
            _id: 3,
            description: 'Ir pra academia depois do carnaval',
            done: false
        }]
    })
});

export default rootReducer;