import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

// AddTodo
const AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <h3>基于 Redux 实现任务管理器</h3>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value));
        input.value = ''
      }}>
        <input ref={node => input = node} />
        {' '}
        <button type="submit">
          新增任务项
        </button>
      </form>
    </div>
  );
}

// export
export default connect()(AddTodo);
