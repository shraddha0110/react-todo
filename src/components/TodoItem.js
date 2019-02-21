import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor : '#F4F4F4',
            padding: '10px',
            borderBottom: '1px #CCC dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

  render() {
    const { id, title } = this.props.todo;
    
    return (
      <div style={ this.getStyle() } >
        <p> 
            <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } /> {' '}
            { title }
            <button style={ btnStyle } onClick={this.props.deleteTodo.bind(this, id)} > X </button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    todos: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer'
};

export default TodoItem
