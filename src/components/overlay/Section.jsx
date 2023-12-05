import { AboutIcon } from "../icons/AboutIcon";
import { WorkIcon } from "../icons/WorkIcon";
import { PersonalIcon } from "../icons/PersonalIcon";

export function Section({type, title, description, children}) {
  return (
    <section className="page fadeIn" id={type}>
      <header className="page-header">
        <h2>
          <b style={{color: 'var(--main_turquesa_color)'}}>
            {type === 'about' && <AboutIcon />}
            {type === 'work' && <WorkIcon />}
            {type === 'personal' && <PersonalIcon />}
          </b>
          {title}
        </h2>

        <p>{description}</p>
        <hr className="separator" />
      </header>

      <section className="content">
        {children}
      </section>
    </section>
  );
}