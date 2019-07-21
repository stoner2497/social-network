import React, { Component } from 'react'
import {connect} from'react-redux'
import {RegisterUser} from '../../Actions/authAction'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            password:'',
            password2:'',
            errors:{}
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
    onHandleChange  (e) {
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit (e) {
        e.preventDefault();
        const {name,email,password,password2,errors} = this.state
        const userData = {
            name,
            email,
            password,
            password2
        }
        this.props.RegisterUser(userData,this.props.history)
        console.log(errors)
        
    }

    render() {
        const {errors} = this.state
        return (
            <div className="register">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your DevConnector account</p>
          <form  onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="text" className="form-control form-control-lg" placeholder="Name" name="name" value={this.state.name} onChange={this.onHandleChange} required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onHandleChange} />
              <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onHandleChange} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onHandleChange} />
            </div>
            <div className="form-group">
            <small>{console.log(errors)}</small>
            </div>
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
        )
    }
}

const mapStateToProps = state => ({
    errors:state.errors
})

export default connect(mapStateToProps,{RegisterUser})(Register)