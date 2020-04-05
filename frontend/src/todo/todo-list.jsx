import React from 'react';
import IconButton from '../template/iconButton';
import ReactRedux, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeState, remove } from './todoActions';

const TodoList = (props) => {
    const renderRows = () => {
        const list = props.list || [];

        return list.map((todo, key) => (
            <tr key={key}> 
                <td className="text-center">{key + 1}</td>
                <td className={ todo.done ? 'markedAsDone' : '' }>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done} onClick={() => props.changeState(todo)} />
                    <IconButton style="warning" icon="undo" hide={!todo.done} onClick={() => props.changeState(todo)} />
                    <IconButton style="danger" icon="trash-o" hide={!todo.done} onClick={() => props.remove(todo)} />
                </td>
            </tr>
        ));
    }

    return (
        <table className="table table-bordered table-condensed">
            <thead>
                <tr>
                    <th className="text-center" width="30">#</th>
                    <th>Descrição</th>
                    <th className="tableAction">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispathToProps = dispatch => bindActionCreators({ changeState, remove }, dispatch);
export default connect(mapStateToProps, mapDispathToProps)(TodoList);