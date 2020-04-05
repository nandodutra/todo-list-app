import React from 'react';
import { bindActionCreators } from 'redux';
import PageHeader from '../template/page-header';
import TodoForm from './todoForm';
import TodoList from './todo-list';
import { connect } from 'react-redux';
import { cleanDescription } from './todoActions';

export default props => {
    return (<div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm/>
        <TodoList/>
    </div>);
}