import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import classnames from 'classnames';

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

  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {

    e.preventDefault();
    this.setState({errors: {}, isLoading: true});
    this.props.userSignUpRequest(this.state).then(() => {}, ({data}) => this.setState({errors: data, isLoading: false}));
    // e.preventDefault();
    // this.setState({errors: {} });
    // this.props.userSignUpRequest(this.state).then(
    //   () => {},
    //   ( err ) => this.setState({ errors: err.response.data })
    // );

  }
  render() {
    const {errors} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        {/* <h2 className="bg-primary text-white">Create your free account</h2> */}
        <div className={classnames('form-group', {'has-error': errors.firstname})}>
          <label className="control-label">
            First Name
          </label>
          <input value={this.state.firstname} onChange={this.onChange} type="text" name="firstname" className="form-control"/> {errors.firstname && <span className="help-block">{errors.firstname}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">
            Last Name
          </label>
          <input value={this.state.lastname} onChange={this.onChange} type="text" name="lastname" className="form-control"/> {errors.lastname && <span className="help-block">{errors.lastname}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">
            Username
          </label>
          <input value={this.state.username} onChange={this.onChange} type="text" name="username" className="form-control"/> {errors.username && <span className="help-block">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">
            Password
          </label>
          <input value={this.state.password} onChange={this.onChange} type="text" name="password" className="form-control"/> {errors.password && <span className="help-block">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">
            Email
          </label>
          <input value={this.state.email} onChange={this.onChange} type="text" name="email" className="form-control"/> {errors.email && <span className="help-block">{errors.email}</span>}
        </div>
        <div className="text-left">
          <small>By clicking Submit, I agree that I have read and accepted the
            <a href="#"> Terms and conditions</a>
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
