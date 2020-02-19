import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/page-header';
import TodoForm from './todoForm';
import TodoList from './todo-list';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            list: []
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPadding = this.handleMarkAsPadding.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.refresh();
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : '';

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => {
                this.setState({
                    ...this.state, list: resp.data, description
                })
            });
    }

    handleAdd() {
        const description = this.state.description;

        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleChange(e) {
        this.setState({
            ...this.state, description: e.target.value
        })
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsPadding(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description));
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleClear() {
        this.refresh();
    }

    render() {
        return (<div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm 
                handleChange={this.handleChange}
                handleAdd={this.handleAdd} 
                handleSearch={this.handleSearch}
                handleClear={this.handleClear}
                description={this.state.description} />
            <TodoList 
                handleRemove={this.handleRemove}
                handleMarkAsDone={this.handleMarkAsDone}
                handleMarkAsPadding={this.handleMarkAsPadding}
                list={this.state.list} />
        </div>);
    }
}