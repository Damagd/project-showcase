import { Section } from './Section.jsx';
import { Card } from './Card.jsx';
import { SpotLightElement } from './SpotLightElement.jsx'

import {projects} from '../../assets/personal.json';

export default function Personal() {
  return (
    <Section type='personal' title='Personal projects' 
    description='Projects that I have built on my own. Many of these projects were done during university for some course. I add them because, in my opinion, they have interesting features.'
    >
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