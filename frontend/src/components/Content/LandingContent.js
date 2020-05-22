import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './LandingContent.module.css';
// import cx from 'classnames';

const LandingContent = () => {

    return (
        <div className={styles.container}>
            <Grid className={styles.content} container justify="left">
                <div className="row"> <h2>COVID-19 Library</h2></div>
                <div className="row COVID-19-Library-off">
                    COVID-19 Library offers community-based health workers
                    and trainers access to quality assured, openly licensed
                    content that can be used on mobile devices and shared virally
                    amongst different communities.
                </div>
                <div className="row landingSearchbar">
                    {/* searchbar goees here */}
                </div>
            </Grid>
        </div>
    )
}

export default LandingContent;