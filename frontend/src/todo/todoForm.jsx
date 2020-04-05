import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add, changeDescription, search, cleanDescription } from './todoActions';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleKey = this.handleKey.bind(this);
    }

    handleKey(e) {
        const { add, cleanDescription, search, description } = this.props;
        
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            cleanDescription();
        }
    }
    
    componentWillMount() {
        this.props.search();
    }
    
    render() {
        const { add, search, description } = this.props;
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input type="text" 
                        id="description" 
                        className="form-control" 
                        placeholder="Adicione uma terefa" 
                        value={description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.handleKey} />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={() => add(description)} />
                    <IconButton style="info" icon="search" onClick={search} />
                    <IconButton style="default" icon="close" onClick={this.props.cleanDescription} />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, cleanDescription }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);