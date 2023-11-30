import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon.jsx";
import { GithubIcon } from "../icons/GithubIcon.jsx";
import { FigmaIcon } from "../icons/FigmaIcon.jsx";

import './Modal.css';

export function Modal() {
  const [opened, setOpened] = useState(false);
  const [project, setProject] = useState(null);
  const [formattedText, setFormat] = useState(null);
  const outModal = useRef(null);

  const handleClose = () => {
    setOpened(false);
    /*const modal = document.getElementById('modal');
    modal.scrollIntoView();*/
  }

  const handleClickOut = (e) => {
    if(e.target === outModal.current)
      setOpened(false);
  }
 
  useEffect(() => {
    const onOpenModal = e => {
      const text = e.detail.description.split('/*');
      
      setProject({...e.detail});
      setFormat(text);
      setOpened(true);
    }

    window.addEventListener('openmodal', onOpenModal);

    return () => {
      window.removeEventListener('openmodal', onOpenModal);
    }
  },[]);

  return (
    <>
      {opened && 
      <div id="modal" ref={outModal} onClick={handleClickOut} className="modal-container fadeIn">
        <div className="modal">
          <div className="button-close-holder">
            <button onClick={handleClose} className="button-close"><CloseIcon/></button>
          </div>
          {
            project.video 
            &&  
            <aside>
              <iframe width="100%" height={'100%'} src={project?.video} title={project?.title} frameBorder="0"></iframe>
            </aside>
          }
          <article className="modal-content">
            <section className="modal-main">
              <header className="page-header">
                <h2>{project?.title}</h2>
                <hr className="separator" />
              </header>
              <div>
                <h3>Description:</h3>
                {
                formattedText.map((text, index) => {
                  return (
                    <div key={index}>
                      <p>{text}</p>
                      {index < formattedText.length-1 && <br />}
                    </div>
                    )}
                  )
                }
              </div>
              <div>
                <h3>Languages, technologies, and methodologies:</h3>
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
              </div>
              <div>
                <h3>Delivery date:</h3>
                <p>{project?.date}</p>
              </div>
            </section>
            <footer>
              <hr className="separator"/>
              <h3>Project:</h3>
              <span className="links-icon">
                {
                  project?.links.map((link) => {
                    return (
                      <a title={link.page + ' project'} href={link.link} key={link.page} target="_blank">
                        {link.page === 'github' && <GithubIcon />}
                        {link.page === 'figma' && <FigmaIcon />}
                      </a>
                    );
                  })
                }
              </span>
            </footer>
          </article>
        </div>
      </div>
      }
    </>
  );
}