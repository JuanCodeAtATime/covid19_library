import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Grid } from '@material-ui/core';
import styles from './ResourcesCards.module.css';
import cx from 'classnames';
import emergencyIcon from '../Categories/CatergoryIcons/emergency.svg';
import risk from '../Categories/CatergoryIcons/risk.svg';
import Searchbar from '../SearchBar/Searchbar';


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