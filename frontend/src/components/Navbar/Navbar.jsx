import React, { useState } from 'react';
import logo from './logo.svg';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import styles from './Navbar.module.css';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{ backgroundColor: "ffffff" }} light expand="md">
                <NavbarBrand href="/" className={styles.logo}>
                    <img
                        alt=""
                        src={logo}
                        width="165"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className={styles.center}>
                    <Nav className={styles.items} navbar >

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className={styles.items}>
                                Browse Resources
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Emergency Response
                </DropdownItem>
                                <DropdownItem>
                                    Risk Management & Community Engagement
                </DropdownItem>
                                {/* //Use this for horizontal line <DropdownItem divider /> */}
                                <DropdownItem>
                                    Case Finding, Contact Tracing & Management
                </DropdownItem>
                                <DropdownItem>
                                    Public Health Prevention Measures
                </DropdownItem>
                                <DropdownItem>
                                    Infection Prevention and Control
                </DropdownItem>
                                <DropdownItem>
                                    Lab Testing
                </DropdownItem>
                                <DropdownItem>
                                    Case Management and Hospital Response
                </DropdownItem>
                                <DropdownItem>
                                    Societal Response
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem className={styles.items}>
                            <NavLink href="/components/">Add resources</NavLink>
                        </NavItem>
                        <NavItem className={styles.items}>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Help</NavLink>
                        </NavItem>

                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;