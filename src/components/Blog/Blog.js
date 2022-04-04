import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className='blog-container'>
      <h2>Welcome to <span>blog</span></h2>
      <article>
        <h3><span>Q.</span> What is Context API?</h3>
        <p>- React has lots of different ways to solve specific problems and one of them is Context API. Context API is a component structure that provided by React, which helps us to solving the prop drilling problems. It is useful to share data that will be global by which we can pass state to multiple components instead of prop drilling.</p>
      </article>
      <article>
        <h3><span>Q.</span> What is semantic tag?</h3>
        <p>- HTML5 comes with semantic tags. HTML semantic tag or element clearly describe the tag name which is meaningful to developers and browsers such as header, footer, section, main, article etc. These all tags are considered semantic elements or tags of HTML because of these are clearly describe their purpose and the content inside of the elements. Using semantic tags help the search engines and other devices to determine the purpose of the context of web pages.</p>
      </article>
    </div>
  );
};

export default Blog;<h2>this is blog</h2>