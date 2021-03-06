import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

// getVisibleTodos
const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

// mapStateToProps
// 页面上的数据通过这个函数获取
const mapStateToProps = state => ({
  // 这是两个 reducers
  // state.todos, state.visibilityFilter
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

// export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
