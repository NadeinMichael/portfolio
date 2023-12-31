import { useParams } from 'react-router-dom';

import ButtonGitHub from '../components/buttonGitHub/ButtonGitHub';
import { projects } from '../helpers/projectList';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='title-1'>{project.title}</h1>
          {project.deploy ? (
            <a
              href={project.deploy || '#!'}
              target='_blank'
              rel='noreferrer'
              className='project-details__link'
            >
              <img
                src={project.imgBig}
                alt={project.title}
                className='project-details__cover'
              />
            </a>
          ) : (
            <img
              src={project.imgBig}
              alt={project.title}
              className='project-details__cover'
            />
          )}

          <div className='project-details__desc'>
            <p>{project.skills}</p>
          </div>
          <ButtonGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
