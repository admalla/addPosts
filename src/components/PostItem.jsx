import React from 'react';
import '../styles/App.css';
import MyButton from './UI/Button/MyButton';

export function PostItem({ post, number, remove }) {
  return (
    <div className="post">
      <div>
        <div>
          <strong>
            {post.id}. {post.title}
          </strong>
        </div>
        <div>{post.body}</div>
      </div>
      <MyButton onClick={() => remove(post)}>Delete</MyButton>
    </div>
  );
}

export default PostItem;
