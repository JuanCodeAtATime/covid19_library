import React from 'react';
import styles from './BrowseResources.module.css';
import ResourcesCards from '../../components/ResourcesCards/ResourcesCards';
import Outline from '../../components/Content/Outline';
// import Resources from '../../components/Content/Resources';

import cx from 'classnames';

const RiskComm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.riskCommColoredBar}>
                <h1 className={styles.resourceTitle}>Risk Communication & Community Engagement</h1>
                <p className={styles.resourceCount}>34 Resources</p>
            </div>
            <div className="container ml-0">
                <div className="row top">
                    <div className="col-lg col-md col-sm col-">
                        <Outline />
                    </div>
                    <div className="col-lg col-md col-sm col- browseRight"
                    // style={{ backgroundColor: "black" }}
                    >
                        {/* <Resources /> */}

                        <ResourcesCards />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskComm;