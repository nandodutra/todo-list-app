import React, { Component } from 'react';
import PageHeader from '../template/page-header';

export default class About extends Component {
    render() {
        return (
            <div>
                <PageHeader name="Sobre" small="nós"/>

                <h2>Nossa história começou assim...</h2>
                <p>Loren lipsum, about that code is very good, and tomorrow we will see what i`ve done.</p>
                <p>This is the mortal kombat tortaiment</p>
            </div>
        );
    }
}