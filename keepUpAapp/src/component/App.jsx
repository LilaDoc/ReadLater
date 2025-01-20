import { useState, useEffect } from 'react'
import styles from './App.module.css'
import axios from 'axios'
import Article from './Article'
import LeftBar from './LeftBar'
import Home from './Home'
import LeftBarButton from './LeftBarButton'
import Add from './Add'

function App() {
  const [article, setArticle] = useState("");
  const [url, setUrl] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/articles`);
            setArticles(response.data);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    fetchArticles();
  }, []);

  function handleChange(e) {
    const value =(e.target.value);
    setUrl(value);
    console.log(url);

  }

  const submitUrl = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/url`, {
        params: {
          url: url
        }
      });
      setArticle(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function addArticle(){
    await axios.post(`http://localhost:4000/add`, {
      url: url
    });
  }

  async function handleArticleClick(article){
    const response = await axios.get(`http://localhost:4000/article`, {
      params: {
        id: article.id
      }
    });
    setArticle(response.data);
  }
  const [addPopup, setAddPopup] = useState(false);
  const [showLeftBar, setShowLeftBar] = useState(false);

  const toggleLeftBar = () => {
    setShowLeftBar(!showLeftBar);
  }
  const showAddPopup = () => {
    setAddPopup(true);
  }

  if (article) {

    return (
      <>
      <Article title={article.title} content={article.content} />
      </>
    )

  }else{
    return (

      <div className={styles.mainContainer}>
        {addPopup && <Add className={styles.addPopup} onClose={() => setAddPopup(false)} />}
              <div className={`${styles.container} ${!showLeftBar ? styles.fullWidth : ''}`}>
          <div className={styles.leftBarButton}>
            <LeftBarButton toggleLeftBar={toggleLeftBar}  />
          </div>  
          {showLeftBar && (
            <div className={styles.leftBar}>
              <LeftBar showAddPopup={showAddPopup} />
            </div>
          )}
          
          <div className={`${styles.home} ${!showLeftBar ? styles.homeFullWidth : ''}`}>
            <Home
              handleChange={handleChange}
              onReadArticle={submitUrl} 
              onAddArticle={addArticle}
              articles={articles}
              onArticleClick={handleArticleClick}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
