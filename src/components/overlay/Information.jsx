import { NavBar } from "./NavBar";
import { Router } from './Router.jsx'
import { useInSight } from "../../hooks/useInSight.jsx";
import { useRef, lazy, Suspense } from "react";
import { LoadingCircle } from "./LoadingCircle.jsx";

const AboutPage = lazy(() => import('./About.jsx'));
const WorkPage = lazy(() => import('./Work.jsx'));
const PersonalPage = lazy(() => import('./Personal.jsx'));

const routes = [
  {
    path: '/work',
    Component: WorkPage
  },
  {
    path: '/personal',
    Component: PersonalPage
  },
  {
    path: '/about',
    Component: AboutPage
  },
];

export function Information() {
  const ref1 = useRef(null);
  
  const isInView = useInSight(ref1, '/work');

  return (
    <>
      <article ref={ref1} className="page-container" id="information" >
        <Suspense fallback={<LoadingCircle />}>
          <Router routes={routes}></Router>
        </Suspense>
      </article>
      <NavBar />
    </>
  );
}