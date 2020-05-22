import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Categories.module.css';
import cx from 'classnames';

const Categories = () => {

    return (
        <div className={styles.container}>
            <Grid container spacing={1} justify="end">
                <div className="row"> <h2 style={{ marginLeft: ".5rem" }}>Categories</h2></div>
                <div className="row">
                    <Grid item component={Card} xs={12} s={6} md={3} className={cx(styles.card, styles.emergency)}>
                        <CardContent>

                            <Typography className={styles.categoryTitle}>
                                Emergency Response
                        </Typography>

                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.risk)}>
                        <CardContent>


                            <Typography className={styles.categoryTitle}>
                                Risk communication & community engagement
                        </Typography>

                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.casefinding)}>
                        <CardContent>
                            <Typography className={styles.categoryTitle}>
                                Case finding, contact tracing & management
                        </Typography>

                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.surveillance)}>
                        <CardContent>
                            <Typography className={styles.categoryTitle}>
                                Surveillance
                        </Typography>

                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.ph)}>
                        <CardContent>
                            <Typography className={styles.categoryTitle}>
                                Public health prevention measures
                        </Typography>

                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infection)}>
                        <CardContent>
                            <Typography className={styles.categoryTitle}>
                                Infection prevention & control
                        </Typography>

                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.lab)}>
                        <CardContent>
                            <Typography className={styles.categoryTitle}>
                                Lab testing
                        </Typography>

                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.casemgt)}>
                        <CardContent>
                            <Typography className={styles.categoryTitle}>
                                Case management & hospital response
                        </Typography>

                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.societal)}>
                        <CardContent>
                            <Typography className={styles.categoryTitle}>
                                Societal response
                        </Typography>

                        </CardContent>
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}

export default Categories;