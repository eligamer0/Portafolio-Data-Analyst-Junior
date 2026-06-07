import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import Loader from './components/Loader/Loader.jsx';
import './styles/global.css';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const About = lazy(() => import('./pages/About/About.jsx'));
const Skills = lazy(() => import('./pages/Skills/Skills.jsx'));
const Projects = lazy(() => import('./pages/Projects/Projects.jsx'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail/ProjectDetail.jsx'));
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));

const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <ScrollToTop />
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: 'sobre-mi', element: withSuspense(About) },
      { path: 'habilidades', element: withSuspense(Skills) },
      { path: 'proyectos', element: withSuspense(Projects) },
      { path: 'proyectos/:projectSlug', element: withSuspense(ProjectDetail) },
      { path: 'contacto', element: withSuspense(Contact) },
      { path: '*', element: withSuspense(NotFound) }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
