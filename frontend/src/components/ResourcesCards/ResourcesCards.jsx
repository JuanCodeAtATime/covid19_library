import React from 'react';
import { Card, CardContent, CardHeader, CardActions, CardMedia, Typography, Grid } from '@material-ui/core';
import styles from './ResourcesCards.module.css';
import cx from 'classnames';
import TimerRoundedIcon from '@material-ui/icons/TimerRounded';
import egypt from './CountriesFlags/egypt.svg';
import eu from './CountriesFlags/eu.svg';
import india from './CountriesFlags/india.svg';
import Searchbar from '../SearchBar/Searchbar';
import labTest from '../Categories/CatergoryIcons/lab.svg';


const ResourcesCards = () => {

    return (
        <div className={styles.container}>
            <Grid container spacing={1} justify="start" className={styles.padding}>
                <div className="container">
                    <div className="row" style={{ marginBottom: "20.6px", marginTop: "45px" }}>
                        {/* Resources quantity, dynamically generated value? */}
                        <h2 style={{ fontWeight: "500" }}>Resources <span>(34)</span></h2>
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

                                    <ul>
                                        <li> <b className={styles.regionList}>Region: </b></li>
                                        <li><a
                                            href="#"
                                            className={styles.flagIconsEg}
                                            image={egypt}>
                                        </a></li>
                                        <li><a
                                            href="#"
                                            className={styles.flagIconsEu}
                                            image={eu}>
                                        </a></li>
                                        <li><a
                                            href="#"
                                            className={styles.flagIconsIn}
                                            image={india}>
                                        </a></li>

                                        <b style={{ marginLeft: "1rem", marginRight: ".5rem" }}>Language: </b>
                                        <li> Arabic </li><span className={styles.languageSpan}> &#8226; </span>
                                        <li> English </li><span className={styles.languageSpan}> &#8226; </span>
                                        <li> German </li><span className={styles.languageSpan}> &#8226; </span>
                                        <li> Indian </li>


                                    </ul>



                                </Typography>
                            </CardContent>
                        </Grid>

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

                                    <ul>
                                        <li> <b className={styles.regionList}>Region: </b></li>
                                        <li><a
                                            href="#"
                                            className={styles.flagIconsEg}
                                            image={egypt}>
                                        </a></li>
                                        <li><a
                                            href="#"
                                            className={styles.flagIconsEu}
                                            image={eu}>
                                        </a></li>
                                        <li><a
                                            href="#"
                                            className={styles.flagIconsIn}
                                            image={india}>
                                        </a></li>


                                        <b style={{ marginLeft: "1rem", marginRight: ".5rem" }}>Language: </b>
                                        <li> Arabic </li><span className={styles.languageSpan}> &#8226; </span>
                                        <li> English </li><span className={styles.languageSpan}> &#8226; </span>
                                        <li> German </li><span className={styles.languageSpan}> &#8226; </span>
                                        <li> Indian </li>
                                    </ul>



                                </Typography>
                            </CardContent>
                        </Grid>


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

                                    <ul>
                                        <li> <b className={styles.regionList}>Region: </b></li>
                                        <li><a
                                            href="#"
                                            className={styles.flagIconsEg}
                                            image={egypt}>
                                        </a></li>
                                        <li><a
                                            href="#"
                                            className={styles.flagIconsEu}
                                            image={eu}>
                                        </a></li>
                                        <li><a
                                            href="#"
                                            className={styles.flagIconsIn}
                                            image={india}>
                                        </a></li>


                                        <b style={{ marginLeft: "1rem", marginRight: ".5rem" }}>Language: </b>
                                        <li> Arabic </li><span className={styles.languageSpan}> &#8226; </span>
                                        <li> English </li><span className={styles.languageSpan}> &#8226; </span>
                                        <li> German </li><span className={styles.languageSpan}> &#8226; </span>
                                        <li> Indian </li>
                                    </ul>



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