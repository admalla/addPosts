import { useState } from 'react';

export default function UseFetching(callback) {
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [error, setErorr] = useState('');

  const fetching = async () => {
    try {
      setIsLoadingPosts(true);
      await callback();
    } catch (e) {
      setErorr(e.message);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  return [fetching, isLoadingPosts, error];
}
