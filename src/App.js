import React, { useEffect, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';
import postsService from './API/postsService';
import { Loader } from './components/UI/Loader/Loader';
import UseFetching from './hooks/useFetching';
import { Pagination } from './components/UI/pagination/Pagination';
import { getPagesCount } from './utilis/pages';
import { UsePagination } from './hooks/usePagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const pageArray = UsePagination(totalPages);

  const [fetchPosts, isLoadingPosts, errorPosts] = UseFetching(async () => {
    const responce = await postsService.getAll(limit, page);
    setPosts(responce.data);
    const totalCount = responce.headers['x-total-count'];
    console.log(totalCount);
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {errorPosts && <h1>Произошла ошибка {errorPosts}</h1>}
      {isLoadingPosts ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
      ) : (
        <PostList posts={sortedAndSearchedPosts} title={'Посты про JS'} remove={removePost} />
      )}
      <Pagination page={page} changePage={changePage} pageArray={pageArray} />
    </div>
  );
}

export default App;
