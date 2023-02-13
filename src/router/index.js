import { About } from '../pages/About';
import { Login } from '../pages/Login';
import { PageIdPost } from '../pages/PageIdPost';
import { Posts } from '../pages/Posts';

export const privateRoutes = [
  { path: '/about', element: About },
  { path: '/posts', element: Posts },
  { path: '/posts/:id', element: PageIdPost },
];

export const publicRoutes = [{ path: '/login', element: Login }];
