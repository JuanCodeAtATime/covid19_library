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
            <Navbar className={styles.navbar} light expand="md">
                <NavbarBrand href="/" className={styles.logo}>
                    <img
                        alt=""
                        src={logo}
                        width="185"
                        height="50"
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

                                <DropdownItem href="/labTesting">
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
                            <NavLink target="_blank" rel="noopener noreferrer"
                                href="https://covid-19library.org/resource/create/1/">Add resources</NavLink>
                        </NavItem>
                        <NavItem className={styles.items}>
                            <NavLink target="_blank" rel="noopener noreferrer"
                                href="https://covid-19library.org/profile/register/">Register</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar style={{ marginRight: "1rem" }}>
                            <DropdownToggle nav caret className={styles.items}>
                                Help
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    How to use COVID-19 Library
                </DropdownItem>
                                <DropdownItem>
                                    Resource Guidelines
                </DropdownItem>
                                {/* //Use this for horizontal line <DropdownItem divider /> */}
                                <DropdownItem>
                                    Content Review Process
                </DropdownItem>
                                <DropdownItem>
                                    Creative Commons FAQs
                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                    <NavbarText className={styles.registerBtn}>Register</NavbarText>
                    <NavbarText className={styles.loginBtn}>Login</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;