import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleChange(event) {
    console.log('handle change', event);

  }

  render() {
    return (
      <div>
        <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Your email'
            vlaue={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Your password'
            vlaue={this.state.password}
            onChange={this.handleChange}
          />
          <div>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    )
  }
}