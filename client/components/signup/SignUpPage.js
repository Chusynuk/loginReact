import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';
import {connect} from 'react-redux';
import {userSignUpRequest} from '../../actions/signupActions';

class SignUpPage extends React.Component {
  render() {
    const {userSignUpRequest} = this.props;
    return (
      <div className="row centered-form center-block">
        <div className="container col-md-5 col-md-offset-5">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4>Create your free account</h4>
            </div>
            <div className="card-body">
              <SignUpForm userSignUpRequest={userSignUpRequest}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
SignUpPage.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
}

export default connect(null, {userSignUpRequest})(SignUpPage);
