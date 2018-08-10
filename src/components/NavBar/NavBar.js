import React from 'react';
import {
    Container,
    Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

  import './NavBar.css';
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
    <Navbar light expand="md">
        <Container>
          <NavbarBrand href="https://giphy.com/">GIPHY</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/jamal-Alalami/giphy-weather">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
    </Navbar>
    );
  }
}