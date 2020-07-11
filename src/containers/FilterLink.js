import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

// mapStateToProps
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

// export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
