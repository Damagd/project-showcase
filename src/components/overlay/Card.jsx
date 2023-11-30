import './Card.css'
import { FigmaIcon } from '../icons/FigmaIcon.jsx';
import { GithubIcon } from '../icons/GithubIcon.jsx';
import { YoutubeIcon } from '../icons/YoutubeIcon.jsx';

import photo from '../../assets/photo.jpg';


function openModal(value) {
  const navigationEvent = new CustomEvent('openmodal', {detail:value});
  window.dispatchEvent(navigationEvent);
}

export function Card({project}) {

  const handelClick = () => {
    openModal(project)
  }

  return (
    <article className="card">
      <header className="card-image">
        <img src={project.photo !== '' ? project.photo : photo} width={'100%'}  alt={`image of the project ${project.title}, a ${project.short_description}`} loading="lazy" />
      </header>
      <section onClick={handelClick} className='card-info'>
        <h3 className='card-title'>{project.title}</h3>
        <span className="container-technologies">
          {
            project.technologies.map((tech) => {
              return (
                <div key={tech} className="technology">
                  {tech}
                </div>
              )
            })
          }
        </span>
        <p className="card-description">
          {project.short_description}
        </p>
        <span className="false-links-icon"></span>
      </section>
      <span className="links-icon">
        {
          project.links.map((link) => {
            return (
              <a title={link.page + ' project'} href={link.link} key={link.page} target="_blank">
                {link.page === 'github' && <GithubIcon />}
                {link.page === 'figma' && <FigmaIcon />}
                {link.page === 'youtube' && <YoutubeIcon />}
              </a>
            );
          })
        }
      </span>
    </article>
  );
}

/*
<article className="card">
      <header className="card-image">
        <img src={project.photo !== '' ? project.photo : photo} width={'100%'}  alt="" />
      </header>
      <section className='card-info'>
        <div onClick={handelClick} style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between', width:'100%', height:'100%', gap: '0.5rem'}}>

        <h3 className='card-title'>{project.title}</h3>
        <span className="container-technologies">
          {
            project.technologies.map((tech) => {
              return (
                <div key={tech} className="technology">
                  {tech}
                </div>
              )
            })
          }
        </span>
        <p className="card-description">
          {project.short_description}
        </p>
        </div>
        <span className="links-icon">
          {
            project.links.map((link) => {
              return (
                <a href={link.link} key={link.page} target="_blank">
                  {link.page === 'github' && <GithubIcon />}
                  {link.page === 'figma' && <FigmaIcon />}
                </a>
              );
            })
          }
        </span>
      </section>
    </article>
*/

/*

*/