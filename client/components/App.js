import React from 'react';
import SignUpPage from './SignUp/SignUpPage';

class App extends React.Component {

  render() {
    return (
        <div className="jumbotron">
        <div className="container">
          <SignUpPage/>
        </div>
        </div>

    );
  }

}

export default App;
