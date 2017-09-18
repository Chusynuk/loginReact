import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import classnames from 'classnames';
import {Field, reduxForm} from 'redux-form'
import validateInput from '../../../server/shared/validations/signup'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: '',
      errors: {},
      isLoading: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    const firstname = value => value && /[a-fA-F]/i.test(value)

    const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)


    const minLength = min => value => value && value.length > min
        ? `Must be ${min} characters or less`
        : undefined

    const minLength8 = minLength(8)

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValid() {
    const {errors, isValid} = validateInput(this.state);

    if (!isValid) {

      this.setState({errors});
    }

    return isValid;
  }

  onSubmit(e) {

    e.preventDefault();

    if (this.isValid()) {

      this.setState({errors: {}, isLoading: true});
      this.props.userSignUpRequest(this.state).then(() => {}, ({data}) => this.setState({errors: data, isLoading: false}));
    }
  }
  render() {
    const {errors} = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className={classnames('form-group', {'has-danger': errors.firstname})}>
          <label className="control-label">
            First Name
          </label>
          <input value={this.state.firstname} onChange={this.onChange} type="text" name="firstname" className="form-control " id="inputDanger1"/> {errors.firstname && <div className="form-control-feedback">{errors.firstname}</div>}
        </div>
        <div className={classnames('form-group', {'has-danger': errors.lastname})}>
          <label className="control-label">
            Last Name
          </label>
          <input value={this.state.lastname} onChange={this.onChange} type="text" name="lastname" className="form-control "/> {errors.lastname && <div className="form-control-feedback">{errors.lastname}</div>}
        </div>
        <div className={classnames('form-group', {'has-danger': errors.username})}>
          <label className="control-label">
            Username
          </label>
          <input value={this.state.username} onChange={this.onChange} type="text" name="username" className="form-control"/> {errors.username && <div className="form-control-feedback">{errors.username}</div>}
        </div>
        <div className={classnames('form-group', {'has-danger': errors.password})}>
          <label className="control-label">
            Password
          </label>
          <input value={this.state.password} onChange={this.onChange} type="password" name="password" className="form-control"/> {errors.password && <div className="form-control-feedback">{errors.password}</div>}
          <small className="form-text text-muted">At least 8 characters.</small>
        </div>
        <div className={classnames('form-group', {'has-danger': errors.email})}>
          <label className="control-label">
            Email
          </label>
          <input value={this.state.email} onChange={this.onChange} type="text" name="email" className="form-control"/> {errors.email && <div className="form-control-feedback">{errors.email}</div>}
          <small className="form-text text-muted">An activation link will be sent to this email.</small>
        </div>
        <div className="text-left">
          <small>By clicking Submit, I agree that I have read and accepted the
            <a href="#">
              Terms and conditions</a>
          </small>
        </div>
        <div className="form-group mt-1">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
}

export default SignUpForm;
