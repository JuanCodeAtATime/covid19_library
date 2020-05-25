import React from 'react';
import { Card, CardContent, CardHeader, CardActions, CardMedia, Typography, Grid } from '@material-ui/core';
import styles from './ResourcesCards.module.css';
import cx from 'classnames';
import TimerRoundedIcon from '@material-ui/icons/TimerRounded';
import emergencyIcon from '../Categories/CatergoryIcons/emergency.svg';
import risk from '../Categories/CatergoryIcons/risk.svg';
import Searchbar from '../SearchBar/Searchbar';
import labTest from '../Categories/CatergoryIcons/lab.svg';


const ResourcesCards = () => {

    return (
        <div className={styles.container}>
            <Grid container spacing={1} justify="start" className={styles.padding}>
                <div className="container">
                    <div className="row" style={{ marginBottom: "20.6px", marginTop: "45px" }}>
                        <h2 style={{ fontWeight: "500" }}>Resources</h2>
                    </div>
                    <div className="row" style={{ width: "450px" }}>
                        <Searchbar className={styles.searchBar} />
                    </div>

                </div>

                <div className="container">
                    <div className="row">
                        <Grid item component={Card} xs={12} s={12} md={12} className={cx(styles.card, styles.emergency)}>
                            {/* Time burden dynamically generated value? */}
                            <p className={styles.stopwatch}> <TimerRoundedIcon /><span className={styles.timeBurden}>1 min</span></p>
                            <CardHeader
                                className={styles.header}
                                avatar={
                                    <CardMedia
                                        className={styles.icons}
                                        image={labTest}
                                        title="Paella dish"
                                    ></CardMedia>
                                }

                                title="Our Heroes Day"
                                subheader="Job Aid from Stanford Center for Health Education"
                            />

                            <hr className={styles.hrTop}></hr>
                            <CardContent>
                                <Typography className={styles.rectangleCardsContent}>
                                    The title is West African Pidgin English, meaning 'our heroes are still with us'.
                                    The message of the threat of Covid-19 is delivered to the African continent by
                                    historic black icons, encouraging everybody to be heroes.
                            </Typography>
                            </CardContent>
                            <hr className={styles.hrTop}></hr>
                            <CardContent>
                                <Typography className={styles.rectangleCardsContent}>

                                    <ul className={styles.regionList}>
                                        <li> <b>Region: </b></li>
                                        <li><a href="#"> second region</a></li>
                                        <li><a href="#"> third region</a></li>
                                        {" "}
                                        <b style={{ marginLeft: "1rem" }}>Language: </b>
                                        <li><a href="#"> Arabic</a></li>
                                        <li><a href="#"> English</a></li>
                                        <li><a href="#"> German</a></li>
                                        <li><a href="#"> Indian</a></li>
                                    </ul>

                                </Typography>
                            </CardContent>
                        </Grid>










                        <Grid item component={Card} xs={12} s={12} md={12} className={cx(styles.card, styles.risk)}>
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
                        <Grid item component={Card} xs={12} s={12} md={12} className={cx(styles.card, styles.emergency)}>
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

                        <Grid item component={Card} xs={12} s={12} md={12} className={cx(styles.card, styles.emergency)}>
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

                    </div>
                </div>
            </Grid>
        </div>
    )
}

export default ResourcesCards;