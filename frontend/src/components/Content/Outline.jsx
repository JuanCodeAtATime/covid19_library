import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Outline.module.css';
// import Searchbar from '../SearchBar/Searchbar';
// import cx from 'classnames';

const Outline = () => {

    return (
        <div className={styles.container}>
            <Grid className={styles.content} container>
                <div className="row" style={{ marginBottom: "28.9px", marginTop: "45px" }}>
                    <h2 style={{ fontWeight: "600" }}>Outline</h2></div>
                <div className="row">
                    <p className={styles.outlinePara}>WHO has outlined critical priority actions
                    for preparedness, readiness, and response
                 actions for COVID-19 and has defined four transmission scenarios:</p>
                </div>
                <div className="row">
                    <p className={styles.outlinePara}>
                        <b>1</b> {'\u00A0'} Countries with no cases (No Cases);<br></br>
                        <b>2</b> {'\u00A0'} Countries with 1 or more cases, imported or locally detected (Sporadic Cases);<br></br>
                        <b>3</b> {'\u00A0'} Countries experiencing clusters of cases related in time, geographic location, or common exposure (Clusters of cases);<br></br>
                        <b>4</b> {'\u00A0'} Countries experiencing larger outbreaks or sustained and pervasive local transmission (Community transmission).<br></br></p>
                </div>

                <div className="row">
                    <p className={styles.outlinePara}>This category of content concerns guidance to policy makers and laboratories on testing
                    strategies for each of these four scenarios, including the scenario in which testing can
                    be performed only on a limited number of patients. Further information around Lab Testing
                 strategies can be found here.</p>
                </div>
            </Grid>
        </div>
    )
}

export default Outline;