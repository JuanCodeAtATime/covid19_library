import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Categories.module.css';
import cx from 'classnames';

const Categories = () => {

    return (
        <div className={styles.container}>
            <Grid container spacing={2} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.emergency)}>
                    <CardContent>
                        <Typography className={cx(styles.font)} gutterBottom>Infected</Typography>
                        <Typography variant="h5">

                        </Typography>
                        <Typography style={{ fontWeight: "bold", color: "whitesmoke" }}>
                            look
                        </Typography>
                        <Typography variant="body2">Number of </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.risk)}>
                    <CardContent>
                        <Typography className={cx(styles.font)} gutterBottom>Recovered</Typography>

                        <Typography style={{ fontWeight: "bold", color: "whitesmoke" }}>
                            look
                        </Typography>
                        <Typography variant="body2">Number of </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.casefinding)}>
                    <CardContent>
                        <Typography className={cx(styles.font)} gutterBottom>Deaths</Typography>

                        <Typography style={{ fontWeight: "bold", color: "whitesmoke" }}>
                            look
                        </Typography>
                        <Typography variant="body2">Number of</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.surveillence)}>
                    <CardContent>
                        <Typography className={cx(styles.font)} gutterBottom>Infected</Typography>
                        <Typography variant="h5">

                        </Typography>
                        <Typography style={{ fontWeight: "bold", color: "whitesmoke" }}>
                            look
                        </Typography>
                        <Typography variant="body2">Number of </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.ph)}>
                    <CardContent>
                        <Typography className={cx(styles.font)} gutterBottom>Recovered</Typography>

                        <Typography style={{ fontWeight: "bold", color: "whitesmoke" }}>
                            look
                        </Typography>
                        <Typography variant="body2">Number of</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infection)}>
                    <CardContent>
                        <Typography className={cx(styles.font)} gutterBottom>Deaths</Typography>

                        <Typography style={{ fontWeight: "bold", color: "whitesmoke" }}>
                            look
                        </Typography>
                        <Typography variant="body2">Number of</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.lab)}>
                    <CardContent>
                        <Typography sclassName={cx(styles.font)} gutterBottom>Infected</Typography>
                        <Typography variant="h5">

                        </Typography>
                        <Typography style={{ fontWeight: "bold", color: "whitesmoke" }}>
                            look
                        </Typography>
                        <Typography variant="body2">Number of </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.casemgt)}>
                    <CardContent>
                        <Typography className={cx(styles.font)} gutterBottom>Recovered</Typography>

                        <Typography style={{ fontWeight: "bold", color: "whitesmoke" }}>
                            look
                        </Typography>
                        <Typography variant="body2">Number of </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.societal)}>
                    <CardContent>
                        <Typography className={cx(styles.font)} gutterBottom>Deaths</Typography>

                        <Typography style={{ fontWeight: "bold", color: "whitesmoke" }}>
                            look
                        </Typography>
                        <Typography variant="body2">Number of </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Categories;