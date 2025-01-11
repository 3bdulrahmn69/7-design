import Container from '../../../components/container';
import { Description, Section, Title } from '../../../components/Section';
import MovingSlider from '../../../components/MovingSlider';
import { myProjects } from '../../../services/myProjects';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => {
  return (
    <Section id={'our-projects'}>
      <Title>Recent Projects</Title>
      <Description>Take a look at some of out latest projects.</Description>
      <Container className="flex flex-col py-4 gap-6">
        <MovingSlider speed={100} arrayNumber={8} innerClassName="flex gap-4">
          {myProjects.slice(0, 4).map((project, index) => (
            <ProjectCard key={index} img={project.img} title={project.title} />
          ))}
        </MovingSlider>
        <MovingSlider
          speed={90}
          arrayNumber={8}
          direction={'reverse'}
          innerClassName="flex gap-4"
        >
          {myProjects.slice(4, 8).map((project, index) => (
            <ProjectCard key={index} img={project.img} title={project.title} />
          ))}
        </MovingSlider>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
