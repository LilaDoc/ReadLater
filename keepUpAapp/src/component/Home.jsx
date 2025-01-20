import React from 'react';
import Liste from './Liste';
import styles from './Home.module.css';
import ToolBar from './ToolBar';
import Gridview from './Gridview';

function Home(props) {
    return (
        <div className={styles.home}>
            
                
                
            <ToolBar 
                onAddArticle={props.onAddArticle}
                onReadArticle={props.onReadArticle}
                handleChange={props.handleChange}
            />
            <Gridview articles={props.articles} onArticleClick={props.onArticleClick} />
            {/* <Liste articles={props.articles} onArticleClick={props.onArticleClick} /> */}   
        </div> 

    )
}

export default Home;

{/* <a href="https://www.flaticon.com/free-icons/book" title="book icons">Book icons created by Freepik - Flaticon</a> */}