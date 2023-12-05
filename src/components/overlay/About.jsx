import { Section } from './Section.jsx';
import { ListPoint } from './ListPoint.jsx';

export default function About () {
  return (
    <Section type='about' title='Information about' 
    description='Specific points and more information about me, my projects, and this portfolio.'
    >
      <ul className="list-points">
        <div className="progress-line"></div>
        <ListPoint>
          <p>
            Hello! I am Keivin, a <b>programmer</b>.
          </p>
        </ListPoint>
        <ListPoint>
          <p>
            I have completed/finished my bachelor's in <b>Intelligent Systems</b> from the <b>"Universidad Autónoma de San Luis Potosí" (México)</b>.
          </p>
        </ListPoint>
        <ListPoint>
          <p>
            Right now I'm focused on <b>getting more experience</b> in <b>web and application development</b> with modern tools and technologies like <b>React, React native, and Next.js</b>.
          </p>
        </ListPoint>
        <ListPoint>
          <p>
            Besides web development, I'm interested in <b>low level programming</b>, making code that are less "abstract" and more aware of what the computer is doing.
          </p>
        </ListPoint>
        <ListPoint>
          <p>
            That said, I'm <b>open to learning and working</b> with any programming language, technology or subject of computer science. <b>As long as the project is interesting, I'm in!</b>
          </p>
        </ListPoint>
        <ListPoint>
          <p>
            This portfolio was made as a <b>extension for my resume</b>, so I can be more detailed about my projects. The technologies used on it were mainly <b>HTML, CSS, JavaScript/ReactJs, ThreeJs and React Three Fiber</b>.
          </p>
        </ListPoint>
        <ListPoint>
          <p>
            This was my first <b>React and React Three Fiber project</b>, so it's possible that some things or code could be done better, I made it to learn the basics. Here is the <b><a href="https://www.figma.com/file/v31FZxO6R0fJM4ibuDYJ4n/Portfolio?type=design&node-id=0%3A1&mode=design&t=xSunlKyJNZiofRWg-1" target="_blank">Figma project</a></b> if you want to check it.
          </p>
        </ListPoint>
        <ListPoint>
          <p>
            If you have any question about one of my projects or anything related to work, feel free to <b>contact me through my <a href="https://www.linkedin.com/in/keivin-martínez/" target="_blank">LinkedIn</a> or my phone if you come from my resume</b>.
          </p>
        </ListPoint>
        <ListPoint>
          <p>
            Thanks to <a href="https://opengameart.org/content/3d-house-construction-site-lowpoly-cc0" target="_blank">Majadroid</a> for the construction site model, and <a href="https://youtu.be/5Cv3f-8Cb0Q?si=j4s0ohqucrqltAcy" target="_blank">Elias Wick</a> for the cloud model.
          </p>
        </ListPoint>
      </ul>
    </Section>
  );
}