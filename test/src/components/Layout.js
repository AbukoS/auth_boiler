import React, { Component } from "react";
import "../App.css";
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/auth";
import { Link } from "react-router-dom";

class Layout extends Component {
  componentDidMount() {
    this.props.onTryAutoSignin();
  }

  render() {
    return (
      <div>
        <Menu inverted>
          <Container>
            <Link to="/">
              <Menu.Item header>BUTEK'S ONLINE</Menu.Item>
            </Link>
            <Link to="/">
              <Menu.Item>Home</Menu.Item>
            </Link>
            <Menu.Menu position="right">
              {this.props.authenticated ? (
                <Menu.Item onClick={() => this.props.logout()}>
                  Logout
                </Menu.Item>
              ) : (
                <React.Fragment>
                  <Link to="/login">
                    <Menu.Item>Login</Menu.Item>
                  </Link>
                  <Link to="/signup">
                    <Menu.Item>SignUp</Menu.Item>
                  </Link>
                </React.Fragment>
              )}
            </Menu.Menu>
          </Container>
        </Menu>

        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 1" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 2" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 3" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="Footer Header" />
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignin: () => dispatch(actionTypes.authCheckState()),
    logout: () => dispatch(actionTypes.authLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
