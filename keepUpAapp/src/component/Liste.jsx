import React from 'react';
import Card from './card';
import styles from './Liste.module.css';

function Liste(props) {
  return (
    <div className={styles.liste}>
      {props.articles.map((article) => (
        <Card className={styles.listeCard}
          title={article.title}
          key={article.id}
          handleArticleClick={() => props.onArticleClick(article)} 
        />
      ))}
    </div>
  );
}

export default Liste;