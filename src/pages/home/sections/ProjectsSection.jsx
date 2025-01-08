import Container from '../../../components/container';
import { Description, Section, Title } from '../../../components/Section';
import MovingSlider from '../../../components/MovingSlider';
import { myProjects } from '../../../services/myProjects';

const ProjectsSection = () => {
  return (
    <Section id={'our-projects'}>
      <Title>Recent Projects</Title>
      <Description>Take a look at some of out latest projects.</Description>
      <Container>
        <MovingSlider speed={10}>
          {myProjects.map((project, index) => (
            <img
              key={index}
              src={project.img}
              alt="project"
              className="w-96 h-full object-contain"
              loading="lazy"
            />
          ))}
        </MovingSlider>
        <MovingSlider speed={10} direction={'right'}>
          {myProjects.map((project, index) => (
            <img
              key={index}
              src={project.img}
              alt="project"
              className="w-96 h-full object-contain"
              loading="lazy"
            />
          ))}
        </MovingSlider>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
