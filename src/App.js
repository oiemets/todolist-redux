import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import ListItem from './components/ListItem/ListItem';

function App() {
  return (
      <div className={classes.App}>
          <Header/>
          <ListItem/>
      </div>
  );
}

export default App;
