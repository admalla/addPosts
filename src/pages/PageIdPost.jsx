import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postsService from '../API/postsService';
import { Loader } from '../components/UI/Loader/Loader';
import UseFetching from '../hooks/useFetching';

export function PageIdPost() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = UseFetching(async (id) => {
    const responce = await postsService.getById(id);
    setPost(responce.data);
  });

  const [fetchCommtById, isLoadingComm, errorComm] = UseFetching(async (id) => {
    const responce = await postsService.getCommById(id);
    setComments(responce.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommtById(params.id);
  }, []);

  return (
    <div>
      <h1>страница ID {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h2>Комментарии:</h2>
      {isLoadingComm ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div style={{ marginTop: 15 }}>
              <h4>{comm.email}</h4>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
