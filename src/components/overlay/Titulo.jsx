import { GithubIcon } from "../icons/GithubIcon"
import { LinkedinIcon } from "../icons/LinkedinIcon"

export function Titulo ({ hide }) {
  const hidden = hide ? ' hide' : '';
  const clase = 'title' + hidden;

  return (
      <div className={clase}>
        <small>Hello!</small>
        <h1>I'm <strong>Keivin Martínez</strong>,</h1>
        <small>welcome to my portfolio</small>

        <div className="links-icon">
          <a href="https://www.linkedin.com/in/keivin-martínez/" target="_blank"><LinkedinIcon /></a>
          <a href="https://github.com/Damagd" target="_blank"><GithubIcon /></a>
        </div>
      </div>
  )
}