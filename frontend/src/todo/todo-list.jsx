import React from 'react';
import IconButton from '../template/iconButton';

export default props => {
    const renderRows = () => {
        const list = props.list || [];

        return list.map((todo, key) => (
            <tr key={key}> 
                <td className={ todo.done ? 'markedAsDone' : '' }>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done} onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButton style="warning" icon="undo" hide={!todo.done} onClick={() => props.handleMarkAsPadding(todo)} />
                    <IconButton style="danger" icon="trash-o" hide={!todo.done} onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ));
    }

    return (
        <table className="table table-bordered table-condensed">
            <thead>
                <tr>
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