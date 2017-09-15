import React,{Component} from 'react';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstname : '',
      lastname: '',
      username: '',
      password: '',
      email: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);

  }
    render() {
        return (
          <form onSubmit={this.onSubmit}>
              <h1>HELLO NUC</h1>
              <div className="form-group">
                <label className="control-label">
                  First Name
                </label>
                <input
                  value={this.state.firstname}
                  onChange={this.onChange}
                  type="text"
                  name="firstname"
                  className="form-control"/>
              </div>
              <div className="form-group">
                <label className="control-label">
                  Last Name
                </label>
                <input
                  value={this.state.lastname}
                  onChange={this.onChange}
                  type="text"
                  name="lastname"
                  className="form-control"/>
              </div>
              <div className="form-group">
                <label className="control-label">
                  Username
                </label>
                <input
                  value={this.state.username}
                  onChange={this.onChange}
                  type="text"
                  name="username"
                  className="form-control"/>
              </div>
              <div className="form-group">
                <label className="control-label">
                  Password
                </label>
                <input
                  value={this.state.password}
                  onChange={this.onChange}
                  type="text"
                  name="password"
                  className="form-control"/>
              </div>
              <div className="form-group">
                <label className="control-label">
                  Email
                </label>
                <input
                  value={this.state.email}
                  onChange={this.onChange}
                  type="text"
                  name="email"
                  className="form-control"/>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-lg">Sign Up</button>
              </div>
            </form>
        );
    }
}

export default SignUpForm;
