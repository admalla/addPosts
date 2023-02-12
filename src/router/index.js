import { About } from '../pages/About';
import { PageIdPost } from '../pages/PageIdPost';
import { Posts } from '../pages/Posts';

export const routes = [
  { path: '/about', element: About },
  { path: '/posts', element: Posts },
  { path: '/posts/:id', element: PageIdPost },
];
