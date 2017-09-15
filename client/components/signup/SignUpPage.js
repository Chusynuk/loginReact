import React from 'react';
import SignUpForm from './SignUpForm';

class SignUp extends React.Component {
  render() {
    return (

   <div className = "jumbotron" >
   <div className="col-md-4 col-md-offset-4">
     <SignUpForm></SignUpForm>
   </div>
 </div>
  );
  }
}

export default SignUp;
