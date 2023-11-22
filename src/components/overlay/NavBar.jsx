import { AboutIcon } from "../icons/AboutIcon";
import { WorkIcon } from "../icons/WorkIcon";
import { PersonalIcon } from "../icons/PersonalIcon";
import { Link } from "./Link";
import { useListenToPath } from "../../hooks/useListenToPath";

export function NavBar() {
  const {currentPath} = useListenToPath();

  return (
    <nav>
      <ul className="navigator">
        <li className="option-nav">
            <Link to='/work' className={"option-nav " + (currentPath === '/work' ? 'selected' : '')} >
              <WorkIcon />
              <small>Work</small>
            </Link>
        </li>
        <li className="option-nav">
            <Link to='/personal' className={"option-nav " + (currentPath === '/personal' ? 'selected' : '')}>
              <PersonalIcon />
              <small>Personal</small>
            </Link>
        </li>
        <li className="option-nav">
            <Link to='/about' className={"option-nav " + (currentPath === '/about' ? 'selected' : '')}>
              <AboutIcon />
              <small>About</small>
            </Link>
        </li>
      </ul>
    </nav>
  );
}