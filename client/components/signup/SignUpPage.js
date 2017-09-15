import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';
import {connect} from 'react-redux';
import {userSignUpRequest} from '../../actions/signupActions';

class SignUpPage extends React.Component {
  render() {
    const {userSignUpRequest} = this.props;
    return (
      <div className="jumbotron">
        <div className="col-md-4 col-md-offset-4">
          <SignUpForm userSignUpRequest={userSignUpRequest}/>
        </div>
      </div>
    );
  }
}
SignUpPage.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
}

export default connect(
  null, { userSignUpRequest })(SignUpPage);
