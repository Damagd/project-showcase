import { AboutIcon } from "../icons/AboutIcon";
import { WorkIcon } from "../icons/WorkIcon";
import { PersonalIcon } from "../icons/PersonalIcon";

export function Section({type, title, description, children}) {
  return (
    <section className="content" id={type}>
      <div className="content-title">
        <h2>
          <strong>
            {type === 'about' && <AboutIcon />}
            {type === 'work' && <WorkIcon />}
            {type === 'personal' && <PersonalIcon />}
          </strong>
          {title}
        </h2>

        <p>{description}</p>
        <hr className="separator" />
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}