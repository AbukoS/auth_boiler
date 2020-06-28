import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { authSignup } from "../store/actions/auth";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handelSubmit = () => {
    const { username, email, password1, password2 } = this.state;
    this.props.signup(username, email, password1, password2);
    this.setState({ username: "", email: "", password1: "", password2: "" });
  };

  render() {
    const { loading, error } = this.props;
    const { username, email, password1, password2 } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Create an account
          </Header>
          <Form size="large" onSubmit={this.handelSubmit} error={error}>
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                value={username}
                onChange={this.handleChange}
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input
                fluid
                name="email"
                value={email}
                onChange={this.handleChange}
                icon="mail"
                iconPosition="left"
                placeholder="Email address"
              />
              <Form.Input
                fluid
                name="password1"
                value={password1}
                onChange={this.handleChange}
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Form.Input
                fluid
                name="password2"
                value={password2}
                onChange={this.handleChange}
                icon="lock"
                iconPosition="left"
                placeholder="Confirm password"
                type="password"
              />
              {error && (
                <Message
                  error
                  header="There was an error"
                  content="Please check your credentials"
                />
              )}
              <Button
                color="teal"
                loading={loading}
                disabled={loading}
                fluid
                size="large"
              >
                SignUp
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/login"> Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (username, email, password1, password2) =>
      dispatch(authSignup(username, email, password1, password2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
