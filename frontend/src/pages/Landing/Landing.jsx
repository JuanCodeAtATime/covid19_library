import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Landing.module.css';
import Categories from '../../components/Categories/Categories';
// import cx from 'classnames';

const Landing = () => {

    return (
        <div className={styles.container}>


            <div className="container">
                <div className="row">

                    <div className="col-lg col-md col-sm col-">
                        <h1 style={{ color: "red" }}>LANDING PAGE</h1>

                    </div>

                    <div className="col-lg col-md col-sm col-">
                        <Categories></Categories>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Landing;