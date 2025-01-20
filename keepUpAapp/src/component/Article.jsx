import React from 'react';
import DOMPurify from 'dompurify';


function Article({ title, content }) {
  const sanitizedContent = content ? DOMPurify.sanitize(content) : '';
  const sanitizedTitle = title ? DOMPurify.sanitize(title) : '';

  return (
    <div className="article-container">
      <h1 className="article-title" dangerouslySetInnerHTML={{ __html: sanitizedTitle }} />
      <div 
        className="article-content"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }} 
      />
      
    </div>
  );
}

export default Article;