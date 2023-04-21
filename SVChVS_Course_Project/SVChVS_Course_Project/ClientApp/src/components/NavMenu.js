import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            isHidden: true,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand style={{ paddingLeft: 10 }} href="/">GameStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Игры" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/Games">Просмотр игр</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Поиск игр" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/GamesByName">Поиск по названию</NavDropdown.Item>
                                <NavDropdown.Item href="/GamesByPrice">Поиск более дешевых игр</NavDropdown.Item>
                                <NavDropdown.Item href="/GamesByMark">Поиск игр по оценке</NavDropdown.Item>
                                <NavDropdown.Item href="/GamesByDescription">Поиск игр по описанию</NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                    <Nav style=
                        {{
                        marginLeft: "auto",
                        paddingRight:40
                        }}>
                        <Nav.Link style={{ float: "right" }} href="/">На главную</Nav.Link>
                        <Nav.Link style={{ float: "right" }} href="/logout">Выйти</Nav.Link>
                        <Nav.Link style={{ float: "right" }} href="/">О нас</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
