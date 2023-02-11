import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import MyButton from './UI/Button/MyButton';

export function PostItem({ post, remove }) {
  const navigation = useNavigate();
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
      <MyButton onClick={() => navigation(`/posts/${post.id}`)}>Open</MyButton>
      <MyButton onClick={() => remove(post)}>Delete</MyButton>
    </div>
  );
}

export default PostItem;
