import { Section } from './Section.jsx';
import { Card } from './Card.jsx';
import { SpotLightElement } from './SpotLightElement.jsx'

import {projects} from '../../assets/work.json';

export default function Work () {
  return (
    <Section type='work' title='Job experience' description='External projects that I have worked on with a team or stand alone.'>
      <div className="content-cards">
        {
          projects.map((project) => {
            return (
                <SpotLightElement key={project._id}>
                  <Card project={project} />
                </SpotLightElement>
              )
            })
        }
      </div>
    </Section>
  );
}