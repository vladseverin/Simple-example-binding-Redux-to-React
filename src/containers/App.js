import App from "../components/App.jsx";
import { increment, decrement } from "../actions/index";
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

const mapStateToProps = state => {
  return {
    value: state.value,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);