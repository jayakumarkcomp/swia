// src/App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';

const App = () => {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CharacterList} />
          <Route path="/characters/:id" component={CharacterDetails} />
          
        </Switch>
      </BrowserRouter>
   
  );
};

export default App;