import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, CardMedia, Typography, Grid } from '@material-ui/core';
import styles from './Categories.module.css';
import cx from 'classnames';
import emergencyIcon from './CatergoryIcons/emergency.svg';
import risk from './CatergoryIcons/risk.svg';
import caseFinding from './CatergoryIcons/casefinding.svg';
import surv from './CatergoryIcons/surveillance.svg';
import publicHealth from './CatergoryIcons/publichealth.svg';
import infect from './CatergoryIcons/infect.svg';
import labTest from './CatergoryIcons/lab.svg';
import caseMgt from './CatergoryIcons/casemgt.svg';
import societal from './CatergoryIcons/societal.svg';


const Categories = () => {

    return (
        <div className={styles.container}>
            <Grid container spacing={1} justify="end" className={styles.padding}>
                <div className="container">
                    <div className="row justify-content-between" style={{ marginBottom: "44.2px", marginTop: "93.4px" }}>
                        <div className="col-m"><h2 style={{ marginLeft: ".5rem", fontWeight: "500" }}>Categories</h2></div>
                        <div className="col-m"><p className={styles.addResource}>+ Add resource</p></div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <Link to="/emergency-response" style={{ textDecoration: "none" }}>
                            <Grid item component={Card} xs={12} s={6} md={3} className={cx(styles.card, styles.emergency)}>
                                <CardContent>
                                    <CardMedia
                                        className={styles.icons}
                                        image={emergencyIcon}
                                        title="Paella dish"
                                    />

                                    <Typography className={styles.categoryTitle}>
                                        Emergency Response
                        </Typography>

                                    <Typography className={styles.resourcesQty}>
                                        0 Resources
                        </Typography>
                                </CardContent>

                            </Grid>

                        </Link>

                        <Link to="/risk-communication" style={{ textDecoration: "none" }}>
                            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.risk)}>
                                <CardContent>
                                    <CardMedia
                                        className={styles.icons}
                                        image={risk}
                                        title="Risk Communication icon"
                                    />
                                    <Typography className={styles.categoryTitle}>
                                        Risk communication & community engagement
                        </Typography>
                                    <Typography className={styles.resourcesQty}>
                                        29 Resources
                        </Typography>

                                </CardContent>
                            </Grid>

                        </Link>

                        <Link to="/case-finding" style={{ textDecoration: "none" }}>

                            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.casefinding)}>
                                <CardContent>
                                    <CardMedia
                                        className={styles.icons}
                                        image={caseFinding}
                                        title="Case Finding Icon"
                                    />
                                    <Typography className={styles.categoryTitle}>
                                        Case finding, contact tracing & management
                        </Typography>
                                    <Typography className={styles.resourcesQty}>
                                        5 Resources
                        </Typography>

                                </CardContent>
                            </Grid>
                        </Link>



                        <Link to="/surveillance" style={{ textDecoration: "none" }}>
                            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.surveillance)}>
                                <CardContent>
                                    <CardMedia
                                        className={styles.icons}
                                        image={surv}
                                        title="Surveillance Icon"
                                    />
                                    <Typography className={styles.categoryTitle}>
                                        Surveillance
                        </Typography>
                                    <Typography className={styles.resourcesQty}>
                                        16 Resources
                        </Typography>

                                </CardContent>
                            </Grid>
                        </Link>




                        <Link to="/public-health-prevention" style={{ textDecoration: "none" }}>
                            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.ph)}>
                                <CardContent>
                                    <CardMedia
                                        className={styles.icons}
                                        image={publicHealth}
                                        title="Public Health Icon"
                                    />
                                    <Typography className={styles.categoryTitle}>
                                        Public health prevention measures
                        </Typography>
                                    <Typography className={styles.resourcesQty}>
                                        21 Resources
                        </Typography>

                                </CardContent>
                            </Grid>
                        </Link>



                        <Link to="/infection-prevention" style={{ textDecoration: "none" }}>
                            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infection)}>
                                <CardContent>
                                    <CardMedia
                                        className={styles.icons}
                                        image={infect}
                                        title="Infection Prevention & Control Icon"
                                    />
                                    <Typography className={styles.categoryTitle}>
                                        Infection prevention & control
                        </Typography>
                                    <Typography className={styles.resourcesQty}>
                                        31 Resources
                        </Typography>

                                </CardContent>
                            </Grid>

                        </Link>

                        {/* Lab Testing Card */}

                        <Link to="/lab-testing" style={{ textDecoration: "none" }}>
                            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.lab)}>
                                <CardContent>
                                    <CardMedia
                                        className={styles.icons}
                                        image={labTest}
                                        title="Lab Testing Icon"
                                    />
                                    <Typography className={styles.categoryTitle}>
                                        Lab testing
                        </Typography>
                                    <Typography className={styles.resourcesQty}>
                                        13 Resources
                        </Typography>

                                </CardContent>
                            </Grid>
                        </Link>

                        <Link to="/case-management-hospital-response" style={{ textDecoration: "none" }}>
                            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.casemgt)}>
                                <CardContent>
                                    <CardMedia
                                        className={styles.icons}
                                        image={caseMgt}
                                        title="Case Mgt & Hospital Response Icon"
                                    />
                                    <Typography className={styles.categoryTitle}>
                                        Case management & hospital response
                        </Typography>
                                    <Typography className={styles.resourcesQty}>
                                        29 Resources
                        </Typography>

                                </CardContent>
                            </Grid>

                        </Link>

                        <Link to="/societal-response" style={{ textDecoration: "none" }}>
                            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.societal)}>
                                <CardContent>
                                    <CardMedia
                                        className={styles.icons}
                                        image={societal}
                                        title="Societal Response"
                                    />
                                    <Typography className={styles.categoryTitle}>
                                        Societal response
                        </Typography>
                                    <Typography className={styles.resourcesQty}>
                                        5 Resources
                        </Typography>

                                </CardContent>
                            </Grid>

                        </Link>
                    </div>
                </div>
            </Grid>
        </div>
    )
}

export default Categories;