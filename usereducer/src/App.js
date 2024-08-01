import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import './App.css';

const initialState = {
  count: 0,
  color: 'black',
  background: 'white',
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.value };
    case 'decrement':
      return { ...state, count: state.count - action.value };
    case 'reset':
      return { ...state, count: 0 };
    case 'changeColor':
      return { ...state, color: action.color };
    case 'changeBackground':
      return { ...state, background: action.background };
    default:
      return state;
  }
}

export const AppContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <div style={{ color: state.color, backgroundColor: state.background }}>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/counter">Counter</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
