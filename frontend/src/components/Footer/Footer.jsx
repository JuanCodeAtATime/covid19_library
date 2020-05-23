
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styles from './Footer.module.css';
import cx from 'classnames';

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <MDBFooter color="blue" className={cx(styles.container, `font-small pt-4 mt-4`)}>
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="3">
                            <h6 className="title">Contact US</h6>
                            <p>
                                info@covid-19digitalclassroom.org
            </p>
                        </MDBCol>
                        <MDBCol md="3">
                            <h6 className="title">Follow Us</h6>
                            <p style={{ marginBottom: "0px" }}><a className={styles.footer} target="_blank" rel="noopener noreferrer"
                                href="https://twitter.com/lastmilehealth">Twitter</a></p>
                            <p> <a className={styles.footer} target="_blank" rel="noopener noreferrer"
                                href="https://lastmilehealth.org/what-we-do/community-health-academy/">Website</a></p>
                        </MDBCol>
                        <MDBCol md="3">
                            <h6 className="title">About</h6>
                            <ul>
                                <li className="list-unstyled">
                                    <a className={styles.footer} target="_blank" rel="noopener noreferrer"
                                        href="https://covid-19library.org/about/">About COVID-19 Digital Classroom</a>
                                </li>
                                <li className="list-unstyled">
                                    <a className={styles.footer} target="_blank" rel="noopener noreferrer"
                                        href="#!">How to use COVID-19 Library</a>
                                </li>
                                <li className="list-unstyled">
                                    <a className={styles.footer} target="_blank" rel="noopener noreferrer"
                                        href="#!">Creative Commons FAQs</a>
                                </li>
                                <li className="list-unstyled">
                                    <a className={styles.footer} target="_blank" rel="noopener noreferrer"
                                        href="#!">Resource Guidelines</a>
                                </li>
                                <li className="list-unstyled">
                                    <a className={styles.footer} target="_blank" rel="noopener noreferrer"
                                        href="#!">Content Review Proces</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="3">
                            <h6 className="title">Legal</h6>
                            <p>
                                Terms and Privacy Policy
            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                {/* Incase we want to add a copyright message in the footer */}
                {/* <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="*"> COVID-19 Digital Classroom </a>
                    </MDBContainer>
                </div> */}
            </MDBFooter>
        </div>
    );
}

export default Footer;