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
import { authLogin } from "../store/actions/auth";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handelSubmit = () => {
    const { username, password } = this.state;
    this.props.login(username, password);
    this.setState({ username: "", password: "" });
  };

  render() {
    const { loading, error } = this.props;
    const { username, password } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
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
                name="password"
                value={password}
                onChange={this.handleChange}
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              {error && (
                <Message
                  error
                  header="Unable to Login"
                  content="Please check your username and password"
                />
              )}
              <Button
                color="teal"
                loading={loading}
                disabled={loading}
                fluid
                size="large"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/signup"> Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.token !== null,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(authLogin(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
