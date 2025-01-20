import React, { useState } from 'react';
import styles from './card.module.css';
import CardToolBar from './CardToolBar';

function Card(props) {

    
  return (
    
        <div className={styles.cardContent} >
           <div className={styles.cardCheckbox}>
            <input type="checkbox" className={styles.checkBox}/>
           </div>
           <span className={styles.cardImg}><p>{props.title.slice(0, 3)}</p></span>
           <div className={styles.cardTitleContainer}>
                <div className={styles.metaText}>
                    <p>a month ago • 10 min read</p>
                </div>
                     <p className={styles.cardTitle} onClick={props.handleArticleClick}>
                    {props.title}
                    </p>
                <div className={styles.metaText}>
                    <p>Author| Website</p>
                 </div>
           </div>
           <div className={styles.cardToolBar}>
             <CardToolBar />
           </div>
         
        </div>
   
  );
}

export default Card;
