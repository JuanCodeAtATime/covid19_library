import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './LandingContent.module.css';
import Searchbar from '../SearchBar/Searchbar';
import cx from 'classnames';

const LandingContent = () => {

    return (
        <div className={styles.container}>
            <Grid className={styles.content} container>
                <div className="row" style={{ marginBottom: "28.9px", marginTop: "93.4px" }}>
                    <h2 style={{ fontWeight: "600" }}>COVID-19 Library</h2></div>
                <div className="row COVID-19-Library-off">
                    COVID-19 Library offers community-based health workers
                    and trainers access to quality assured, openly licensed
                    content that can be used on mobile devices and shared virally
                    amongst different communities.
                </div>
                <div className="row landingSearchbar">
                    <Searchbar />
                    <p className={styles.advancedSearch}>Advanced Search</p>
                </div>

                <div className={cx(styles.menuItems, `row`)}>
                    <p>How to use COVID-19 Library<br></br>
                       Resource Guidelines<br></br>
                       Content Review Process<br></br>
                       Creative Commons FAQs
                    </p>
                </div>






            </Grid>
        </div>
    )
}

export default LandingContent;