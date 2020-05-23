import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Landing.module.css';
import Categories from '../../components/Categories/Categories';
import LandingContent from '../../components/Content/LandingContent';
// import cx from 'classnames';

const Landing = () => {

    return (
        <div className={styles.container}>
            <div className="container ml-0">
                <div className="row top">
                    <div className="col-lg col-md col-sm col- left">
                        <LandingContent />
                    </div>
                    <div className="col-lg col-md col-sm col- rightColumn"
                        style={{
                            width: "100%",
                            marginLeft: "0"
                        }}>
                        <Categories />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Landing;