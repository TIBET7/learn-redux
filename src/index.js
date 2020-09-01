import { createStore } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

const { inc, dec, rnd } = actions;
const { dispatch } = store;

const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
}

const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch);

document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('dec').addEventListener('click', decDispatch);

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rndDispatch(value);
});

const update = () => {
  document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);
