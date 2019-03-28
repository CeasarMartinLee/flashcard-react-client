import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import FlashCardContainer from './components/FlashCardContainer'



class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={FlashCardContainer} />
      </div>
    );
  }
}

export default App;
