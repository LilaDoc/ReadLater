import React from 'react';
import styles from './GridCard.module.css';

function GridCard(props) {
    return (
        <div className={styles.gridCard}>
            <div className={styles.gridCardHeader}>
                <input type="checkbox" />
                <h1>{props.title}</h1>
            </div>
            <div className={styles.gridCardBody}>
                <div className={styles.gridCardBodyContent}>
                    <p className={styles.gridCardMeta}>a month ago 5min read</p>
                    <p className={styles.gridCardTitle}>{props.title}</p>
                    <p className={styles.gridCardMeta}>Other| source</p>
                </div>
                
            </div>

        </div>
    );
}

export default GridCard;