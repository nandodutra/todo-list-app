import React from 'react';
import { bindActionCreators } from 'redux';
import PageHeader from '../template/page-header';
import TodoForm from './todoForm';
import TodoList from './todo-list';
import { connect } from 'react-redux';
import { cleanDescription } from './todoActions';

const Todo = () => {
    return (<div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm/>
        <TodoList/>
    </div>);
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapActionsToProps = dispath => bindActionCreators({ cleanDescription }, dispath)
export default connect(mapStateToProps, mapActionsToProps)(Todo);